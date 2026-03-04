import { Button } from "@/components/shad/ui/button";
import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  categories: readonly string[];
  activeCategory: string | null;
  onSelectCategory: (cat: string | null) => void;
}

const activeClass = "bg-foreground text-background outline outline-2 outline-offset-2 outline-foreground";

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
        className={cn(activeCategory === null && activeClass)}
        onClick={() => onSelectCategory(null)}
      >
        All
      </Button>
      {categories.map(cat => (
        <Button
          key={cat}
          variant="outline"
          size="sm"
          className={cn(activeCategory === cat && activeClass)}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </Button>
      ))}
    </div>
  );
}
