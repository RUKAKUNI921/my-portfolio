export type Work = {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
};

export const works: Work[] = [
  {
    id: "work-01",
    slug: "mochinavi",
    title: "MOCHINAVI",
    category: "UI DESIGN",
    year: "2025.08",
  },
  {
    id: "work-02",
    slug: "coffee-robot",
    title: "COFFEE ROBOT",
    category: "ANIMATION",
    year: "2025.11",
  },
];

export const worksOrder = ["work-02", "work-01"];
