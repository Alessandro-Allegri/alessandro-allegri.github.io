import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About & CV" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Alessandro Allegri home">
          <span className="wordmark-mark" aria-hidden="true">
            AA
          </span>
          <span>
            Alessandro Allegri
            <small>Industrial Chemistry</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

