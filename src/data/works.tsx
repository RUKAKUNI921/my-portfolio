import type { ComponentType } from "react";
import MochinaviGallery from "@/components/works/gallery/MochinaviGallery";
import CoffeeRobotGallery from "@/components/works/gallery/CoffeeRobotGallery";
import MynosGallery from "@/components/works/gallery/MynosGallery";

export type Work = {
  id: string;
  slug: string;
  title: string;
  category: string[];
  year: string;
  Gallery: ComponentType;
};

export const works: Work[] = [
  {
    id: "work-01",
    slug: "mochinavi",
    title: "MOCHINAVI",
    category: ["UI DESIGN", "CG ANIMTION"],
    year: "2025.08",
    Gallery: MochinaviGallery,
  },
  {
    id: "work-02",
    slug: "coffee-robot",
    title: "COFFEE ROBOT",
    category: ["CG ANIMATION"],
    year: "2025.11",
    Gallery: CoffeeRobotGallery,
  },
  {
    id: "work-03",
    slug: "mynos",
    title: "MYNOS",
    category: ["GRAPHIC DESIGN", "PRODUCT DESIGN"],
    year: "",
    Gallery: MynosGallery,
  },
];

export const worksOrder = ["work-03", "work-02", "work-01"];
