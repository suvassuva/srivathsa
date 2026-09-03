export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  category: "all" | "signage" | "interiors" | "real-estate";
  categoryLabel: string;
  badge: string;
  duration: string;
  poster: string;
  features: string[];
}

export const VIDEO_SHOWCASE_DATA: VideoItem[] = [
  {
    id: "laser-cutting-stainless-steel",
    title: "Precision Fiber Laser Cutting (SS 304/316)",
    subtitle: "High-Tolerance CNC Metal Letter Profile Cutting",
    description:
      "Watch our precision fiber laser system cut surgical-grade SS 304 and 316 stainless steel letter contours with microscopic edge clarity, ready for dimensional side return welding.",
    src: "/videos/laser-cutting-stainless-steel.mp4",
    category: "signage",
    categoryLabel: "Signage Fabrication",
    badge: "Precision CNC",
    duration: "0:07",
    poster: "/stainless-steel-letters-on-wall.jpeg",
    features: ["CNC Fiber Laser Precision", "Burr-Free Edge Finishing", "SS 304 & 316 Food/Pharma Grade"],
  },
  {
    id: "crafting-3d-architectural-signage",
    title: "Crafting 3D Architectural Signage",
    subtitle: "Handcrafted Fabrication & Dimensional Assembly",
    description:
      "Witness our master fabricators shaping, grinding, and assembling 3D channel letters with internal LED illumination modules in our dedicated Bangalore manufacturing unit.",
    src: "/videos/crafting-3d-architectural-signage.mp4",
    category: "signage",
    categoryLabel: "Signage Workshop",
    badge: "Master Craftsmanship",
    duration: "0:06",
    poster: "/fabricators-working-signage-1.jpeg",
    features: ["Hand-Finished Seams", "Precision Acrylic Diffusers", "High-Lumen Samsung LED Modules"],
  },
  {
    id: "corporate-logo-slate-wall",
    title: "Executive Reception Slate Wall Branding",
    subtitle: "Architectural Logo Mounting & Commercial Interior Fit-Out",
    description:
      "A walkthrough of a completed corporate reception featuring brushed dimensional metallic insignia mounted with millimeter precision against natural textured slate stone masonry.",
    src: "/videos/corporate-logo-slate-wall.mp4",
    category: "interiors",
    categoryLabel: "Corporate Interiors",
    badge: "Turnkey Interiors",
    duration: "0:08",
    poster: "/metal-letters-office-wall.jpeg",
    features: ["Natural Textured Slate Cladding", "Floating Stand-Off Letter Mounting", "Integrated Reception Lighting"],
  },
  {
    id: "drone-ascending-glass-skyscraper",
    title: "Commercial High-Rise & Corporate Infrastructure",
    subtitle: "Drone Ascending Grade-A Tech Park Skyscraper",
    description:
      "Aerial drone flight scaling a modern curtain-wall glass skyscraper in Bangalore, representing our strategic commercial property advisory, tech park leasing, and rooftop high-rise brand installations.",
    src: "/videos/drone-ascending-glass-skyscraper.mp4",
    category: "real-estate",
    categoryLabel: "Commercial Real Estate",
    badge: "Bangalore Hubs",
    duration: "0:07",
    poster: "/commercial-building-illuminated.jpeg",
    features: ["Grade-A Tech Park Hubs", "Corporate Office Sourcing", "Rooftop High-Elevation Signages"],
  },
  {
    id: "pylon-totem-safety-signage",
    title: "Architectural Pylon Totems & Facility Safety Signage",
    subtitle: "Multi-Tenant Industrial Monoliths & Compliance Boards",
    description:
      "Structural steel monolith pylon and photoluminescent safety boards engineered to withstand environmental exposure while directing heavy vehicular and visitor flow.",
    src: "/videos/pylon-totem-safety-signage.mp4",
    category: "signage",
    categoryLabel: "Outdoor & Safety Signs",
    badge: "Structural Engineering",
    duration: "0:06",
    poster: "/safety-signage-industrial-facility.jpeg",
    features: ["Heavy Galvanized Steel Substructure", "Photoluminescent Night-Glow Emergency", "Weatherproof UV-Resistant Polyurethane"],
  },
];
