import type { Publication } from "../data";
import { scopus, scopusUpdated } from "../data";

type PublicationFeedProps = {
  eyebrow: string;
  title: string;
  intro: string;
  publications: Publication[];
  rssHref: string;
  numbered?: boolean;
};

export function PublicationFeed({
  eyebrow,
  title,
  intro,
  publications,
  rssHref,
  numbered = false,
}: PublicationFeedProps) {
  return (
    <section className="publication-section" aria-labelledby={`${eyebrow}-title`}>
      <div className="section-heading publication-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${eyebrow}-title`}>{title}</h2>
        </div>
        <div className="feed-note">
          <p>{intro}</p>
          <a className="rss-link" href={rssHref} type="application/rss+xml">
            <span aria-hidden="true">◉</span> Subscribe via RSS
          </a>
        </div>
      </div>
      <div className="publication-list">
        {publications.map((publication, index) => (
          <article
            className="publication-card"
            key={publication.scopusId || `${publication.title}-${publication.year}`}
          >
            <div className="publication-index" aria-hidden="true">
              {numbered ? String(index + 1).padStart(2, "0") : publication.year}
            </div>
            <div className="publication-body">
              <div className="publication-meta">
                <span>{publication.kind ?? "Article"}</span>
                <span>{publication.venue}</span>
              </div>
              <h3>
                <a href={publication.url} target="_blank" rel="noreferrer">
                  {publication.title}
                </a>
              </h3>
              <p className="publication-doi">
                DOI:{" "}
                {publication.doi ? (
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {publication.doi}
                  </a>
                ) : (
                  <span>Not available in Scopus</span>
                )}
              </p>
            </div>
            <div className="publication-side">
              <time dateTime={String(publication.year)}>{publication.year}</time>
              {typeof publication.citations === "number" && (
                <a href={publication.citedByUrl} target="_blank" rel="noreferrer">
                  {publication.citations} citation
                  {publication.citations === 1 ? "" : "s"}
                </a>
              )}
              <span className="publication-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </article>
        ))}
      </div>
      <p className="source-note">
        Publication data and citation counts from{" "}
        <a href={scopus.profileUrl} target="_blank" rel="noreferrer">
          Scopus
        </a>
        , updated {scopusUpdated}. Citation counts link to their Scopus records
        and change over time.
      </p>
    </section>
  );
}

