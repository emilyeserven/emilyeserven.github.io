import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/shad/ui/button";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  role?: string;
  dates?: string;
  tags: string[];
  href?: string;
  imagePlaceholderColor?: string;
  isWide?: boolean;
}

export type { ProjectCardProps };

function CardLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("http")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}

export function ProjectCard({
  title,
  subtitle,
  role,
  dates,
  tags,
  href,
  imagePlaceholderColor = "#e5e5e5",
  isWide = false,
}: ProjectCardProps) {
  const imageContent = (
    <div
      className="h-48 sm:h-56 lg:h-72 w-full"
      style={{ backgroundColor: imagePlaceholderColor }}
    />
  );

  return (
    <div className={`group flex flex-col border-2 border-black bg-white overflow-hidden${isWide ? "" : " max-w-md"}`}>
      {/* Image */}
      {href
        ? (
            <CardLink href={href} className="block">
              {imageContent}
            </CardLink>
          )
        : (
            imageContent
          )}

      {/* Content */}
      <div className="border-t-2 border-black p-4 flex flex-col gap-1">
        <h3 className="text-2xl lg:text-4xl font-bold">
          {href
            ? (
                <CardLink href={href} className="hover:opacity-70 transition-opacity">
                  {title}
                </CardLink>
              )
            : (
                title
              )}
        </h3>
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
            <Button
              href={href}
              variant="secondary"
              size="icon-lg"
              className="lg:size-15 shrink-0"
            >
              <ArrowRight className="size-5 lg:size-7" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
