export type Product = {
  slug: string;
  name: string;
  category: "boxes" | "sheets" | "solutions";
  description: string;
  applications: string[];
  specs: string[];
};

export const products: Product[] = [
  {
    slug: "3-ply-corrugated-boxes",
    name: "3 Ply Corrugated Boxes",
    category: "boxes",
    description:
      "Lightweight, economical cartons ideal for retail packing, e-commerce shipments, and everyday industrial use.",
    applications: ["E-commerce", "Retail", "Light industrial goods"],
    specs: ["Single wall construction", "Custom sizes available", "Print-ready surface"],
  },
  {
    slug: "5-ply-corrugated-boxes",
    name: "5 Ply Corrugated Boxes",
    category: "boxes",
    description:
      "Balanced strength for medium to heavy products requiring improved stacking and transit protection.",
    applications: ["FMCG", "Electronics", "Consumer goods"],
    specs: ["Double wall construction", "Higher ECT performance", "Custom branding"],
  },
  {
    slug: "7-ply-corrugated-boxes",
    name: "7 Ply Corrugated Boxes",
    category: "boxes",
    description:
      "Heavy-duty cartons engineered for demanding loads, export packing, and industrial logistics.",
    applications: ["Automobile", "Industrial manufacturing", "Export"],
    specs: ["Triple wall construction", "High load capacity", "Reinforced edges"],
  },
  {
    slug: "printed-corrugated-boxes",
    name: "Printed Corrugated Boxes",
    category: "boxes",
    description:
      "Brand-forward packaging with multi-color printing and logo application for professional presentation.",
    applications: ["Retail brands", "FMCG", "Consumer packaging"],
    specs: ["Multi-color printing", "Logo printing", "Custom artwork support"],
  },
  {
    slug: "heavy-duty-corrugated-boxes",
    name: "Heavy Duty Corrugated Boxes",
    category: "boxes",
    description:
      "Reinforced packaging built for high stack loads, long-haul transport, and rugged warehouse handling.",
    applications: ["Logistics", "Bulk goods", "Industrial parts"],
    specs: ["High GSM kraft options", "Enhanced burst strength", "Custom reinforcement"],
  },
  {
    slug: "die-cut-boxes",
    name: "Die-Cut Boxes",
    category: "boxes",
    description:
      "Precision die-cut cartons shaped for unique product profiles, inserts, and retail-ready formats.",
    applications: ["Specialty products", "Retail displays", "Custom kits"],
    specs: ["Custom die profiles", "Tight tolerances", "Optional inserts"],
  },
  {
    slug: "custom-corrugated-boxes",
    name: "Custom Corrugated Boxes",
    category: "boxes",
    description:
      "Fully customized boxes tailored to dimensions, ply count, printing, and application requirements.",
    applications: ["All industries", "OEM supply", "Private label"],
    specs: ["Made-to-order sizes", "Flexible ply options", "Brand customization"],
  },
  {
    slug: "3-ply-sheets",
    name: "3 Ply Corrugated Sheets",
    category: "sheets",
    description:
      "Versatile single-wall sheets for partitions, pads, wrapping, and light protective packaging.",
    applications: ["Inner packaging", "Layer pads", "Protective wrapping"],
    specs: ["Custom sheet sizes", "Consistent flute quality", "Cut-to-size"],
  },
  {
    slug: "5-ply-sheets",
    name: "5 Ply Corrugated Sheets",
    category: "sheets",
    description:
      "Stronger double-wall sheets for separators, deck sheets, and medium-duty protection.",
    applications: ["Warehouse pads", "Separators", "Transit protection"],
    specs: ["Improved rigidity", "Custom dimensions", "Industrial grade"],
  },
  {
    slug: "7-ply-sheets",
    name: "7 Ply Corrugated Sheets",
    category: "sheets",
    description:
      "Heavy-duty sheets for high-strength pads, pallet lining, and industrial protection needs.",
    applications: ["Pallet protection", "Heavy separators", "Industrial lining"],
    specs: ["Maximum strength sheets", "High GSM options", "Custom cutting"],
  },
  {
    slug: "custom-size-sheets",
    name: "Custom Size Sheets",
    category: "sheets",
    description:
      "Corrugated sheets produced to exact length, width, and ply specifications for production lines.",
    applications: ["OEM lines", "Custom packing cells", "In-house box making"],
    specs: ["Exact dimensions", "Any ply configuration", "Bulk supply"],
  },
  {
    slug: "paper-based-packaging",
    name: "Paper-Based Packaging Solutions",
    category: "solutions",
    description:
      "Customized paper packaging products engineered for industrial and commercial applications.",
    applications: ["Industrial", "Commercial", "Brand packaging programs"],
    specs: ["Application-led design", "Material guidance", "End-to-end support"],
  },
];

export const productCategories = [
  { id: "boxes", label: "Corrugated Boxes" },
  { id: "sheets", label: "Corrugated Sheets" },
  { id: "solutions", label: "Packaging Solutions" },
] as const;
