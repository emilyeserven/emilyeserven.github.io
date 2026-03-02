import { cn } from "@/lib/utils";
import { ProjectCard, type ProjectCardProps } from "./ProjectCard";

interface TextWithCardSectionProps {
  heading: string;
  body: string;
  project: ProjectCardProps;
  className?: string;
}

export function TextWithCardSection({
  heading,
  body,
  project,
  className,
}: TextWithCardSectionProps) {
  return (
    <section className={cn("py-12 lg:py-20", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
            {heading}
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-[40px] xl:leading-[1.3] mt-4">
            {body}
          </p>
        </div>
        <ProjectCard {...project} />
      </div>
    </section>
  );
}
