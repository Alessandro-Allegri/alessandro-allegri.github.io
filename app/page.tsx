import Link from "next/link";
import { FooterContact } from "./components/FooterContact";
import { PublicationFeed } from "./components/PublicationFeed";
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
              Catalysis for a <em>circular</em> chemical industry.
            </h1>
            <p className="hero-lede">
              I develop catalytic materials and process strategies that turn
              renewable feedstocks and industrial residues into useful
              products—with experiments, modelling, and data working together.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/research">
                Explore my research <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-secondary" href="/contact">
                Get in touch
              </Link>
            </div>
            <div className="hero-affiliation">
              <span className="status-dot" aria-hidden="true" />
              Junior Assistant Professor (fixed-term), Department of Industrial
              Chemistry “Toso Montanari”
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img
                src="/alessandro-allegri.png"
                alt="Alessandro Allegri"
                width={640}
                height={640}
              />
            </div>
            <div className="portrait-caption">
              <span>Alessandro Allegri, PhD</span>
              <a href={profileLinks.unibo} target="_blank" rel="noreferrer">
                Official UniBo profile ↗
              </a>
            </div>
          </div>
        </section>

        <section className="metrics-band" aria-label="Google Scholar metrics">
          <div className="shell metrics-grid">
            <div>
              <strong>97</strong>
              <span>Citations</span>
            </div>
            <div>
              <strong>7</strong>
              <span>h-index</span>
            </div>
            <div>
              <strong>6</strong>
              <span>i10-index</span>
            </div>
            <p>
              Google Scholar metrics
              <br />
              checked 28 July 2026
            </p>
          </div>
        </section>

        <section className="shell home-intro">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Research focus</p>
              <h2>From molecules to processes.</h2>
            </div>
            <p>
              My work connects catalyst design with practical process
              optimisation, keeping industrial relevance and circularity in
              view.
            </p>
          </div>
          <div className="focus-grid">
            <article>
              <span>01</span>
              <h3>Biomass valorisation</h3>
              <p>
                Heterogeneous and multifunctional catalysts for upgrading
                biomass-derived platform molecules into fuels, solvents, and
                chemical intermediates.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>CO₂ mineralisation</h3>
              <p>
                Non-reductive carbon dioxide conversion and the reuse of
                industrial alkaline residues as resources for lower-impact
                materials.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Process intelligence</h3>
              <p>
                Experimental design, phenomenological modelling, and machine
                learning to understand and optimise complex industrial
                processes.
              </p>
            </article>
          </div>
          <Link className="text-link" href="/research">
            Research interests and collaborations{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </section>

        <div className="shell">
          <PublicationFeed
            eyebrow="Latest work"
            title="Recent publications"
            intro="A date-sorted publication feed from Google Scholar, including recent articles and research datasets."
            publications={latestPublications}
            rssHref="/rss/latest.xml"
          />
        </div>
      </main>
      <FooterContact />
    </>
  );
}
