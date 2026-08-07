import type { Metadata } from "next";
import { FooterContact } from "../components/FooterContact";
import { PublicationFeed } from "../components/PublicationFeed";
import { ScopusMetrics } from "../components/ScopusMetrics";
import { SiteHeader } from "../components/SiteHeader";
import { citedPublications } from "../data";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research in catalysis, Design of Experiments, process modelling, machine learning, circular chemistry, and industrial residue valorisation.",
  alternates: { canonical: "/research/" },
};

const researchAreas = [
  {
    number: "01",
    title: "Design of Experiments, modelling & machine learning",
    text: "Design of Experiments (DoE), response-surface methods, phenomenological modelling, and machine-learning approaches that turn experimental data into interpretable, robust process decisions.",
    tags: ["Design of Experiments", "Process modelling", "Machine learning"],
  },
  {
    number: "02",
    title: "Catalytic biomass valorisation",
    text: "Multifunctional and heterogeneous catalysts for transforming furfural, HMF, and related platform molecules into γ-valerolactone, FDCA, and other higher-value products.",
    tags: ["Biomass", "Cascade reactions", "Continuous flow"],
  },
  {
    number: "03",
    title: "Catalyst and nanoparticle design",
    text: "Metal nanoparticles, polymeric stabilisers, mixed oxides, and polymer–inorganic composite materials with tuned acidity, redox behaviour, and surface properties.",
    tags: ["Nanoparticles", "Hybrid materials", "Thermal catalysis"],
  },
  {
    number: "04",
    title: "CO₂ and industrial residues",
    text: "Non-reductive carbon dioxide conversion, mineralisation, and the valorisation of alkaline industrial residues as lower-impact constituents for materials and cement.",
    tags: ["CO₂ mineralisation", "Circular materials", "Industrial waste"],
  },
];

const closeCollaborators = [
  {
    name: "Stefania Albonetti",
    unibo: "https://www.unibo.it/sitoweb/stefania.albonetti/en",
    orcid: "https://orcid.org/0000-0002-2371-3228",
    scholar:
      "https://scholar.google.com/citations?user=0XUF8REAAAAJ&hl=en&oi=ao",
  },
  {
    name: "Nikolaos Dimitratos",
    unibo: "https://www.unibo.it/sitoweb/nikolaos.dimitratos/en",
    orcid: "https://orcid.org/0000-0002-6620-4335",
    scholar:
      "https://scholar.google.com/citations?user=fKyJ5CQAAAAJ&hl=en&oi=ao",
  },
];

const researchNetworks = [
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
              <h1>Chemistry through experiments, models, and data</h1>
            </div>
            <div className="research-hero-note">
              <span>Current aim</span>
              <p>
                Connect catalytic materials, Design of Experiments, process
                modelling, and machine learning to advance resource-efficient
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

        <ScopusMetrics />

        <section className="shell research-areas" aria-labelledby="areas-title">
          <div className="research-index">
            <p className="eyebrow">Current interests</p>
            <h2 id="areas-title">A connected research programme</h2>
            <p>
              The same question runs through each strand: how can chemistry
              learn more from each experiment while using carbon, energy, and
              materials more intelligently?
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
                <h2 id="collab-title">Research is a team reaction</h2>
              </div>
              <p>
                Close collaborators and selected institutional relationships
                reflected in recent joint publications and project work.
              </p>
            </div>
            <div className="close-collaborators">
              <p className="collaboration-kicker">Close collaborators</p>
              <div className="collaborator-grid">
                {closeCollaborators.map((collaborator) => (
                  <article className="collaborator-card" key={collaborator.name}>
                    <span>University of Bologna</span>
                    <h3>
                      <a
                        href={collaborator.unibo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {collaborator.name} <i aria-hidden="true">↗</i>
                      </a>
                    </h3>
                    <div className="collaborator-links">
                      <a
                        href={collaborator.unibo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        UniBo profile
                      </a>
                      <a
                        href={collaborator.orcid}
                        target="_blank"
                        rel="noreferrer"
                      >
                        ORCID
                      </a>
                      <a
                        href={collaborator.scholar}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Google Scholar
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <p className="collaboration-kicker network-kicker">
              Institutional network
            </p>
            <div className="collaboration-grid">
              {researchNetworks.map((collaboration) => (
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
            title="Most cited articles"
            intro="The most cited Scopus-indexed articles, refreshed automatically every week."
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

