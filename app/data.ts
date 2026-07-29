export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  citations?: number;
  url: string;
  kind?: "Article" | "Dataset";
};

export const profileLinks = {
  unibo: "https://www.unibo.it/sitoweb/alessandro.allegri2/en",
  orcid: "https://orcid.org/0000-0003-4721-5167",
  scholar:
    "https://scholar.google.com/citations?user=HOxnOscAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/alessandro-allegri-024a7925a",
  cv: "https://www.unibo.it/sitoweb/alessandro.allegri2/download/en/20211021%20CV%20Allegri.pdf",
};

const scholarCitation = (citationId: string, sortByDate = false) =>
  `https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HOxnOscAAAAJ${
    sortByDate ? "&sortby=pubdate" : ""
  }&citation_for_view=HOxnOscAAAAJ:${citationId}`;

export const latestPublications: Publication[] = [
  {
    title:
      "Unlocking the potential of gas-phase cross-ketonization toward a more sustainable production of valuable asymmetric ketones intermediates",
    authors:
      "J. De Maron, G. M. D’Onofrio, E. Valzano, A. Allegri, A. Fasolini, N. Schiaroli et al.",
    venue: "Sustainable Chemistry and Pharmacy 52, 102436",
    year: 2026,
    url: scholarCitation("MXK_kJrjxJIC", true),
  },
  {
    title:
      "Data on the valorisation of exhausted lime from industrial flue gas treatment for CO₂ capture and storage",
    authors:
      "A. Allegri, A. Catalano, A. R. de Angelis, E. Roccaro, A. Artale, M. C. Bignozzi et al.",
    venue: "University of Bologna research data",
    year: 2026,
    kind: "Dataset",
    url: scholarCitation("kNdYIx-mwKoC", true),
  },
  {
    title:
      "Data on the rational optimisation of the cascade synthesis of biomass-derived γ-valerolactone",
    authors:
      "A. Allegri, S. Martinini, L. Ciacci, A. Saotta, F. Liuzzi, S. Ortelli et al.",
    venue: "University of Bologna research data",
    year: 2026,
    kind: "Dataset",
    url: scholarCitation("3fE2CSJIrl8C", true),
  },
  {
    title:
      "Continuous production of γ-valerolactone from furfural using optimized catalysts containing Zr and Nb",
    authors:
      "A. García, A. Saotta, E. Da Silva, P. J. Miguel, A. Allegri, R. Sánchez-Tovar et al.",
    venue: "Fuel 411, 138062",
    year: 2026,
    citations: 1,
    url: scholarCitation("hqOjcs7Dif8C", true),
  },
  {
    title:
      "Electronic properties of PVA-PVAm ligands dictate mechanistic pathways in Au/AC-catalyzed HMF oxidation",
    authors:
      "F. Liuzzi, S. Scurti, G. Fanciullo, A. Allegri, M. Hu, I. Rivalta et al.",
    venue: "Journal of Catalysis 456, 116770",
    year: 2026,
    url: scholarCitation("8k81kl-MbHgC", true),
  },
];

export const citedPublications: Publication[] = [
  {
    title:
      "Photocatalytic Oxidation of HMF under Solar Irradiation: Coupling of Microemulsion and Lyophilization to Obtain Innovative TiO₂-Based Materials",
    authors:
      "A. Allegri, V. Maslova, M. Blosi, A. L. Costa, S. Ortelli, F. Basile, S. Albonetti",
    venue: "Molecules 25 (22), 5225",
    year: 2020,
    citations: 22,
    url: scholarCitation("ufrVoPGSRksC"),
  },
  {
    title:
      "Effect of Capping Ligands for the Synthesis of Gold Nanoparticles and on the Catalytic Performance for the Oxidation of 5-Hydroxymethyl-2-furfural",
    authors:
      "F. Liuzzi, A. Ventimiglia, A. Allegri, E. Rodríguez-Aguado, I. Rivalta et al.",
    venue: "Catalysts 13, 1–17",
    year: 2023,
    citations: 12,
    url: scholarCitation("IjCSPb-OGe4C"),
  },
  {
    title:
      "Temperature-dependent activity of gold nanocatalysts supported on activated carbon in redox catalytic reactions",
    authors:
      "S. Scurti, A. Allegri, F. Liuzzi, E. Rodríguez-Aguado, J. A. Cecilia et al.",
    venue: "Catalysts 12 (3), 323",
    year: 2022,
    citations: 12,
    url: scholarCitation("LkGwnXOMwfcC"),
  },
  {
    title:
      "Superacid Resin-Based Heterogeneous Catalysts for the Selective Acylation of 1,2-Methylenedioxybenzene",
    authors:
      "N. Schiaroli, A. Allegri, M. Eberle, S. Billi, A. Guerrini, S. Albonetti et al.",
    venue: "ChemSusChem 16 (21), e202300903",
    year: 2023,
    citations: 11,
    url: scholarCitation("2osOgNQ5qMEC"),
  },
  {
    title:
      "Ti/Zr/O Mixed Oxides for the Catalytic Transfer Hydrogenation of Furfural to GVL in a Liquid-Phase Continuous-Flow Reactor",
    authors:
      "A. Saotta, A. Allegri, F. Liuzzi, G. Fornasari, N. Dimitratos, S. Albonetti",
    venue: "ChemEngineering 7 (2), 23",
    year: 2023,
    citations: 11,
    url: scholarCitation("eQOLeE2rZwMC"),
  },
  {
    title:
      "Aquivion-Based Spray Freeze-Dried Composite Materials for the Cascade Production of γ-Valerolactone",
    authors:
      "A. Allegri, A. Saotta, F. Liuzzi, E. Gianotti, G. Paul, A. S. Cattaneo et al.",
    venue: "ChemSusChem 17 (14), e202301683",
    year: 2024,
    citations: 10,
    url: scholarCitation("UeHWp8X0CEIC"),
  },
];

export const scholarUpdated = "28 July 2026";

