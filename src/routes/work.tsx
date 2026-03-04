import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DisplaySection } from "@/components/ui/DisplaySection";
import { PageTitle } from "@/components/ui/PageTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectFilters } from "@/components/ui/ProjectFilters";
import { allProjects, categories } from "@/data/projects";

export const Route = createFileRoute("/work")({
  component: Work,
});

function Work() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = allProjects;

    if (activeCategory !== null) {
      result = result.filter(p => p.category === activeCategory);
    }

    return [...result].sort((a, b) => b.startDate - a.startDate);
  }, [activeCategory]);

  const featured = filtered.filter(p => p.isFeatured);
  const compact = filtered.filter(p => !p.isFeatured);

  return (
    <>
      <PageTitle>Work</PageTitle>

      <DisplaySection>
        <ProjectFilters
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </DisplaySection>

      <DisplaySection className="pt-0 lg:pt-0">
        <div className="flex flex-col gap-4">
          {featured.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featured.map(p => (
                <ProjectCard
                  key={p.id}
                  {...p}
                  variant="featured"
                  isWide
                />
              ))}
            </div>
          )}

          {compact.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {compact.map(p => (
                <ProjectCard
                  key={p.id}
                  {...p}
                  variant="compact"
                  isWide
                />
              ))}
            </div>
          )}
        </div>
      </DisplaySection>
    </>
  );
}
