import type { ProjectCardProps } from "@/components/ui/ProjectCard";

export interface ProjectData extends ProjectCardProps {
  category: string;
  isFeatured: boolean;
  sortDate: number;
}

export const categories = [
  "PubSec Web App",
  "Commercial Web App",
  "Marketing Site",
  "Dev Project",
] as const;

export const twelveLabs: ProjectData = {
  title: "TwelveLabs",
  subtitle: "multimodal AI video understanding",
  role: "software engineer",
  dates: "2026.01 - present",
  tags: ["react", "typescript", "video", "ai"],
  imageSrc: "/projects/twelvelabs.png",
  imageFit: "contain",
  category: "PubSec Web App",
  isFeatured: true,
  sortDate: 202601,
};

export const lazarusAi: ProjectData = {
  title: "Lazarus AI",
  subtitle: "AI for the public sector",
  role: "software engineer",
  dates: "2025.06 - 2026.01",
  tags: ["react", "data-viz", "typescript", "dashboard"],
  imageSrc: "/projects/lazarus-ai.png",
  imageFit: "contain",
  category: "PubSec Web App",
  isFeatured: true,
  sortDate: 202506,
};

export const panda5: ProjectData = {
  title: "Panda5",
  subtitle: "knowledge-focused social media",
  role: "software engineer",
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
  category: "Commercial Web App",
  isFeatured: false,
  sortDate: 202301,
};

export const companyOfDads: ProjectData = {
  title: "The Company of Dads",
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
  category: "Marketing Site",
  isFeatured: false,
  sortDate: 202203,
};

export const codTools: ProjectData = {
  title: "COD Tools",
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
  category: "Dev Project",
  isFeatured: false,
  sortDate: 202212,
};

export const allProjects: ProjectData[] = [
  twelveLabs,
  lazarusAi,
  panda5,
  companyOfDads,
  codTools,
];
