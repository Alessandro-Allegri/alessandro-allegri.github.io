import type { Metadata } from "next";
import { FooterContact } from "../components/FooterContact";
import { PublicationFeed } from "../components/PublicationFeed";
import { SiteHeader } from "../components/SiteHeader";
import { citedPublications } from "../data";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Current research interests, methods, collaborations, and most-cited publications of Alessandro Allegri.",
  alternates: { canonical: "/research" },
};

const researchAreas = [
  {
    number: "01",
    title: "Catalytic biomass valorisation",
    text: "Multifunctional and heterogeneous catalysts for transforming furfural, HMF, and related platform molecules into γ-valerolactone, FDCA, and other higher-value products.",
    tags: ["Biomass", "Cascade reactions", "Continuous flow"],
  },
  {
    number: "02",
    title: "CO₂ and industrial residues",
    text: "Non-reductive carbon dioxide conversion, mineralisation, and the valorisation of alkaline industrial residues as lower-impact constituents for materials and cement.",
    tags: ["CO₂ mineralisation", "Circular materials", "Industrial waste"],
  },
  {
    number: "03",
    title: "Catalyst and nanoparticle design",
    text: "Metal nanoparticles, polymeric stabilisers, mixed oxides, and polymer–inorganic composite materials with tuned acidity, redox behaviour, and surface properties.",
    tags: ["Nanoparticles", "Hybrid materials", "Thermal catalysis"],
  },
  {
    number: "04",
    title: "Process modelling & optimisation",
    text: "Experimental design, phenomenological modelling, and machine learning approaches that connect chemical insight to robust industrial process decisions.",
    tags: ["Design of experiments", "Modelling", "Machine learning"],
  },
];

const collaborations = [
  {
    place: "Bologna, Italy",
    title: "University of Bologna · C3 Centre for Chemical Catalysis",
    text: "Core collaborations across industrial chemistry, catalyst synthesis, spectroscopic characterisation, modelling, and sustainable process development.",
  },
  {
    place: "Valencia, Spain",
    title: "Heterogeneous Catalysis Research Group · University of Valencia",
    text: "Joint work on Zr-, Nb-, Sn-, and Pt-containing catalysts for furfural upgrading in batch and continuous-flow reactors.",
  },
  {
    place: "Faenza & Bollate, Italy",
    title: "CNR-ISSMC · Solvay Specialty Polymers",
    text: "Composite Aquivion/oxide catalyst development, spray freeze-drying, and the cascade conversion of furfural to γ-valerolactone.",
  },
  {
    place: "International network",
    title: "Manchester · TU Delft · ENS Lyon",
    text: "Recent joint publications couple catalyst design with mechanistic, spectroscopic, and computational insight into HMF oxidation.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="research-hero">
          <div className="shell research-hero-inner">
            <div>
              <p className="eyebrow eyebrow-light">Research</p>
              <h1>Designing better chemistry by understanding the process.</h1>
            </div>
            <div className="research-hero-note">
              <span>Current aim</span>
              <p>
                Connect catalytic materials, reaction engineering, and
                data-informed optimisation to advance resource-efficient
                industrial chemistry.
              </p>
            </div>
          </div>
          <div className="orbit-field" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="shell research-areas" aria-labelledby="areas-title">
          <div className="research-index">
            <p className="eyebrow">Current interests</p>
            <h2 id="areas-title">A connected research programme.</h2>
            <p>
              The same question runs through each strand: how can chemistry use
              carbon, energy, and materials more intelligently?
            </p>
          </div>
          <div className="area-list">
            {researchAreas.map((area) => (
              <article key={area.number}>
                <span>{area.number}</span>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                  <ul aria-label={`${area.title} keywords`}>
                    {area.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="collaboration-section" aria-labelledby="collab-title">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow eyebrow-light">Collaboration network</p>
                <h2 id="collab-title">Research is a team reaction.</h2>
              </div>
              <p>
                Selected institutional relationships reflected in recent joint
                publications and project work.
              </p>
            </div>
            <div className="collaboration-grid">
              {collaborations.map((collaboration) => (
                <article key={collaboration.title}>
                  <span>{collaboration.place}</span>
                  <h3>{collaboration.title}</h3>
                  <p>{collaboration.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="shell">
          <PublicationFeed
            eyebrow="Research impact"
            title="Most cited publications"
            intro="A citation-sorted feed from the public Google Scholar profile. Counts are a dated snapshot and will evolve."
            publications={citedPublications}
            rssHref="/rss/cited.xml"
            numbered
          />
        </div>
      </main>
      <FooterContact />
    </>
  );
}

