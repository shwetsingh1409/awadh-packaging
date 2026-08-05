export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  src: string;
  thumb: string;
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "01",
    title: "Factory Entrance",
    category: "Exterior",
    src: "/images/gallery/01-factory-exterior-entrance.jpg",
    thumb: "/images/gallery/01-factory-exterior-entrance.jpg",
    alt: "Awadh Packaging factory exterior with open entrance and company signage in Ayodhya",
  },
  {
    id: "02",
    title: "Facility Exterior",
    category: "Exterior",
    src: "/images/gallery/02-factory-exterior-wide.jpg",
    thumb: "/images/gallery/02-factory-exterior-wide.jpg",
    alt: "Wide view of the Awadh Packaging blue corrugated manufacturing warehouse",
  },
  {
    id: "03",
    title: "ACME Stitching Machine",
    category: "Machines",
    src: "/images/gallery/03-stitching-machine-acme.jpg",
    thumb: "/images/gallery/03-stitching-machine-acme.jpg",
    alt: "Blue ACME industrial stitching machine with stacked corrugated sheets ready for assembly",
  },
  {
    id: "04",
    title: "Custom Printed Sheets",
    category: "Production",
    src: "/images/gallery/04-printed-sheet-prem-bhog.jpg",
    thumb: "/images/gallery/04-printed-sheet-prem-bhog.jpg",
    alt: "Custom multi-color printed corrugated sheet on the production machine bed",
  },
  {
    id: "05",
    title: "Warehouse Sheet Storage",
    category: "Warehouse",
    src: "/images/gallery/05-warehouse-sheet-stacks.jpg",
    thumb: "/images/gallery/05-warehouse-sheet-stacks.jpg",
    alt: "Tall stacked bundles of corrugated sheets stored inside the warehouse",
  },
  {
    id: "06",
    title: "Rotary Production Line",
    category: "Production",
    src: "/images/gallery/06-rotary-machine-production.jpg",
    thumb: "/images/gallery/06-rotary-machine-production.jpg",
    alt: "Workers operating rotary corrugated box manufacturing machinery",
  },
  {
    id: "07",
    title: "Production Floor Overview",
    category: "Interior",
    src: "/images/gallery/07-production-floor-overview.jpg",
    thumb: "/images/gallery/07-production-floor-overview.jpg",
    alt: "Interior overview of Awadh Packaging production floor with machinery and sheet stacks",
  },
  {
    id: "08",
    title: "Finished Sheet Bundles",
    category: "Warehouse",
    src: "/images/gallery/08-finished-sheets-bundled.jpg",
    thumb: "/images/gallery/08-finished-sheets-bundled.jpg",
    alt: "Finished corrugated sheet bundles strapped and ready for conversion or dispatch",
  },
  {
    id: "09",
    title: "Assembly Workstation",
    category: "Production",
    src: "/images/gallery/09-assembly-workstation.jpg",
    thumb: "/images/gallery/09-assembly-workstation.jpg",
    alt: "Worker assembling corrugated packaging at a factory workstation",
  },
  {
    id: "10",
    title: "Champion Corrugation Line",
    category: "Machines",
    src: "/images/gallery/10-champion-corrugation-line.jpg",
    thumb: "/images/gallery/10-champion-corrugation-line.jpg",
    alt: "Champion brand corrugation and sheet processing line with operators",
  },
  {
    id: "11",
    title: "Facility Interior",
    category: "Interior",
    src: "/images/gallery/11-facility-interior-wide.jpg",
    thumb: "/images/gallery/11-facility-interior-wide.jpg",
    alt: "Wide interior view of the manufacturing shed with trusses, stacks, and machinery",
  },
  {
    id: "12",
    title: "Corrugation in Progress",
    category: "Machines",
    src: "/images/gallery/12-champion-production-line.jpg",
    thumb: "/images/gallery/12-champion-production-line.jpg",
    alt: "Champion production line converting kraft paper into corrugated board",
  },
  {
    id: "13",
    title: "Box Stitching",
    category: "Production",
    src: "/images/gallery/13-box-stitching-operator.jpg",
    thumb: "/images/gallery/13-box-stitching-operator.jpg",
    alt: "Operator stitching corrugated boxes on an ACME industrial stitching machine",
  },
  {
    id: "14",
    title: "Floor Inventory",
    category: "Warehouse",
    src: "/images/gallery/14-corrugated-stacks-floor.jpg",
    thumb: "/images/gallery/14-corrugated-stacks-floor.jpg",
    alt: "Large stacks of corrugated sheets staged on the production floor",
  },
  {
    id: "15",
    title: "Kraft Paper Roll Stand",
    category: "Machines",
    src: "/images/gallery/15-kraft-paper-roll-stand.jpg",
    thumb: "/images/gallery/15-kraft-paper-roll-stand.jpg",
    alt: "Industrial kraft paper roll stand feeding raw material into the corrugation process",
  },
];

export const siteImages = {
  logo: "/images/brand/logos.png",
  hero: "/images/gallery/01-factory-exterior-entrance.jpg",
  exteriorWide: "/images/gallery/02-factory-exterior-wide.jpg",
  infrastructure: "/images/gallery/12-champion-production-line.jpg",
  manufacturing: "/images/gallery/06-rotary-machine-production.jpg",
  about: "/images/gallery/11-facility-interior-wide.jpg",
  stitching: "/images/gallery/03-stitching-machine-acme.jpg",
  printing: "/images/gallery/04-printed-sheet-prem-bhog.jpg",
  warehouse: "/images/gallery/08-finished-sheets-bundled.jpg",
  kraftRolls: "/images/gallery/15-kraft-paper-roll-stand.jpg",
} as const;
