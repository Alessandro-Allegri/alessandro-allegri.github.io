import scopusData from "./scopus-data.json";

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  date: string;
  citations: number;
  doi: string | null;
  url: string;
  citedByUrl: string;
  kind: string;
  scopusId: string;
};

type ScopusSnapshot = {
  source: string;
  authorId: string;
  profileUrl: string;
  updatedAt: string;
  metrics: {
    documents: number;
    citations: number;
    hIndex: number;
  };
  recent: Publication[];
  mostCited: Publication[];
};

export const profileLinks = {
  unibo: "https://www.unibo.it/sitoweb/alessandro.allegri2/en",
  orcid: "https://orcid.org/0000-0003-4721-5167",
  scholar:
    "https://scholar.google.com/citations?user=HOxnOscAAAAJ&hl=en",
  scopus: "https://www.scopus.com/authid/detail.uri?authorId=57219921001",
  linkedin: "https://www.linkedin.com/in/alessandro-allegri-024a7925a",
  cv: "https://www.unibo.it/sitoweb/alessandro.allegri2/download/en/20211021%20CV%20Allegri.pdf",
};

export const scopus = scopusData as ScopusSnapshot;
export const latestPublications = scopus.recent;
export const citedPublications = scopus.mostCited;
export const scopusUpdated = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
}).format(new Date(scopus.updatedAt));
