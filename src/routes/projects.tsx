import { createFileRoute } from "@tanstack/react-router";
import { DisplaySection } from "@/components/ui/DisplaySection";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  return (
    <DisplaySection>
      <h1 className="text-4xl lg:text-5xl font-bold">Projects</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard
          title="TwelveLabs"
          subtitle="multimodal AI video understanding"
          role="software engineer"
          dates="2026.01 - present"
          tags={["react", "typescript", "video", "ai"]}
          imageSrc="/projects/twelvelabs.png"
          imageFit="contain"
        />
        <ProjectCard
          title="Lazarus AI"
          subtitle="AI for the public sector"
          role="software engineer"
          dates="2025.06 - 2026.01"
          tags={["react", "data-viz", "typescript", "dashboard"]}
          imageSrc="/projects/lazarus-ai.png"
          imageFit="contain"
          imagePlaceholderColor="#f2f2f2"
        />
        <ProjectCard
          title="Panda5"
          subtitle="knowledge-focused social media"
          role="software engineer"
          dates="2023.01 - 2023.05"
          tags={[
            "mvp",
            "react",
            "remix.run",
            "typescript",
            "prototyping",
            "schema",
            "prisma",
            "tailwind",
          ]}
          imageSrc="/projects/panda5.png"
          imageFit="contain"
          imagePlaceholderColor="#ffffff"
        />
        <ProjectCard
          title="The Company of Dads"
          subtitle="community and content for lead dads"
          dates="2022.03 - Present"
          tags={[
            "wordpress",
            "advanced-custom-fields",
            "wp-toolset",
            "email",
            "ux",
            "prototyping",
          ]}
          imageSrc="/projects/company-of-dads.png"
        />
        <ProjectCard
          title="COD Tools"
          subtitle="streamlined content publishing"
          dates="2022.12 - Present"
          tags={[
            "react",
            "remix.run",
            "typescript",
            "schema",
            "prototyping",
            "product-management",
            "tailwind",
          ]}
          imageSrc="/projects/cod-tools.png"
        />
      </div>
    </DisplaySection>
  );
}
