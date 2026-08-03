import { scopus, scopusUpdated } from "../data";

export function ScopusMetrics() {
  return (
    <section className="metrics-band" aria-label="Scopus author metrics">
      <div className="shell metrics-grid">
        <div>
          <strong>{scopus.metrics.documents}</strong>
          <span>Articles</span>
        </div>
        <div>
          <strong>{scopus.metrics.citations}</strong>
          <span>Citations</span>
        </div>
        <div>
          <strong>{scopus.metrics.hIndex}</strong>
          <span>h-index</span>
        </div>
        <p>
          <a href={scopus.profileUrl} target="_blank" rel="noreferrer">
            Scopus author metrics ↗
          </a>
          <br />
          updated {scopusUpdated}
        </p>
      </div>
    </section>
  );
}
