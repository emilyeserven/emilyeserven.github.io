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
  imageSize?: "default" | "medium" | "tall";
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
  imagePlaceholderColor = "transparent",
  imageSize = "default",
  isWide = false,
}: ProjectCardProps) {
  const imageHeightClass = imageSize === "tall"
    ? "h-48 sm:h-56 lg:h-72"
    : imageSize === "medium"
      ? "h-40 sm:h-48 lg:h-56"
      : "h-36 sm:h-40 lg:h-48";

  const imageContent = imageSrc
    ? (
        <div
          className={cn("w-full", imageHeightClass)}
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
          className={cn("w-full", imageHeightClass)}
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
      <div className="border-t-2 border-black dark:border-white pt-2 px-2 flex flex-col justify-between gap-4 flex-1">
        {/* Top group: company + tagline */}
        <div>
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
          <p className="text-base lg:text-xl mt-1">{subtitle}</p>
        </div>

        {/* Bottom group: role/dates, tags, arrow */}
        <div>
          {(role || dates) && (
            <p className="text-sm lg:text-base font-medium leading-tight">
              {role}
              {role && dates && "  //  "}
              {dates}
            </p>
          )}

          <div className="flex items-end justify-between gap-4 pt-2 -mx-2">
            <p className="text-xs lg:text-sm font-light text-black/60 dark:text-white/75 flex-1 pb-2 pl-2">
              {tags.map(tag => `#${tag}`).join("    ")}
            </p>

            {href
              ? (
                  <Button
                    asChild
                    variant="secondary"
                    size="icon-lg"
                    className="lg:size-15 shrink-0 rounded-none -mb-[2px] -mr-[2px]"
                  >
                    <CardLink href={href} aria-label={`View ${title}`}>
                      <ArrowRight className="size-5 lg:size-7" />
                    </CardLink>
                  </Button>
                )
              : (
                  <span className={cn(buttonVariants({ variant: "secondary", size: "icon-lg" }), "lg:size-15 shrink-0 rounded-none -mb-[2px] -mr-[2px]")}>
                    <ArrowRight className="size-5 lg:size-7" />
                  </span>
                )}
          </div>
        </div>
      </div>
    </div>
  );
}
