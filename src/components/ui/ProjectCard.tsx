import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/shad/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  role?: string;
  dates?: string;
  tags: string[];
  href?: string;
  imageSrc?: string;
  imageFit?: "cover" | "contain";
  imagePlaceholderColor?: string;
  isWide?: boolean;
}

export type { ProjectCardProps };

type CardLinkProps = {
  href: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

function CardLink({ href, children, ...rest }: CardLinkProps) {
  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

export function ProjectCard({
  title,
  subtitle,
  role,
  dates,
  tags,
  href,
  imageSrc,
  imageFit = "cover",
  imagePlaceholderColor = "#e5e5e5",
  isWide = false,
}: ProjectCardProps) {
  const imageContent = imageSrc
    ? (
        <div
          className="h-48 sm:h-56 lg:h-72 w-full"
          style={{ backgroundColor: imageFit === "contain" ? imagePlaceholderColor : undefined }}
        >
          <img
            src={imageSrc}
            alt={title}
            className={cn(
              "size-full",
              imageFit === "contain" ? "object-contain p-6" : "object-cover",
            )}
          />
        </div>
      )
    : (
        <div
          className="h-48 sm:h-56 lg:h-72 w-full"
          style={{ backgroundColor: imagePlaceholderColor }}
        />
      );

  return (
    <div className={cn("group flex flex-col border-2 border-black dark:border-white bg-white dark:bg-black overflow-hidden", !isWide && "max-w-md")}>
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
      <div className="border-t-2 border-black dark:border-white p-4 flex flex-col gap-1">
        <h3 className="text-xl lg:text-2xl font-bold">
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
        <p className="text-base lg:text-xl">{subtitle}</p>

        {(role || dates) && (
          <p className="text-sm lg:text-base font-medium mt-1">
            {role}
            {role && dates && "  //  "}
            {dates}
          </p>
        )}

        <div className="flex items-end justify-between gap-2 mt-1">
          <p className="text-sm lg:text-base font-light text-black/60 dark:text-white/75 flex-1">
            {tags.map(tag => `#${tag}`).join("    ")}
          </p>

          {href ? (
            <Button
              asChild
              variant="secondary"
              size="icon-lg"
              className="lg:size-15 shrink-0"
            >
              <CardLink href={href} aria-label={`View ${title}`}>
                <ArrowRight className="size-5 lg:size-7" />
              </CardLink>
            </Button>
          ) : (
            <span className={cn(buttonVariants({ variant: "secondary", size: "icon-lg" }), "lg:size-15 shrink-0")}>
              <ArrowRight className="size-5 lg:size-7" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
