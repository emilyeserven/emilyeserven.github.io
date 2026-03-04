import { Button } from "@/components/shad/ui/button";

interface ProjectFiltersProps {
  categories: readonly string[];
  activeCategories: Set<string>;
  onToggleCategory: (cat: string) => void;
  sortBy: "featured" | "date";
  onChangeSortBy: (sort: "featured" | "date") => void;
  activeTechFilters: Set<string>;
  availableTechTags: string[];
  onToggleTechFilter: (tag: string) => void;
}

export function ProjectFilters({
  categories,
  activeCategories,
  onToggleCategory,
  sortBy,
  onChangeSortBy,
  activeTechFilters,
  availableTechTags,
  onToggleTechFilter,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Row 1: Categories */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium">Category:</span>
        {categories.map(cat => (
          <Button
            key={cat}
            variant={activeCategories.has(cat) ? "secondary" : "outline"}
            size="sm"
            onClick={() => onToggleCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Row 2: Sort + Tech filters */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Sort:</span>
          <Button
            variant={sortBy === "featured" ? "secondary" : "outline"}
            size="sm"
            onClick={() => onChangeSortBy("featured")}
          >
            Featured
          </Button>
          <Button
            variant={sortBy === "date" ? "secondary" : "outline"}
            size="sm"
            onClick={() => onChangeSortBy("date")}
          >
            Date
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium">Filter by Tech:</span>
          {availableTechTags.map(tag => (
            <Button
              key={tag}
              variant={activeTechFilters.has(tag) ? "secondary" : "outline"}
              size="xs"
              onClick={() => onToggleTechFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
