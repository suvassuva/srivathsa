export interface ServiceDetail {
  id: string;
  category: "signage" | "interior" | "real-estate";
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  specs?: Record<string, string>;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "signage-manufacturing",
    category: "signage",
    title: "Custom Signage Manufacturing",
    shortDesc: "Architectural 3D LED letters, stainless steel, acrylic, and brass metal branding signs for commercial buildings.",
    fullDesc: "Srivathsa Enterprises specializes in custom signage manufacturing engineered for high visual impact and durability. Utilizing CNC router precision and laser cutting technology, we fabricate stainless steel 3D letters, illuminated acrylic boards, brushed brass logos, and heavy-duty structural entrance signages for corporate offices, retail stores, and commercial complexes.",
    image: "/stainless-steel-letters-on-wall.jpeg",
    features: [
      "3D Stainless Steel (SS 304 / 316 Grade) Channel Letters",
      "LED Backlit & Frontlit Acrylic Letters",
      "Brushed & Polished Brass Corporate Logos",
      "Aluminium Composite Panel (ACP) Elevation Cladding & Boards",
      "High-Density PVC & Foam Board Interior Signage",
      "Weatherproof Outdoor Monument & Pylon Signs",
    ],
  },
  {
    id: "specialized-printing-graphics",
    category: "signage",
    title: "Large Format Printing & Graphics",
    shortDesc: "High-resolution vinyl graphics, flex banners, canvas prints, and frosted glass branding.",
    fullDesc: "We provide high-impact large-format printing and graphic solutions tailored for corporate interiors, promotional hoardings, glass partitions, and wall decor. Using eco-solvent and UV flatbed printing technologies, our graphics retain vibrant colors and crisp details under high-exposure lighting conditions.",
    image: "/workers-installing-office-wall-panel.jpeg",
    features: [
      "Custom Wall Graphics & Architectural Murals",
      "Frosted Glass Vinyl & Privacy Pattern Films",
      "Heavy-Duty Frontlit & Backlit Flex Boards",
      "Premium Textured Canvas Art Prints",
      "Vehicle Fleet Wraps & Promotional Displays",
      "One-Way Vision Window Graphics",
    ],
  },
  {
    id: "safety-glow-signage",
    category: "signage",
    title: "Safety, Traffic & Photoluminescent Signs",
    shortDesc: "Compliant industrial safety signage, traffic control boards, and photoluminescent night-glow emergency markers.",
    fullDesc: "Ensuring regulatory compliance and site safety with photoluminescent (night-glow) emergency exit signs, reflective traffic warning posts, mandatory industrial safety symbols, and directional wayfinding panels for tech parks, manufacturing plants, and residential layouts.",
    image: "/safety-signage-industrial-facility.jpeg",
    features: [
      "Photoluminescent Night-Glow Emergency Exit Signs",
      "ISO Compliant Mandatory Safety & Hazard Signs",
      "High-Intensity Reflective Traffic & Road Signs",
      "Fire Safety & Equipment Location Boards",
      "Industrial Plant Facility Wayfinding Systems",
      "Custom Caution & Regulatory Warning Panels",
    ],
  },
  {
    id: "commercial-interiors",
    category: "interior",
    title: "Commercial & Office Interior Execution",
    shortDesc: "Turnkey office interior execution, acoustic partitions, ceiling design, and corporate fit-outs.",
    fullDesc: "From modern tech workspace layouts to executive boardrooms, Srivathsa Enterprises delivers complete commercial interior execution. We manage site preparation, drywall partitions, acoustic panelling, modular false ceilings, floor finishes, custom reception counters, and electrical lighting integrations.",
    image: "/corporate-office-interior-design.jpeg",
    features: [
      "Corporate Office Space Planning & Fit-outs",
      "Acoustic Wall Panelling & Glass Partitions",
      "Modular Grid & Gypsum False Ceiling Work",
      "Custom Reception Desks & Boardroom Tables",
      "Electrical Wiring, Lighting & Network Cable Execution",
      "Commercial Carpet & Epoxy Floor Finishing",
    ],
  },
  {
    id: "retail-showroom-interiors",
    category: "interior",
    title: "Retail & Showroom Fit-Outs",
    shortDesc: "Custom display racks, boutique showroom interiors, illumination setups, and wall paneling.",
    fullDesc: "Create captivating shopping environments with precision-built retail display fixtures, custom wall storage systems, accent lighting, glass display cabinets, and durable flooring installations engineered for high foot-traffic environments.",
    image: "/pvc-signage-installation-retail.jpeg",
    features: [
      "Showroom Display Racks & Wall Bay Units",
      "Custom LED Feature Walls & Product Counters",
      "Boutique Store Fixture Fabrication",
      "High-Durability Flooring & Cladding",
      "Glass Display Showcases with Security Fittings",
      "Complete Turnkey Site Coordination",
    ],
  },
  {
    id: "turnkey-interior-projects",
    category: "interior",
    title: "Turnkey Project Management & Installation",
    shortDesc: "End-to-end site measurement, material supply, craftsmanship installation, and site handover.",
    fullDesc: "Our turnkey interior project delivery eliminates vendor coordination friction. We handle material procurement, structural modification supervision, custom carpentry, painting, wallpaper application, fixture installation, and deep cleaning prior to final client handover.",
    image: "/fabricators-working-signage-2.jpeg",
    features: [
      "Single-Point Project Management & On-site Supervision",
      "Custom Carpentry & Modular Millwork Installation",
      "Architectural Surface Coatings & Wallpaper Work",
      "HVAC Ducting & Electrical Coordination",
      "Quality Assurance Audit at Every Execution Phase",
      "On-Time Project Handover Guarantee",
    ],
  },
  {
    id: "commercial-property-services",
    category: "real-estate",
    title: "Commercial Property Advisory",
    shortDesc: "Prime office spaces, retail store locations, corporate buildings, and industrial warehouse acquisition in Bangalore.",
    fullDesc: "Strategic commercial property consulting helping corporate clients, retail brands, and investors acquire, lease, or sell commercial real estate in key business hubs across Bangalore. We assist with location analysis, site feasibility, and transaction facilitation.",
    image: "/commercial-building-exterior.jpeg",
    features: [
      "Office Space Buying, Leasing & Strategic Selection",
      "Retail High-Street & Shopping Complex Spaces",
      "Industrial Warehouses & Logistics Hubs",
      "Built-to-Suit Commercial Properties",
      "Corporate Real Estate Asset Valuation Advisory",
      "End-to-End Documentation Assistance",
    ],
  },
  {
    id: "residential-plots-land",
    category: "real-estate",
    title: "Residential Plots & Converted Land",
    shortDesc: "Verified BDA, BMRDA, and A-Katha converted residential plots and development land across Bangalore corridors.",
    fullDesc: "Providing verified land options for homebuyers, builders, and long-term land investors. We present clear-title converted lands, gated community plots, and strategic land parcels located in high-growth Bangalore expansion sectors.",
    image: "/land-parcel-bangalore.jpeg",
    features: [
      "Verified Converted Land Parcels for Construction",
      "Residential Layout Plots in Expanding Corridors",
      "Clear Title & Legal Due Diligence Support",
      "BGA / BMRDA / Local Authority Approved Portfolios",
      "Strategic Land Holdings for Investment",
      "Site Inspection & Location Advantage Guidance",
    ],
  },
  {
    id: "bungalows-farmlands",
    category: "real-estate",
    title: "Bungalows & Farm Lands",
    shortDesc: "Exclusive luxury independent villas, modern bungalows, and agricultural/farm land holdings.",
    fullDesc: "Guiding clients in finding quiet retreat farm lands, managed farmland plots, and premium independent bungalows in around Bangalore. We focus on clear ownership titles, accessibility, and water-table sustainability.",
    image: "/aerial-view-land-parcel.jpeg",
    features: [
      "Luxury Independent Villas & Custom Bungalows",
      "Agricultural & Managed Farm Land Plots",
      "Weekend Gateway & Countryside Property Acquisitions",
      "Boundary Fencing & Farm House Feasibility Analysis",
      "Transparent Legal Verification & Title Guarantee",
      "Personalized Private Property Viewing Tours",
    ],
  },
];
