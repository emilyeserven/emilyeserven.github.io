import type { ProjectCardProps } from "@/components/ui/ProjectCard";

export type ProjectCategory = (typeof categories)[number] | "Lab";

export interface ProjectData extends ProjectCardProps {
  id: string;
  category: ProjectCategory;
  isFeatured: boolean;
  startDate: number;
  endDate: number;
}

/** Use for ongoing projects in endDate */
export const PRESENT = 999999;

/** Use when a project has no meaningful date */
export const UNKNOWN_DATE = 0;

export const categories = [
  "PubSec",
  "Social Networking",
  "Commercial",
  "Media & Publishing",
] as const;

export const twelveLabs: ProjectData = {
  id: "twelveLabs",
  projectName: "TwelveLabs",
  subtitle: "multimodal AI video understanding",
  dates: "2026.01 - present",
  tags: ["react", "typescript", "video", "ai"],
  imageSrc: "/projects/twelvelabs.png",
  imageFit: "contain",
  category: "PubSec",
  isFeatured: true,
  startDate: 202601,
  endDate: PRESENT,
};

export const lazarusAi: ProjectData = {
  id: "lazarusAi",
  projectName: "Lazarus AI",
  subtitle: "AI for the public sector",
  dates: "2025.06 - 2026.01",
  tags: ["react", "data-viz", "typescript", "dashboard"],
  imageSrc: "/projects/lazarus-ai.png",
  imageFit: "contain",
  category: "PubSec",
  isFeatured: true,
  startDate: 202506,
  endDate: 202601,
};

export const panda5: ProjectData = {
  id: "panda5",
  projectName: "Panda5",
  subtitle: "knowledge-focused social media",
  dates: "2023.01 - 2023.05",
  tags: [
    "mvp",
    "react",
    "remix.run",
    "typescript",
    "prototyping",
    "schema",
    "prisma",
    "tailwind",
  ],
  imageSrc: "/projects/panda5.png",
  imageFit: "contain",
  category: "Social Networking",
  isFeatured: false,
  startDate: 202301,
  endDate: 202305,
};

export const companyOfDads: ProjectData = {
  id: "companyOfDads",
  projectName: "The Company of Dads",
  subtitle: "community and content for lead dads",
  dates: "2022.03 - present",
  tags: [
    "wordpress",
    "advanced-custom-fields",
    "wp-toolset",
    "email",
    "ux",
    "prototyping",
  ],
  imageSrc: "/projects/company-of-dads.png",
  category: "Media & Publishing",
  isFeatured: false,
  startDate: 202203,
  endDate: PRESENT,
};

export const codTools: ProjectData = {
  id: "codTools",
  projectName: "COD Tools",
  subtitle: "streamlined content publishing",
  dates: "2022.12 - present",
  tags: [
    "react",
    "remix.run",
    "typescript",
    "schema",
    "prototyping",
    "product-management",
    "tailwind",
  ],
  imageSrc: "/projects/cod-tools.png",
  category: "Media & Publishing",
  isFeatured: false,
  startDate: 202212,
  endDate: PRESENT,
};

export const aitrk: ProjectData = {
  id: "aitrk",
  projectName: "AiTrk4 for Ai Media Group",
  subtitle: "proprietary ad buying dashboard",
  dates: "2018.07 - 2021.06",
  tags: ["javascript", "d3", "dojo-toolkit"],
  imageSrc: "/projects/aitrk.jpg",
  imageFit: "cover",
  category: "Commercial",
  isFeatured: false,
  startDate: 201807,
  endDate: 202106,
};

export const lumi: ProjectData = {
  id: "lumi",
  projectName: "Daylight for Luminoso",
  subtitle: "NLP data visualization dashboard",
  dates: "2021.10 - 2022.11",
  tags: ["react", "styled-components", "storybook", "jest"],
  imageSrc: "/projects/lumi.jpg",
  imageFit: "cover",
  href: "https://www.luminoso.com/daylight",
  category: "Commercial",
  isFeatured: false,
  startDate: 202110,
  endDate: 202211,
};

export const scuba: ProjectData = {
  id: "scuba",
  projectName: "Scuba Analytics",
  subtitle: "customer intelligence platform",
  dates: "2023.03 - 2025.05",
  tags: ["react", "redux", "jest"],
  imageSrc: "/projects/scuba.jpg",
  imageFit: "cover",
  href: "https://www.scuba.io/product",
  category: "Commercial",
  isFeatured: false,
  startDate: 202303,
  endDate: 202505,
};

export const d3Music: ProjectData = {
  id: "d3Music",
  projectName: "D3 Music Experiments",
  subtitle: "interactive music data visualizations",
  tags: ["d3", "javascript"],
  imageSrc: "/projects/d3.jpg",
  imageFit: "cover",
  category: "Lab",
  isFeatured: false,
  startDate: UNKNOWN_DATE,
  endDate: UNKNOWN_DATE,
};

export const moneyMachine: ProjectData = {
  id: "moneyMachine",
  projectName: "The Money Machine",
  subtitle: "creative class project collaboration",
  dates: "Oct 2017",
  tags: ["html", "css", "javascript", "jquery"],
  imageSrc: "/projects/moneymach.jpg",
  imageFit: "cover",
  category: "Lab",
  isFeatured: false,
  startDate: 201710,
  endDate: 201710,
};

export const nyExcelsior: ProjectData = {
  id: "nyExcelsior",
  projectName: "New York Excelsior Concept Site",
  subtitle: "esports team concept website",
  dates: "Feb 2018",
  tags: ["html", "css"],
  imageSrc: "/projects/nyexcelsior.jpg",
  imageFit: "cover",
  category: "Lab",
  isFeatured: false,
  startDate: 201802,
  endDate: 201802,
};

export const ornette: ProjectData = {
  id: "ornette",
  projectName: "Ornette",
  subtitle: "single-page design experiment",
  dates: "Feb 2016",
  tags: ["html", "css"],
  imageSrc: "/projects/ornette.jpg",
  imageFit: "cover",
  category: "Lab",
  isFeatured: false,
  startDate: 201602,
  endDate: 201602,
};

export const rockPaperScissors: ProjectData = {
  id: "rockPaperScissors",
  projectName: "Rock Paper Scissors",
  subtitle: "DOM manipulation practice project",
  dates: "Aug 2016",
  tags: ["html", "css", "javascript"],
  imageSrc: "/projects/rockpaperscissors.jpg",
  imageFit: "cover",
  category: "Lab",
  isFeatured: false,
  startDate: 201608,
  endDate: 201608,
};

export const quoteLovecraft: ProjectData = {
  id: "quoteLovecraft",
  projectName: "Typography - Lovecraft",
  subtitle: "blackletter typography mood piece",
  dates: "Oct 2014",
  tags: ["html", "css"],
  imageSrc: "/projects/quote-lc.jpg",
  imageFit: "cover",
  category: "Lab",
  isFeatured: false,
  startDate: 201410,
  endDate: 201410,
};

export const allProjects: ProjectData[] = [
  twelveLabs,
  lazarusAi,
  panda5,
  companyOfDads,
  codTools,
  aitrk,
  lumi,
  scuba,
];

export const labProjects: ProjectData[] = [
  d3Music,
  moneyMachine,
  nyExcelsior,
  ornette,
  rockPaperScissors,
  quoteLovecraft,
];
