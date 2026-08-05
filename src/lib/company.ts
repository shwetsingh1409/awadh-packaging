export const company = {
  name: "Awadh Packaging",
  registeredName: "Awadh Packaging",
  tagline: "Premium Packaging. Trusted Quality.",
  description:
    "Indian manufacturer of high-quality corrugated boxes and paper-based packaging solutions for industrial and commercial applications.",
  yearEstablished: 2026,
  businessType: "Proprietorship",
  gstin: "09AFUPS8508N1Z9",
  email: "packagingawadh@gmail.com",
  phones: ["+91 6390066000", "+91 7355950231", "+91 9415717395"],
  whatsapp: "+916390066000",
  whatsappDisplay: "+91 6390066000",
  officeHours: "Monday – Saturday, 09:00 AM – 06:00 PM (IST)",
  address: {
    line1: "Plot No. 341, Industrial Estate, Laxman Puri Marg",
    line2: "Gaddopur, Near FCI Godowns",
    line3: "Lucknow–Gorakhpur Highway",
    city: "Ayodhya",
    pincode: "224001",
    state: "Uttar Pradesh",
    country: "India",
  },
  mapsUrl:
    "https://www.google.com/maps?q=AWADH+PACKAGING+%26+CORRUGATED+BOX+(large+Scale+industrial+use),+Industrial+Estate,+Laxman+Puri+Marg,+Gaddopur+Path,+near+Lucknow+Gorakhpur+highway,+Uttar+Pradesh+224001",
  mapsEmbed:
    "https://maps.google.com/maps?q=AWADH%20PACKAGING%20%26%20CORRUGATED%20BOX%20(large%20Scale%20industrial%20use)%2C%20Industrial%20Estate%2C%20Laxman%20Puri%20Marg%2C%20Gaddopur%20Path%2C%20near%20Lucknow%20Gorakhpur%20highway%2C%20Uttar%20Pradesh%20224001&t=&z=15&ie=UTF8&iwloc=&output=embed",
  siteUrl: "https://awadhpackaging.com",
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    youtube: "",
  },
} as const;

export const navLinks = [
  { href: "/about", label: "About Us", shortLabel: "About" },
  { href: "/products", label: "Products" },
  { href: "/manufacturing", label: "Manufacturing", shortLabel: "Mfg" },
  { href: "/infrastructure", label: "Infrastructure", shortLabel: "Infra" },
  { href: "/industries", label: "Industries", shortLabel: "Sectors" },
  { href: "/gallery", label: "Gallery" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Raw Material Storage",
    description:
      "Virgin and recycled kraft paper stored under controlled conditions for consistent quality.",
  },
  {
    step: "02",
    title: "Corrugation",
    description:
      "Precision corrugation forms durable fluting for strength and cushioning.",
  },
  {
    step: "03",
    title: "Sheet Cutting",
    description:
      "Sheets cut to exact dimensions for custom box and panel requirements.",
  },
  {
    step: "04",
    title: "Printing",
    description:
      "Multi-color branding and logo printing for professional presentation.",
  },
  {
    step: "05",
    title: "Creasing",
    description:
      "Accurate crease lines ensure clean folds and structural integrity.",
  },
  {
    step: "06",
    title: "Slotting",
    description:
      "Precision slotting prepares panels for assembly and load performance.",
  },
  {
    step: "07",
    title: "Stitching",
    description:
      "Secure stitching and joining for heavy-duty and industrial applications.",
  },
  {
    step: "08",
    title: "Quality Inspection",
    description:
      "Every batch checked for ply strength, dimensions, and finish quality.",
  },
  {
    step: "09",
    title: "Packing",
    description:
      "Products packed carefully to protect edges and printed surfaces.",
  },
  {
    step: "10",
    title: "Dispatch",
    description:
      "Timely dispatch with reliable logistics for on-schedule deliveries.",
  },
] as const;

export const industries = [
  {
    name: "FMCG",
    description: "Durable secondary packaging for high-volume consumer goods.",
  },
  {
    name: "Food & Beverage",
    description: "Food-safe corrugated solutions for transit and retail packing.",
  },
  {
    name: "Pharmaceutical",
    description: "Reliable cartons for regulated pharma distribution needs.",
  },
  {
    name: "Electronics",
    description: "Protective packaging engineered for sensitive devices.",
  },
  {
    name: "Agriculture",
    description: "Strong boxes for produce, seeds, and agri-product logistics.",
  },
  {
    name: "Textile",
    description: "Custom cartons for garments, fabrics, and export packing.",
  },
  {
    name: "Automobile",
    description: "Heavy-duty packaging for automotive parts and components.",
  },
  {
    name: "E-Commerce",
    description: "Shipper-ready boxes built for speed and product protection.",
  },
  {
    name: "Logistics",
    description: "Transit packaging designed for stacking and long-haul moves.",
  },
  {
    name: "Consumer Goods",
    description: "Branded packaging that protects and presents products well.",
  },
  {
    name: "Industrial Manufacturing",
    description: "Industrial-grade cartons for machinery and bulk materials.",
  },
] as const;

export const materials = [
  "Virgin Kraft Paper",
  "Recycled Kraft Paper",
  "High GSM Kraft Paper",
] as const;

export const customization = [
  "Custom Dimensions",
  "Multi-Color Printing",
  "Custom Branding",
  "Logo Printing",
] as const;

export const qualityPillars = [
  {
    title: "Material Integrity",
    description:
      "Selected kraft grades matched to load, humidity, and transit requirements.",
  },
  {
    title: "Dimensional Accuracy",
    description:
      "Controlled cutting and creasing for consistent fit and assembly.",
  },
  {
    title: "Structural Strength",
    description:
      "Ply configuration engineered for stacking, puncture, and edge crush performance.",
  },
  {
    title: "Print & Finish Quality",
    description:
      "Clean branding execution for professional shelf and shipment presence.",
  },
  {
    title: "Batch Inspection",
    description:
      "In-process and final checks before packing and dispatch.",
  },
  {
    title: "On-Time Reliability",
    description:
      "Production planning focused on dependable delivery commitments.",
  },
] as const;

export function formatAddress() {
  const a = company.address;
  return `${a.line1}, ${a.line2}, ${a.line3}, ${a.city} – ${a.pincode}, ${a.state}, ${a.country}`;
}

export function whatsappLink(message?: string) {
  const text =
    message ??
    "Hello Awadh Packaging, I would like to request a quotation for corrugated packaging.";
  return `https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}

export function telLink(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}
