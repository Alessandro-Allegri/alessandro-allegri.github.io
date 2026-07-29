import type { Metadata } from "next";
import { FooterContact } from "../components/FooterContact";
import { SiteHeader } from "../components/SiteHeader";
import { profileLinks } from "../data";

export const metadata: Metadata = {
  title: "About & CV",
  description:
    "Biography, academic appointments, education, and curriculum vitae of Alessandro Allegri.",
  alternates: { canonical: "/about.html" },
};

const education = [
  {
    date: "2023",
    title: "PhD in Chemistry — Industrial Chemistry",
    place: "Alma Mater Studiorum — University of Bologna",
    detail:
      "Thesis: Aquivion-based spray freeze-dried composite catalysts for the cascade conversion of furfural to γ-valerolactone. Supervisor: Prof. Stefania Albonetti.",
    link: "https://amsdottorato.unibo.it/id/eprint/10616/",
  },
  {
    date: "2017–2019",
    title: "Master’s Degree in Industrial Chemistry",
    place: "Alma Mater Studiorum — University of Bologna",
    detail: "Graduated magna cum laude.",
  },
  {
    date: "2014–2017",
    title:
      "Bachelor’s Degree in Chemistry and Technologies for the Environment and Materials",
    place: "Alma Mater Studiorum — University of Bologna",
    detail: "Graduated magna cum laude.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero shell">
          <div>
            <p className="eyebrow">About & CV</p>
            <h1>Research with an industrial point of view</h1>
          </div>
          <p className="page-hero-lede">
            I am an industrial chemist interested in how carefully designed
            catalysts—and the right experimental design and process model—can
            make chemical production more circular, efficient, and
            resource-aware.
          </p>
        </section>

        <section className="shell bio-grid">
          <div className="bio-photo">
            <div className="bio-photo-frame">
              <img
                src="/alessandro-allegri.jpg"
                alt="Portrait of Alessandro Allegri"
                width={960}
                height={1280}
              />
            </div>
            <p>
              Junior Assistant Professor (fixed-term)
              <br />
              University of Bologna
            </p>
          </div>
          <div className="bio-copy">
            <p className="eyebrow">Profile</p>
            <h2>
              Catalytic materials, designed experiments, and data-informed
              process understanding
            </h2>
            <p>
              Alessandro Allegri is a researcher at the University of Bologna,
              where he has worked in industrial chemistry since 2024. His
              research develops catalytic processes for the valorisation of
              biomass-derived molecules and the non-reductive conversion of
              carbon dioxide.
            </p>
            <p>
              His current work gives Design of Experiments, phenomenological
              modelling, and machine learning a central role in process
              optimisation. These methods complement heterogeneous catalysis,
              polymer–inorganic composite materials, nanoparticle synthesis,
              and thermal and photocatalytic routes.
            </p>
            <div className="profile-link-row">
              <a href={profileLinks.orcid} target="_blank" rel="noreferrer">
                ORCID <span>0000-0003-4721-5167 ↗</span>
              </a>
              <a href={profileLinks.scholar} target="_blank" rel="noreferrer">
                Google Scholar <span>97 citations · h-index 7 ↗</span>
              </a>
              <a href={profileLinks.unibo} target="_blank" rel="noreferrer">
                University profile <span>Official page ↗</span>
              </a>
              <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <span>Professional profile ↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Curriculum vitae</p>
                <h2>Appointments & education</h2>
              </div>
              <div className="cv-actions">
                <a
                  className="button button-primary"
                  href={profileLinks.cv}
                  target="_blank"
                  rel="noreferrer"
                >
                  University CV PDF <span aria-hidden="true">↗</span>
                </a>
                <p>The full current CV is presented on this page.</p>
              </div>
            </div>

            <div className="cv-block">
              <h3>Academic appointment</h3>
              <article className="timeline-row">
                <time>2024—present</time>
                <div>
                  <h4>Junior Assistant Professor (fixed-term)</h4>
                  <p>
                    Department of Industrial Chemistry “Toso Montanari”,
                    University of Bologna
                  </p>
                  <span>Academic discipline CHEM-04/A · Industrial Chemistry</span>
                </div>
              </article>
            </div>

            <div className="cv-block">
              <h3>Education</h3>
              {education.map((item) => (
                <article className="timeline-row" key={item.title}>
                  <time>{item.date}</time>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.place}</p>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.detail} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span>{item.detail}</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="shell next-page">
          <p className="eyebrow">Next</p>
          <a href="/research.html">
            See the research programme and collaboration network{" "}
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <FooterContact />
    </>
  );
}
