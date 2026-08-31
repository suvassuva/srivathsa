export interface GalleryItem {
  id: string;
  title: string;
  category: "signage" | "interiors" | "materials" | "installation" | "projects";
  categoryLabel: string;
  image: string;
  caption: string;
  aspectRatio?: "square" | "tall" | "wide";
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Stainless Steel 3D LED Letters",
    category: "signage",
    categoryLabel: "Signage",
    image: "/stainless-steel-letters-on-wall.jpeg",
    caption: "3D Brushed Stainless Steel Halo-Lit Channel Letters mounted on ACP cladding.",
    aspectRatio: "wide",
  },
  {
    id: "gal-2",
    title: "Modern Open Plan Office Workspace",
    category: "interiors",
    categoryLabel: "Interiors",
    image: "/corporate-office-interior-design.jpeg",
    caption: "Commercial turnkey office interior fit-out featuring glass partitions and acoustic ceilings.",
    aspectRatio: "tall",
  },
  {
    id: "gal-3",
    title: "Brushed Brass Corporate Logo",
    category: "materials",
    categoryLabel: "Materials",
    image: "/brass-lettering-mounted-wall.jpeg",
    caption: "Precision CNC cut solid brass executive logo plaque.",
    aspectRatio: "square",
  },
  {
    id: "gal-4",
    title: "Retail Showroom Illumination",
    category: "interiors",
    categoryLabel: "Interiors",
    image: "/pvc-signage-installation-retail.jpeg",
    caption: "Custom display wall bays and accent LED illumination in retail space.",
    aspectRatio: "wide",
  },
  {
    id: "gal-5",
    title: "High-Rise Building Signage Mounting",
    category: "installation",
    categoryLabel: "Installation",
    image: "/fabricators-working-signage-1.jpeg",
    caption: "On-site structural installation of outdoor pylon and elevation signs.",
    aspectRatio: "tall",
  },
  {
    id: "gal-6",
    title: "Photoluminescent Emergency Exit Sign",
    category: "signage",
    categoryLabel: "Signage",
    image: "/safety-signage-industrial-facility.jpeg",
    caption: "Self-illuminating photoluminescent night-glow emergency route marker.",
    aspectRatio: "square",
  },
  {
    id: "gal-7",
    title: "Prime Commercial High-Rise Property",
    category: "projects",
    categoryLabel: "Projects",
    image: "/commercial-building-exterior.jpeg",
    caption: "Commercial office property listing and corporate advisory in Bangalore.",
    aspectRatio: "wide",
  },
  {
    id: "gal-8",
    title: "Custom Architectural Vinyl Wall Graphic",
    category: "materials",
    categoryLabel: "Materials",
    image: "/workers-installing-office-wall-panel.jpeg",
    caption: "High-definition UV printed wall graphic installed in corporate conference area.",
    aspectRatio: "tall",
  },
  {
    id: "gal-9",
    title: "Reflective Traffic & Safety Road Signs",
    category: "signage",
    categoryLabel: "Signage",
    image: "/metal-letters-office-wall.jpeg",
    caption: "ISO-compliant reflective safety and parking directional signboards.",
    aspectRatio: "square",
  },
  {
    id: "gal-10",
    title: "Greenery Countryside Farm Land",
    category: "projects",
    categoryLabel: "Projects",
    image: "/aerial-view-land-parcel.jpeg",
    caption: "Clear-title agricultural farmland plot and farmhouse estate in Bangalore suburbs.",
    aspectRatio: "wide",
  },
  {
    id: "gal-11",
    title: "Cast Acrylic 3D Letters Fabrication",
    category: "materials",
    categoryLabel: "Materials",
    image: "/acrylic-signage-installation.jpeg",
    caption: "Laser-cut cast acrylic letters undergoing LED back-lighting verification.",
    aspectRatio: "square",
  },
  {
    id: "gal-12",
    title: "On-Site Interior Carpenter Craftsmanship",
    category: "installation",
    categoryLabel: "Installation",
    image: "/fabricators-working-signage-2.jpeg",
    caption: "Precision carpentry and false ceiling alignment by Srivathsa site team.",
    aspectRatio: "tall",
  },
];
