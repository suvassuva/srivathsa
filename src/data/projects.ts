export interface ProjectItem {
  id: string;
  title: string;
  category: "signage" | "interior" | "real-estate";
  categoryLabel: string;
  location: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  specs?: Record<string, string>;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Corporate HQ 3D Stainless Steel LED Signage",
    category: "signage",
    categoryLabel: "Signage Manufacturing",
    location: "Electronic City, Bangalore",
    shortDesc: "Precision-engineered SS 304 halo-lit 3D letters and ACP facade cladding for a tech campus.",
    fullDesc: "Complete architectural signage manufacturing and elevation mounting for a corporate tech headquarters in Electronic City. Featuring 3D brushed stainless steel letters with IP67 warm white LED backlighting mounted on a heavy-gauge dark charcoal ACP background panel.",
    image: "/stainless-steel-letters-on-wall.jpeg",
    tags: ["Stainless Steel 304", "LED Halo Lit", "ACP Facade", "Corporate HQ"],
    specs: {
      Material: "SS 304 Brushed Satin",
      Illumination: "OSRAM Warm White LED Modules",
      Location: "Main Building Facade",
    },
  },
  {
    id: "proj-2",
    title: "Modern Tech Park Office Turnkey Fit-Out",
    category: "interior",
    categoryLabel: "Interior Works",
    location: "Outer Ring Road, Bangalore",
    shortDesc: "Turnkey office interior execution covering acoustic panelling, modular false ceilings, and glass partitions.",
    fullDesc: "Turnkey project execution for a 12,000 sq. ft. modern office workspace. Srivathsa Enterprises managed dry-wall layout creation, acoustic ceiling installation, glass conference room partitions, custom reception desk fabrication, and electrical networking setup.",
    image: "/corporate-office-interior-design.jpeg",
    tags: ["Turnkey Interior", "Glass Partitions", "Acoustic Ceilings", "Office Fit-out"],
    specs: {
      Scope: "12,000 Sq. Ft. Commercial Space",
      Execution: "Drywall, Glass, Flooring, HVAC & Electrical",
      Duration: "Completed On Schedule",
    },
  },
  {
    id: "proj-3",
    title: "Prime Commercial Building Acquisition Advisory",
    category: "real-estate",
    categoryLabel: "Real Estate",
    location: "Indiranagar, Bangalore",
    shortDesc: "Strategic commercial property consulting and site acquisition for corporate regional office.",
    fullDesc: "Facilitated site selection and legal due diligence for a multi-storey commercial property in Indiranagar. Provided end-to-end guidance from title verification to transaction execution for retail and corporate tenancy.",
    image: "/commercial-building-illuminated.jpeg",
    tags: ["Commercial Property", "Office Lease", "Prime Location", "Legal Due Diligence"],
    specs: {
      PropertyType: "Commercial Building",
      Location: "100ft Road, Indiranagar",
      Service: "Property Acquisition & Advisory",
    },
  },
  {
    id: "proj-4",
    title: "Boutique Retail Showroom Interior Execution",
    category: "interior",
    categoryLabel: "Interior Works",
    location: "Koramangala, Bangalore",
    shortDesc: "Custom display fixtures, illuminated shelving units, and high-traffic flooring installation.",
    fullDesc: "Complete retail showroom fit-out featuring bespoke wooden display wall bays, acrylic lightboxes, warm linear accent lighting, and heavy-duty commercial flooring designed to sustain high customer footfall.",
    image: "/pvc-signage-installation-retail.jpeg",
    tags: ["Retail Interiors", "Display Fixtures", "LED Linear Lighting", "Showroom"],
    specs: {
      Type: "Retail Showroom",
      KeyFeatures: "Custom Display Bays, LED Illumination",
      Location: "80ft Road, Koramangala",
    },
  },
  {
    id: "proj-5",
    title: "Photoluminescent Emergency Wayfinding System",
    category: "signage",
    categoryLabel: "Signage Manufacturing",
    location: "Whitefield, Bangalore",
    shortDesc: "ISO-compliant photoluminescent exit signage and reflective parking markers across multi-level basement.",
    fullDesc: "Safety and traffic signage installation for a 4-level commercial basement parking structure in Whitefield. Installed photoluminescent night-glow escape route signs, high-intensity reflective column corner guards, and speed limit markers.",
    image: "/safety-signage-industrial-facility.jpeg",
    tags: ["Safety Signage", "Night Glow", "Reflective Traffic", "Basement Parking"],
    specs: {
      Compliance: "ISO 7010 & OSHA Safety Standards",
      Material: "Photoluminescent Rigid Aluminium Panels",
      Coverage: "4 Basement Levels",
    },
  },
  {
    id: "proj-6",
    title: "Residential Converted Land Portfolio Advisory",
    category: "real-estate",
    categoryLabel: "Real Estate",
    location: "North Bangalore Expansion Corridor",
    shortDesc: "Advisory and transaction facilitation for clear-title converted land parcels.",
    fullDesc: "Identified and verified clear-title converted land parcels suitable for residential villa development in North Bangalore. Managed title check documentation, layout boundary verification, and buyer advisory.",
    image: "/land-parcel-bangalore.jpeg",
    tags: ["Converted Land", "Residential Plots", "North Bangalore", "Title Verification"],
    specs: {
      Category: "Converted Land Parcel",
      Zoning: "Residential Yellow Zone",
      Location: "Devanahalli / Yelahanka Corridor",
    },
  },
  {
    id: "proj-7",
    title: "Executive Brass & Etched Glass Entrance Signage",
    category: "signage",
    categoryLabel: "Signage Manufacturing",
    location: "MG Road, Bangalore",
    shortDesc: "Polished brass 3D emblem and etched frosted glass panel for law and finance suite.",
    fullDesc: "Architectural entrance sign featuring precision laser-cut solid brass 3D emblem mounted on a 12mm toughened frosted glass plaque with polished stainless steel stand-offs.",
    image: "/brass-lettering-stone-wall.jpeg",
    tags: ["Polished Brass", "Etched Glass", "Stand-off Fixings", "Executive Suite"],
    specs: {
      Emblem: "Mirror Polished Solid Brass",
      Substrate: "12mm Toughened Frosted Glass",
      Location: "MG Road Executive Suite",
    },
  },
  {
    id: "proj-8",
    title: "Managed Farm Land & Quiet Retreat Acquisition",
    category: "real-estate",
    categoryLabel: "Real Estate",
    location: "Kanakapura Road Suburbs, Bangalore",
    shortDesc: "Strategic land sourcing for agricultural and farmhouse retreat properties.",
    fullDesc: "Assisted client with sourcing, site feasibility assessment, soil/water availability analysis, and legal land conversion advisory for a green farmhouse retreat plot off Kanakapura Road.",
    image: "/aerial-view-land-parcel.jpeg",
    tags: ["Farm Land", "Bungalow Plot", "Greenery Retreat", "Kanakapura Road"],
    specs: {
      LandType: "Managed Farm Land",
      WaterAccess: "Borewell & Natural Drainage",
      Location: "Off Kanakapura Road",
    },
  },
];
