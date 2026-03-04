import { Button } from "@/components/shad/ui/button";

interface ProjectFiltersProps {
  categories: readonly string[];
  activeCategory: string | null;
  onSelectCategory: (cat: string | null) => void;
}

export function ProjectFilters({
  categories,
  activeCategory,
  onSelectCategory,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium">Category:</span>
      <Button
        variant="outline"
        size="sm"
        aria-pressed={activeCategory === null}
        {...(activeCategory === null ? { "data-active": "" } : {})}
        onClick={() => onSelectCategory(null)}
      >
        All
      </Button>
      {categories.map(cat => (
        <Button
          key={cat}
          variant="outline"
          size="sm"
          aria-pressed={activeCategory === cat}
          {...(activeCategory === cat ? { "data-active": "" } : {})}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </Button>
      ))}
    </div>
  );
}
