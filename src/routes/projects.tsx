import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DisplaySection } from "@/components/ui/DisplaySection";
import { PageTitle } from "@/components/ui/PageTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectFilters } from "@/components/ui/ProjectFilters";
import { allProjects, categories } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  const [activeCategories, setActiveCategories] = useState<Set<string>>(
    new Set(),
  );
  const [sortBy, setSortBy] = useState<"featured" | "date">("featured");
  const [activeTechFilters, setActiveTechFilters] = useState<Set<string>>(
    new Set(),
  );

  const availableTechTags = useMemo(() => {
    const tags = new Set<string>();
    for (const p of allProjects) {
      for (const t of p.tags) {
        tags.add(t);
      }
    }
    return [...tags].sort();
  }, []);

  const toggleCategory = (cat: string) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const toggleTechFilter = (tag: string) => {
    setActiveTechFilters((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const filtered = useMemo(() => {
    let result = allProjects;

    if (activeCategories.size > 0) {
      result = result.filter(p => activeCategories.has(p.category));
    }

    if (activeTechFilters.size > 0) {
      result = result.filter(p =>
        p.tags.some(t => activeTechFilters.has(t)),
      );
    }

    if (sortBy === "date") {
      result = [...result].sort((a, b) => b.sortDate - a.sortDate);
    }
    else {
      // featured-first, then by date descending
      result = [...result].sort((a, b) => {
        if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
        return b.sortDate - a.sortDate;
      });
    }

    return result;
  }, [activeCategories, activeTechFilters, sortBy]);

  const featured = filtered.filter(p => p.isFeatured);
  const compact = filtered.filter(p => !p.isFeatured);

  return (
    <>
      <PageTitle>Projects</PageTitle>

      <DisplaySection>
        <ProjectFilters
          categories={categories}
          activeCategories={activeCategories}
          onToggleCategory={toggleCategory}
          sortBy={sortBy}
          onChangeSortBy={setSortBy}
          activeTechFilters={activeTechFilters}
          availableTechTags={availableTechTags}
          onToggleTechFilter={toggleTechFilter}
        />
      </DisplaySection>

      {featured.length > 0 && (
        <DisplaySection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map(p => (
              <ProjectCard
                key={p.title}
                {...p}
                variant="featured"
                isWide
              />
            ))}
          </div>
        </DisplaySection>
      )}

      {compact.length > 0 && (
        <DisplaySection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {compact.map(p => (
              <ProjectCard
                key={p.title}
                {...p}
                variant="compact"
                isWide
              />
            ))}
          </div>
        </DisplaySection>
      )}
    </>
  );
}
