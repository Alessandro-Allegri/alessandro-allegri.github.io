import type { Metadata } from "next";
import { FooterContact } from "../components/FooterContact";
import { SiteHeader } from "../components/SiteHeader";
import { profileLinks } from "../data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Alessandro Allegri at the Department of Industrial Chemistry, University of Bologna.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="contact-hero shell">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Start a conversation</h1>
          </div>
          <p>
            I welcome enquiries about research collaborations, academic
            projects, and student work in industrial chemistry and catalysis.
          </p>
        </section>

        <section className="shell contact-grid">
          <article className="contact-primary">
            <span>Email</span>
            <h2>
              <a href="mailto:alessandro.allegri2@unibo.it">
                alessandro.allegri2
                <br />
                @unibo.it
              </a>
            </h2>
            <p>Appointments and office hours can be arranged by email.</p>
          </article>
          <article>
            <span>Telephone</span>
            <h3>
              <a href="tel:+390512093218">+39 051 20 9 3218</a>
            </h3>
            <p>University of Bologna office line</p>
          </article>
          <article>
            <span>Office</span>
            <h3>Via Piero Gobetti 85</h3>
            <p>
              Department of Industrial Chemistry “Toso Montanari”
              <br />
              40129 Bologna, Italy
            </p>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=Via+Piero+Gobetti+85%2C+Bologna"
              target="_blank"
              rel="noreferrer"
            >
              Open map ↗
            </a>
          </article>
          <article>
            <span>Research profiles</span>
            <div className="contact-profile-links">
              <a href={profileLinks.unibo} target="_blank" rel="noreferrer">
                University of Bologna <i>↗</i>
              </a>
              <a href={profileLinks.orcid} target="_blank" rel="noreferrer">
                ORCID <i>↗</i>
              </a>
              <a href={profileLinks.scholar} target="_blank" rel="noreferrer">
                Google Scholar <i>↗</i>
              </a>
              <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <i>↗</i>
              </a>
            </div>
          </article>
        </section>

        <section className="shell page-links" aria-label="Explore the website">
          <p className="eyebrow">Explore</p>
          <div>
            <a href="/">
              Home <span>Introduction and latest work ↗</span>
            </a>
            <a href="/about/">
              About & CV <span>Biography and education ↗</span>
            </a>
            <a href="/research/">
              Research <span>Interests and collaborations ↗</span>
            </a>
          </div>
        </section>
      </main>
      <FooterContact />
    </>
  );
}

