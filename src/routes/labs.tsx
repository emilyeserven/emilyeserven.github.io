import { createFileRoute } from "@tanstack/react-router";
import { DisplaySection } from "@/components/ui/DisplaySection";
import { PageTitle } from "@/components/ui/PageTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { labProjects } from "@/data/projects";

export const Route = createFileRoute("/labs")({
  component: Labs,
});

function Labs() {
  return (
    <>
      <PageTitle>Labs</PageTitle>

      <DisplaySection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {labProjects.map(p => (
            <ProjectCard
              key={p.title}
              {...p}
              variant="compact"
              isWide
            />
          ))}
        </div>
      </DisplaySection>
    </>
  );
}
