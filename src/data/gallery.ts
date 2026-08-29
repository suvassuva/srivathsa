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
    image: "https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1200&q=80",
    caption: "3D Brushed Stainless Steel Halo-Lit Channel Letters mounted on ACP cladding.",
    aspectRatio: "wide",
  },
  {
    id: "gal-2",
    title: "Modern Open Plan Office Workspace",
    category: "interiors",
    categoryLabel: "Interiors",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    caption: "Commercial turnkey office interior fit-out featuring glass partitions and acoustic ceilings.",
    aspectRatio: "tall",
  },
  {
    id: "gal-3",
    title: "Brushed Brass Corporate Logo",
    category: "materials",
    categoryLabel: "Materials",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    caption: "Precision CNC cut solid brass executive logo plaque.",
    aspectRatio: "square",
  },
  {
    id: "gal-4",
    title: "Retail Showroom Illumination",
    category: "interiors",
    categoryLabel: "Interiors",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    caption: "Custom display wall bays and accent LED illumination in retail space.",
    aspectRatio: "wide",
  },
  {
    id: "gal-5",
    title: "High-Rise Building Signage Mounting",
    category: "installation",
    categoryLabel: "Installation",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    caption: "On-site structural installation of outdoor pylon and elevation signs.",
    aspectRatio: "tall",
  },
  {
    id: "gal-6",
    title: "Photoluminescent Emergency Exit Sign",
    category: "signage",
    categoryLabel: "Signage",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    caption: "Self-illuminating photoluminescent night-glow emergency route marker.",
    aspectRatio: "square",
  },
  {
    id: "gal-7",
    title: "Prime Commercial High-Rise Property",
    category: "projects",
    categoryLabel: "Projects",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    caption: "Commercial office property listing and corporate advisory in Bangalore.",
    aspectRatio: "wide",
  },
  {
    id: "gal-8",
    title: "Custom Architectural Vinyl Wall Graphic",
    category: "materials",
    categoryLabel: "Materials",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    caption: "High-definition UV printed wall graphic installed in corporate conference area.",
    aspectRatio: "tall",
  },
  {
    id: "gal-9",
    title: "Reflective Traffic & Safety Road Signs",
    category: "signage",
    categoryLabel: "Signage",
    image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80",
    caption: "ISO-compliant reflective safety and parking directional signboards.",
    aspectRatio: "square",
  },
  {
    id: "gal-10",
    title: "Greenery Countryside Farm Land",
    category: "projects",
    categoryLabel: "Projects",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    caption: "Clear-title agricultural farmland plot and farmhouse estate in Bangalore suburbs.",
    aspectRatio: "wide",
  },
  {
    id: "gal-11",
    title: "Cast Acrylic 3D Letters Fabrication",
    category: "materials",
    categoryLabel: "Materials",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
    caption: "Laser-cut cast acrylic letters undergoing LED back-lighting verification.",
    aspectRatio: "square",
  },
  {
    id: "gal-12",
    title: "On-Site Interior Carpenter Craftsmanship",
    category: "installation",
    categoryLabel: "Installation",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    caption: "Precision carpentry and false ceiling alignment by Srivathsa site team.",
    aspectRatio: "tall",
  },
];
