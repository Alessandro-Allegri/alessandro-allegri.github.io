import { existsSync, writeFileSync } from "node:fs";
import { loadEnvFile } from "node:process";

const AUTHOR_ID = process.env.SCOPUS_AUTHOR_ID || "57219921001";
const RESULT_COUNT = 6;
const SNAPSHOT_PATH = new URL("../app/scopus-data.json", import.meta.url);
const LATEST_RSS_PATH = new URL("../public/rss/latest.xml", import.meta.url);
const CITED_RSS_PATH = new URL("../public/rss/cited.xml", import.meta.url);

if (!process.env.ELSEVIER_API_KEY && existsSync(".env.local")) {
  loadEnvFile(".env.local");
}

const apiKey = process.env.ELSEVIER_API_KEY?.trim();

if (!apiKey) {
  throw new Error(
    "ELSEVIER_API_KEY is missing. Add it to .env.local or the workflow environment.",
  );
}

const headers = {
  Accept: "application/json",
  "X-ELS-APIKey": apiKey,
};

async function getJson(path, parameters = {}) {
  const url = new URL(path, "https://api.elsevier.com");

  for (const [name, value] of Object.entries(parameters)) {
    url.searchParams.set(name, String(value));
  }

  const response = await fetch(url, { headers });

  if (!response.ok) {
    const detail = (await response.text()).replace(/\s+/g, " ").slice(0, 240);
    throw new Error(
      `Elsevier API request failed (${response.status} ${response.statusText})${
        detail ? `: ${detail}` : ""
      }`,
    );
  }

  return response.json();
}

function asNumber(value, fieldName) {
  const parsed = Number.parseInt(String(value), 10);

  if (!Number.isFinite(parsed)) {
    throw new Error(`The Elsevier response did not include a valid ${fieldName}.`);
  }

  return parsed;
}

function asArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function httpsUrl(value) {
  return typeof value === "string" ? value.replace(/^http:/, "https:") : "";
}

function findLink(entry, relation) {
  const link = asArray(entry.link).find((item) => item?.["@ref"] === relation);
  return httpsUrl(link?.["@href"]);
}

function formatVenue(entry) {
  let venue = entry["prism:publicationName"] || "Scopus-indexed publication";
  const volume = entry["prism:volume"];
  const issue = entry["prism:issueIdentifier"];
  const locator = entry["prism:pageRange"] || entry["article-number"];

  if (volume) venue += ` ${volume}`;
  if (issue) venue += ` (${issue})`;
  if (locator) venue += `, ${locator}`;

  return venue;
}

function normalizePublication(entry) {
  const date = entry["prism:coverDate"] || "";
  const year = Number.parseInt(date.slice(0, 4), 10);
  const doi = entry["prism:doi"] || null;
  const scopusId = String(entry["dc:identifier"] || "").replace(
    /^SCOPUS_ID:/,
    "",
  );
  const scopusUrl =
    findLink(entry, "scopus") ||
    (scopusId
      ? `https://www.scopus.com/record/display.uri?eid=${encodeURIComponent(
          entry.eid || `2-s2.0-${scopusId}`,
        )}&origin=resultslist`
      : "https://www.scopus.com/");

  return {
    title: entry["dc:title"] || "Untitled publication",
    venue: formatVenue(entry),
    year: Number.isFinite(year) ? year : new Date().getUTCFullYear(),
    date,
    citations: asNumber(entry["citedby-count"] || 0, "citation count"),
    doi,
    url: scopusUrl,
    citedByUrl: findLink(entry, "scopus-citedby") || scopusUrl,
    kind: entry.subtypeDescription || "Article",
    scopusId,
  };
}

async function fetchAllPublications() {
  const fetchPage = (start) =>
    getJson("/content/search/scopus", {
      query: `AU-ID(${AUTHOR_ID})`,
      sort: "-citedby-count",
      count: 25,
      start,
      view: "STANDARD",
      suppressNavLinks: "true",
    });
  const firstResponse = await fetchPage(0);
  const results = firstResponse?.["search-results"];
  const total = asNumber(results?.["opensearch:totalResults"], "result count");
  const entries = asArray(results?.entry);

  for (let start = entries.length; start < total; start += 25) {
    const response = await fetchPage(start);
    entries.push(...asArray(response?.["search-results"]?.entry));
  }

  if (entries.length === 0) {
    throw new Error("The Scopus search returned no publications for this author.");
  }

  if (entries.length !== total) {
    throw new Error(
      `The Scopus profile has ${total} records, but ${entries.length} were returned.`,
    );
  }

  return {
    total,
    publications: entries.map(normalizePublication),
  };
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function makeRss(title, description, publications, updatedAt) {
  const items = publications
    .map((publication) => {
      const doiText = publication.doi
        ? ` DOI: ${publication.doi}.`
        : " DOI not available in Scopus.";
      const date = publication.date
        ? new Date(`${publication.date}T00:00:00Z`).toUTCString()
        : new Date(`${publication.year}-01-01T00:00:00Z`).toUTCString();

      return `    <item>
      <title>${escapeXml(publication.title)}</title>
      <link>${escapeXml(publication.url)}</link>
      <guid isPermaLink="false">${escapeXml(
        publication.doi || publication.scopusId || publication.url,
      )}</guid>
      <pubDate>${date}</pubDate>
      <description>${escapeXml(
        `${publication.venue}.${doiText}`,
      )}</description>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>https://alessandro-allegri.github.io/</link>
    <description>${escapeXml(description)}</description>
    <lastBuildDate>${new Date(updatedAt).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
}

const { total, publications } = await fetchAllPublications();
const mostCited = [...publications]
  .sort((a, b) => b.citations - a.citations || b.year - a.year)
  .slice(0, RESULT_COUNT);
const recent = [...publications]
  .sort((a, b) => b.date.localeCompare(a.date) || b.citations - a.citations)
  .slice(0, RESULT_COUNT);
const citationCounts = publications
  .map((publication) => publication.citations)
  .sort((a, b) => b - a);
const hIndex = citationCounts.reduce(
  (value, citationCount, index) =>
    citationCount >= index + 1 ? index + 1 : value,
  0,
);

const updatedAt = new Date().toISOString();
const snapshot = {
  source: "Scopus",
  authorId: AUTHOR_ID,
  profileUrl: `https://www.scopus.com/authid/detail.uri?authorId=${AUTHOR_ID}`,
  updatedAt,
  metrics: {
    documents: total,
    citations: citationCounts.reduce((sum, count) => sum + count, 0),
    hIndex,
  },
  recent,
  mostCited,
};

writeFileSync(SNAPSHOT_PATH, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
writeFileSync(
  LATEST_RSS_PATH,
  makeRss(
    "Alessandro Allegri — latest Scopus publications",
    "The most recent Scopus-indexed publications by Alessandro Allegri.",
    recent,
    updatedAt,
  ),
  "utf8",
);
writeFileSync(
  CITED_RSS_PATH,
  makeRss(
    "Alessandro Allegri — most cited Scopus publications",
    "The most cited Scopus-indexed publications by Alessandro Allegri.",
    mostCited,
    updatedAt,
  ),
  "utf8",
);

console.log(
  `Updated Scopus snapshot: ${snapshot.metrics.documents} articles, ${snapshot.metrics.citations} citations, h-index ${snapshot.metrics.hIndex}.`,
);
