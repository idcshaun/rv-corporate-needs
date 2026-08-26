export type Product = {
  slug: string;
  name: string;
  division: "Corporate" | "Industrial";
  solution: string;
  solutionSlug: string;
  category: string;
  description: string;
  featured?: boolean;
};

export const products: Product[] = [
  // =========================
  // CORPORATE — GIFTING
  // =========================

  {
    slug: "corporate-gift-sets",
    name: "Corporate Gift Sets",
    division: "Corporate",
    solution: "Corporate Gifting",
    solutionSlug: "corporate-gifting",
    category: "Gifting",
    description:
      "Curated gifting solutions for employees, clients, events and corporate occasions.",
    featured: true,
  },
  {
    slug: "employee-welcome-kits",
    name: "Employee Welcome Kits",
    division: "Corporate",
    solution: "Corporate Gifting",
    solutionSlug: "corporate-gifting",
    category: "Gifting",
    description:
      "Customisable welcome kits designed for employee onboarding and corporate programs.",
  },
  {
    slug: "promotional-merchandise",
    name: "Promotional Merchandise",
    division: "Corporate",
    solution: "Corporate Gifting",
    solutionSlug: "corporate-gifting",
    category: "Gifting",
    description:
      "Branded merchandise and promotional products for corporate events and campaigns.",
  },

  // =========================
  // CORPORATE — HOUSEKEEPING
  // =========================

  {
    slug: "cleaning-chemicals",
    name: "Cleaning Chemicals",
    division: "Corporate",
    solution: "Housekeeping",
    solutionSlug: "housekeeping",
    category: "Housekeeping",
    description:
      "Cleaning chemicals and solutions for routine workplace and facility maintenance.",
    featured: true,
  },
  {
    slug: "janitorial-supplies",
    name: "Janitorial Supplies",
    division: "Corporate",
    solution: "Housekeeping",
    solutionSlug: "housekeeping",
    category: "Housekeeping",
    description:
      "Essential janitorial products for workplace cleaning and maintenance.",
  },
  {
    slug: "waste-management",
    name: "Waste Management Products",
    division: "Corporate",
    solution: "Housekeeping",
    solutionSlug: "housekeeping",
    category: "Housekeeping",
    description:
      "Bins, waste-handling products and related workplace requirements.",
  },

  // =========================
  // CORPORATE — HYGIENE
  // =========================

  {
    slug: "hand-hygiene-products",
    name: "Hand Hygiene Products",
    division: "Corporate",
    solution: "Hygiene",
    solutionSlug: "hygiene",
    category: "Hygiene",
    description:
      "Hand hygiene products supporting clean and healthy workplace environments.",
    featured: true,
  },
  {
    slug: "surface-disinfectants",
    name: "Surface Disinfectants",
    division: "Corporate",
    solution: "Hygiene",
    solutionSlug: "hygiene",
    category: "Hygiene",
    description:
      "Disinfection products for workplace surfaces and shared environments.",
  },
  {
    slug: "washroom-hygiene",
    name: "Washroom Hygiene Products",
    division: "Corporate",
    solution: "Hygiene",
    solutionSlug: "hygiene",
    category: "Hygiene",
    description:
      "Washroom hygiene products and consumables for corporate facilities.",
  },

  // =========================
  // CORPORATE — IT
  // =========================

  {
    slug: "business-laptops",
    name: "Business Laptops",
    division: "Corporate",
    solution: "IT Products",
    solutionSlug: "it-products",
    category: "Technology",
    description:
      "Business computing solutions for office, enterprise and professional environments.",
    featured: true,
  },
  {
    slug: "office-printers",
    name: "Office Printers",
    division: "Corporate",
    solution: "IT Products",
    solutionSlug: "it-products",
    category: "Technology",
    description:
      "Printing solutions for everyday office and business requirements.",
  },
  {
    slug: "networking-products",
    name: "Networking Products",
    division: "Corporate",
    solution: "IT Products",
    solutionSlug: "it-products",
    category: "Technology",
    description:
      "Networking equipment and connectivity products for business environments.",
  },

  // =========================
  // CORPORATE — PANTRY
  // =========================

  {
    slug: "tea-coffee",
    name: "Tea & Coffee",
    division: "Corporate",
    solution: "Pantry",
    solutionSlug: "pantry",
    category: "Pantry",
    description:
      "Tea, coffee and beverage essentials for workplace pantry requirements.",
    featured: true,
  },
  {
    slug: "pantry-consumables",
    name: "Pantry Consumables",
    division: "Corporate",
    solution: "Pantry",
    solutionSlug: "pantry",
    category: "Pantry",
    description:
      "Everyday consumables supporting corporate pantry operations.",
  },
  {
    slug: "disposable-products",
    name: "Disposable Products",
    division: "Corporate",
    solution: "Pantry",
    solutionSlug: "pantry",
    category: "Pantry",
    description:
      "Disposable cups, plates and other pantry-related workplace products.",
  },

  // =========================
  // CORPORATE — STATIONERY
  // =========================

  {
    slug: "writing-instruments",
    name: "Writing Instruments",
    division: "Corporate",
    solution: "Stationery",
    solutionSlug: "stationery",
    category: "Office Supplies",
    description:
      "Pens, pencils, markers and other everyday writing requirements.",
    featured: true,
  },
  {
    slug: "paper-products",
    name: "Paper Products",
    division: "Corporate",
    solution: "Stationery",
    solutionSlug: "stationery",
    category: "Office Supplies",
    description:
      "Paper, notebooks and other paper-based office essentials.",
  },
  {
    slug: "files-folders",
    name: "Files & Folders",
    division: "Corporate",
    solution: "Stationery",
    solutionSlug: "stationery",
    category: "Office Supplies",
    description:
      "Document organisation products for everyday office use.",
  },

  // =========================
  // INDUSTRIAL — BEARINGS
  // =========================

  {
    slug: "industrial-bearings",
    name: "Industrial Bearings",
    division: "Industrial",
    solution: "Bearings",
    solutionSlug: "bearings",
    category: "Mechanical",
    description:
      "Bearing solutions for industrial machinery and equipment applications.",
    featured: true,
  },
  {
    slug: "ball-bearings",
    name: "Ball Bearings",
    division: "Industrial",
    solution: "Bearings",
    solutionSlug: "bearings",
    category: "Mechanical",
    description:
      "Ball bearing solutions for machinery and rotating equipment.",
  },
  {
    slug: "roller-bearings",
    name: "Roller Bearings",
    division: "Industrial",
    solution: "Bearings",
    solutionSlug: "bearings",
    category: "Mechanical",
    description:
      "Roller bearing products for industrial load and motion applications.",
  },

  // =========================
  // INDUSTRIAL — CLEANROOM
  // =========================

  {
    slug: "cleanroom-consumables",
    name: "Cleanroom Consumables",
    division: "Industrial",
    solution: "Cleanroom Solutions",
    solutionSlug: "cleanroom-solutions",
    category: "Cleanroom",
    description:
      "Consumable products designed for controlled and cleanroom environments.",
    featured: true,
  },
  {
    slug: "cleanroom-wipes",
    name: "Cleanroom Wipes",
    division: "Industrial",
    solution: "Cleanroom Solutions",
    solutionSlug: "cleanroom-solutions",
    category: "Cleanroom",
    description:
      "Specialised wipes for controlled-environment cleaning applications.",
  },
  {
    slug: "cleanroom-apparel",
    name: "Cleanroom Apparel",
    division: "Industrial",
    solution: "Cleanroom Solutions",
    solutionSlug: "cleanroom-solutions",
    category: "Cleanroom",
    description:
      "Protective apparel and garments for controlled environments.",
  },

  // =========================
  // INDUSTRIAL — ESD
  // =========================

  {
    slug: "esd-mats",
    name: "ESD Mats",
    division: "Industrial",
    solution: "ESD Solutions",
    solutionSlug: "esd-solutions",
    category: "ESD",
    description:
      "Electrostatic discharge control mats for sensitive work environments.",
    featured: true,
  },
  {
    slug: "esd-wrist-straps",
    name: "ESD Wrist Straps",
    division: "Industrial",
    solution: "ESD Solutions",
    solutionSlug: "esd-solutions",
    category: "ESD",
    description:
      "Personal grounding products used for electrostatic discharge protection.",
  },
  {
    slug: "esd-footwear",
    name: "ESD Footwear",
    division: "Industrial",
    solution: "ESD Solutions",
    solutionSlug: "esd-solutions",
    category: "ESD",
    description:
      "ESD footwear solutions for controlled industrial environments.",
  },

  // =========================
  // INDUSTRIAL — FABRICATION
  // =========================

  {
    slug: "custom-fabrication",
    name: "Custom Fabrication",
    division: "Industrial",
    solution: "Fabrication Unit",
    solutionSlug: "fabrication-unit",
    category: "Fabrication",
    description:
      "Fabrication support for application-specific industrial requirements.",
    featured: true,
  },
  {
    slug: "metal-fabrication",
    name: "Metal Fabrication",
    division: "Industrial",
    solution: "Fabrication Unit",
    solutionSlug: "fabrication-unit",
    category: "Fabrication",
    description:
      "Metal fabrication capabilities for industrial applications.",
  },

  // =========================
  // INDUSTRIAL — GARMENTS
  // =========================

  {
    slug: "industrial-workwear",
    name: "Industrial Workwear",
    division: "Industrial",
    solution: "Garments & Accessories",
    solutionSlug: "garments-accessories",
    category: "Garments",
    description:
      "Workwear solutions designed for industrial workplace requirements.",
    featured: true,
  },
  {
    slug: "safety-garments",
    name: "Safety Garments",
    division: "Industrial",
    solution: "Garments & Accessories",
    solutionSlug: "garments-accessories",
    category: "Garments",
    description:
      "Protective garments and workplace safety apparel.",
  },
  {
    slug: "industrial-accessories",
    name: "Industrial Accessories",
    division: "Industrial",
    solution: "Garments & Accessories",
    solutionSlug: "garments-accessories",
    category: "Garments",
    description:
      "Accessories supporting industrial workwear and workplace requirements.",
  },

  // =========================
  // INDUSTRIAL — LUBRICANTS
  // =========================

  {
    slug: "industrial-lubricants",
    name: "Industrial Lubricants",
    division: "Industrial",
    solution: "Lubricants",
    solutionSlug: "lubricants",
    category: "Maintenance",
    description:
      "Lubrication products supporting machinery and industrial operating environments.",
    featured: true,
  },
  {
    slug: "gear-oils",
    name: "Gear Oils",
    division: "Industrial",
    solution: "Lubricants",
    solutionSlug: "lubricants",
    category: "Maintenance",
    description:
      "Lubrication solutions for industrial gearboxes and transmission systems.",
  },
  {
    slug: "hydraulic-oils",
    name: "Hydraulic Oils",
    division: "Industrial",
    solution: "Lubricants",
    solutionSlug: "lubricants",
    category: "Maintenance",
    description:
      "Hydraulic fluid solutions for industrial hydraulic equipment and machinery.",
  },
  {
    slug: "industrial-greases",
    name: "Industrial Greases",
    division: "Industrial",
    solution: "Lubricants",
    solutionSlug: "lubricants",
    category: "Maintenance",
    description:
      "Industrial grease solutions for bearings, moving components and machinery.",
  },
];