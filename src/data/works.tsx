import type { ComponentType } from "react";
import MochinaviGallery from "@/components/works/mochinavi/MochinaviGallery";
import CoffeeRobotGallery from "@/components/works/coffee-robot/CoffeeRobotGallery";
import MynosGallery from "@/components/works/mynos/MynosGallery";

export type Work = {
  id: string;
  slug: string;
  title: string;
  category: string[];
  thumb: string;
  year: string;
  tools: string[];
  workType: "GROUP WORK" | "PERSONAL WORK" | "COMMERCIAL WORK";
  description: string;
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
    tools: ["Illustrator", "Figma", "Blender"],
    workType: "GROUP WORK",
    description:
      "資生堂。\n本作品「灯り、街の隅で」は、夜の商店街をテーマにしたイラストシリーズです。\n\n閉店後の静かな街並みに灯る看板の光をモチーフに、日常の中にある小さな温かさを表現しました。制作では、コントラストの強い配色と手描きの質感を組み合わせ、懐かしさと現実感の両立を目指しています。\nProcreateを用いて、ラフから仕上げまで約2週間かけて制作しました。\n今後もこうした「見過ごされがちな風景」に光を当てる作品づくりを続けていきたいと考えています。",
    Gallery: MochinaviGallery,
  },
  {
    id: "work-02",
    slug: "coffee-robot",
    title: "COFFEE ROBOT",
    category: ["CG ANIMATION"],
    thumb: "/thumbs/coffeeRobot-thumb.png",
    year: "2025.11",
    tools: ["Maya", "Substance 3D Painter", "Blender", "After Effects"],
    workType: "PERSONAL WORK",
    description:
      "本作品「灯り、街の隅で」は、夜の商店街をテーマにしたイラストシリーズです。\n\n閉店後の静かな街並みに灯る看板の光をモチーフに、日常の中にある小さな温かさを表現しました。制作では、コントラストの強い配色と手描きの質感を組み合わせ、懐かしさと現実感の両立を目指しています。\nProcreateを用いて、ラフから仕上げまで約2週間かけて制作しました。\n今後もこうした「見過ごされがちな風景」に光を当てる作品づくりを続けていきたいと考えています。",
    Gallery: CoffeeRobotGallery,
  },
  {
    id: "work-03",
    slug: "mynos",
    title: "MYNOS",
    category: ["PRODUCT DESIGN", "GRAPHIC DESIGN"],
    thumb: "/thumbs/mynos-thumb.png",
    year: "2025.06",
    tools: ["Maya", "Fusion360", "3D Printing", "Illustrator"],
    workType: "PERSONAL WORK",
    description: "",
    Gallery: MynosGallery,
  },
];
