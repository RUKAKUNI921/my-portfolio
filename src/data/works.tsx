import type { ComponentType } from "react";
import MochinaviGallery from "@/components/works/gallery/MochinaviGallery";
import CoffeeRobotGallery from "@/components/works/gallery/CoffeeRobotGallery";
import MynosGallery from "@/components/works/gallery/MynosGallery";

export type Work = {
  id: string;
  slug: string;
  title: string;
  category: string[];
  thumb: string;
  year: string;
  Gallery: ComponentType;
};

export const works: Work[] = [
  {
    id: "work-01",
    slug: "mochinavi",
    title: "MOCHINAVI",
    category: ["UI DESIGN", "CG ANIMTION"],
    thumb: "/thumbs/mochinavi-thumb.png",
    year: "2025.08",
    Gallery: MochinaviGallery,
  },
  {
    id: "work-02",
    slug: "coffee-robot",
    title: "COFFEE ROBOT",
    category: ["CG ANIMATION"],
    thumb: "/thumbs/coffeeRobot-thumb.png",
    year: "2025.11",
    Gallery: CoffeeRobotGallery,
  },
  {
    id: "work-03",
    slug: "mynos",
    title: "MYNOS",
    category: ["PRODUCT DESIGN", "GRAPHIC DESIGN"],
    thumb: "/thumbs/mynos-thumb.png",
    year: "2025.06",
    Gallery: MynosGallery,
  },
];
