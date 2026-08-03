import { FooterContact } from "./components/FooterContact";
import { PublicationFeed } from "./components/PublicationFeed";
import { ScopusMetrics } from "./components/ScopusMetrics";
import { SiteHeader } from "./components/SiteHeader";
import { latestPublications, profileLinks } from "./data";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">
              Industrial chemistry · University of Bologna
            </p>
            <h1>
              Catalysis for a <em>sustainable</em> chemical industry
            </h1>
            <p className="hero-lede">
              I develop catalytic materials and process strategies that turn
              renewable feedstocks and industrial residues into useful
              products — with Design of Experiments, process modelling, and
              machine learning guiding better decisions.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="/research.html">
                Explore my research <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="/contact.html">
                Get in touch
              </a>
            </div>
            <div className="hero-affiliation">
              <span className="status-dot" aria-hidden="true" />
              Junior Assistant Professor (fixed-term), Department of Industrial
              Chemistry “Toso Montanari”
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <div className="portrait-image-frame">
                <img
                  src="/alessandro-allegri.jpg"
                  alt="Alessandro Allegri"
                  width={960}
                  height={1280}
                />
              </div>
            </div>
            <div className="portrait-caption">
              <span>Alessandro Allegri, PhD</span>
              <a href={profileLinks.unibo} target="_blank" rel="noreferrer">
                Official UniBo profile ↗
              </a>
            </div>
          </div>
        </section>

        <ScopusMetrics />

        <section className="shell home-intro">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Research focus</p>
              <h2>From molecules to processes</h2>
            </div>
            <p>
              My work connects catalyst design with Design of Experiments
              (DoE), process modelling, and machine learning—always with
              industrial relevance and circularity in view.
            </p>
          </div>
          <div className="focus-grid">
            <article className="focus-featured">
              <span>01</span>
              <h3>Process intelligence</h3>
              <p>
                DoE, response-surface and phenomenological modelling, and
                machine learning to extract more insight from experiments and
                optimise complex processes.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Biomass valorisation</h3>
              <p>
                Heterogeneous and multifunctional catalysts for upgrading
                biomass-derived platform molecules into fuels, solvents, and
                chemical intermediates.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>CO₂ & industrial residues</h3>
              <p>
                Non-reductive carbon dioxide conversion and the reuse of
                industrial alkaline residues as resources for lower-impact
                materials.
              </p>
            </article>
          </div>
          <a className="text-link" href="/research.html">
            Research interests and collaborations{" "}
            <span aria-hidden="true">→</span>
          </a>
        </section>

        <div className="shell">
          <PublicationFeed
            eyebrow="Latest work"
            title="Recent publications"
            intro="The most recent Scopus-indexed articles, refreshed automatically every week."
            publications={latestPublications}
            rssHref="/rss/latest.xml"
          />
        </div>
      </main>
      <FooterContact />
    </>
  );
}
