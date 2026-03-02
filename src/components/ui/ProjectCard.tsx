import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  role?: string;
  dates?: string;
  tags: string[];
  href?: string;
  imagePlaceholderColor?: string;
}

export type { ProjectCardProps };

export function ProjectCard({
  title,
  subtitle,
  role,
  dates,
  tags,
  href,
  imagePlaceholderColor = "#e5e5e5",
}: ProjectCardProps) {
  const isExternal = href?.startsWith("http");
  const className = cn(
    "group flex flex-col border-2 border-black bg-white overflow-hidden",
    href && "cursor-pointer",
  );

  const content = (
    <>
      {/* Image placeholder */}
      <div
        className="h-48 sm:h-56 lg:h-72 w-full"
        style={{ backgroundColor: imagePlaceholderColor }}
      />

      {/* Content */}
      <div className="border-t-2 border-black p-4 flex flex-col gap-1">
        <h3 className="text-2xl lg:text-4xl font-bold">{title}</h3>
        <p className="text-lg lg:text-2xl">{subtitle}</p>

        {(role || dates) && (
          <p className="text-sm lg:text-base font-medium mt-1">
            {role}
            {role && dates && "  //  "}
            {dates}
          </p>
        )}

        <div className="flex items-end justify-between gap-2 mt-1">
          <p className="text-sm lg:text-base font-light text-black/60 flex-1">
            {tags.map(tag => `#${tag}`).join("    ")}
          </p>

          {href && (
            <div className="bg-black size-10 lg:size-[60px] flex items-center justify-center shrink-0">
              <ArrowRight className="size-5 lg:size-7 text-white" />
            </div>
          )}
        </div>
      </div>
    </>
  );

  if (href && isExternal) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
