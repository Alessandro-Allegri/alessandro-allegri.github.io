import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Alessandro Allegri — Industrial Chemistry Research<\/title>/i,
  );
  assert.match(html, /Catalysis for a/);
  assert.match(html, /Recent publications/);
  assert.match(html, /Subscribe via RSS/);
  assert.match(html, /alessandro\.allegri2@unibo\.it/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("server-renders all requested pages", async () => {
  const expectations = [
    ["/about", /Appointments &amp; education/],
    ["/research", /Most cited publications/],
    ["/contact", /Start a conversation/],
  ];

  for (const [pathname, expected] of expectations) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(await response.text(), expected);
  }
});

test("ships two valid publication feeds and removes the starter preview", async () => {
  const [latest, cited, packageJson] = await Promise.all([
    readFile(new URL("../public/rss/latest.xml", import.meta.url), "utf8"),
    readFile(new URL("../public/rss/cited.xml", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(latest, /<rss version="2\.0"/);
  assert.match(latest, /ordered by release date/);
  assert.match(cited, /<rss version="2\.0"/);
  assert.match(cited, /ordered by citation count/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
  );
  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../public/alessandro-allegri.png", import.meta.url));
  await access(new URL("../app/about/page.tsx", import.meta.url));
  await access(new URL("../app/research/page.tsx", import.meta.url));
  await access(new URL("../app/contact/page.tsx", import.meta.url));
  await access(new URL("../app/page.tsx", import.meta.url));
  await access(new URL("../app/layout.tsx", import.meta.url));
  await access(new URL("../app/globals.css", import.meta.url));
  await access(new URL("../.openai/hosting.json", templateRoot));
});

