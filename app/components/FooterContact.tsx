import Link from "next/link";
import { profileLinks } from "../data";

export function FooterContact() {
  return (
    <footer className="site-footer">
      <section className="shell footer-grid" aria-labelledby="footer-contact">
        <div>
          <p className="eyebrow eyebrow-light">Contact</p>
          <h2 id="footer-contact">Let’s discuss research.</h2>
          <p className="footer-intro">
            For collaborations, student projects, and academic enquiries,
            please get in touch by email.
          </p>
          <a
            className="text-link light-link"
            href="mailto:alessandro.allegri2@unibo.it"
          >
            alessandro.allegri2@unibo.it <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-details">
          <div>
            <span>Office</span>
            <p>
              Department of Industrial Chemistry “Toso Montanari”
              <br />
              Via Piero Gobetti 85, Bologna
            </p>
          </div>
          <div>
            <span>Telephone</span>
            <a href="tel:+390512093218">+39 051 20 9 3218</a>
          </div>
        </div>
        <div className="footer-nav">
          <span>Explore</span>
          <Link href="/">Home</Link>
          <Link href="/about">About & CV</Link>
          <Link href="/research">Research</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </section>
      <div className="shell footer-base">
        <p>© 2026 Alessandro Allegri</p>
        <div>
          <a href={profileLinks.unibo} target="_blank" rel="noreferrer">
            UniBo
          </a>
          <a href={profileLinks.orcid} target="_blank" rel="noreferrer">
            ORCID
          </a>
          <a href={profileLinks.scholar} target="_blank" rel="noreferrer">
            Google Scholar
          </a>
        </div>
      </div>
    </footer>
  );
}

