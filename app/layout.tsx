import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alessandro-allegri.github.io"),
  title: {
    default: "Alessandro Allegri — Industrial Chemistry Research",
    template: "%s — Alessandro Allegri",
  },
  description:
    "Research in industrial chemistry, heterogeneous catalysis, biomass valorisation, and circular chemical processes at the University of Bologna.",
  icons: {
    icon: "/alessandro-allegri.png",
    shortcut: "/alessandro-allegri.png",
  },
  openGraph: {
    title: "Alessandro Allegri — Industrial Chemistry Research",
    description: "Industrial chemistry for circular processes.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Alessandro Allegri — Industrial chemistry for circular processes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alessandro Allegri — Industrial Chemistry Research",
    description: "Industrial chemistry for circular processes.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        { url: "/rss/latest.xml", title: "Latest publications" },
        { url: "/rss/cited.xml", title: "Most cited publications" },
      ],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

