import { createFileRoute } from "@tanstack/react-router";
import { DisplaySection } from "@/components/ui/DisplaySection";
import { ProjectCard } from "@/components/ui/ProjectCard";
import {
  twelveLabs,
  lazarusAi,
  panda5,
  companyOfDads,
  codTools,
} from "@/data/projects";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  return (
    <DisplaySection>
      <h1 className="text-4xl lg:text-5xl font-bold">Projects</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard {...twelveLabs} />
        <ProjectCard {...lazarusAi} />
        <ProjectCard {...panda5} />
        <ProjectCard {...companyOfDads} />
        <ProjectCard {...codTools} />
      </div>
    </DisplaySection>
  );
}
