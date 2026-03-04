import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Badge } from "@/components/shad/ui/badge";
import { Button } from "@/components/shad/ui/button";
import { cn } from "@/lib/utils";

const imageHeightVariants = cva("w-full", {
  variants: {
    variant: {
      default: "h-36 sm:h-40 lg:h-48",
      featured: "h-48 sm:h-56 lg:h-72",
      compact: "h-32 sm:h-36 lg:h-40",
    },
    imageSize: {
      default: "",
      medium: "",
      tall: "",
    },
  },
  compoundVariants: [
    { variant: "default", imageSize: "medium", class: "h-40 sm:h-48 lg:h-56" },
    { variant: "default", imageSize: "tall", class: "h-48 sm:h-56 lg:h-72" },
  ],
  defaultVariants: { variant: "default", imageSize: "default" },
});

const titleVariants = cva("font-bold", {
  variants: {
    variant: {
      default: "text-xl lg:text-2xl",
      featured: "text-2xl lg:text-4xl",
      compact: "text-lg lg:text-xl",
    },
  },
  defaultVariants: { variant: "default" },
});

const subtitleVariants = cva("mt-1", {
  variants: {
    variant: {
      default: "text-base lg:text-xl",
      featured: "text-xl lg:text-2xl",
      compact: "text-sm lg:text-base",
    },
  },
  defaultVariants: { variant: "default" },
});

const tagVariants = cva("font-light text-black/60 dark:text-white/75 flex-1 pb-2 pl-2", {
  variants: {
    variant: {
      default: "text-xs lg:text-sm",
      featured: "text-sm lg:text-base",
      compact: "text-xs",
    },
  },
  defaultVariants: { variant: "default" },
});

const arrowVariants = cva("shrink-0 rounded-none -mb-[2px] -mr-[2px]", {
  variants: {
    variant: {
      default: "lg:size-15",
      featured: "lg:size-15",
      compact: "size-10",
    },
  },
  defaultVariants: { variant: "default" },
});

const arrowIconVariants = cva("", {
  variants: {
    variant: {
      default: "size-5 lg:size-7",
      featured: "size-5 lg:size-7",
      compact: "size-5",
    },
  },
  defaultVariants: { variant: "default" },
});

type CardVariant = NonNullable<VariantProps<typeof titleVariants>["variant"]>;

interface ProjectCardProps {
  id?: string;
  projectName: string;
  subtitle: string;
  dates?: string;
  tags: string[];
  href?: string;
  imageSrc?: string;
  imageFit?: "cover" | "contain";
  imagePlaceholderColor?: string;
  /** Only applies when variant is "default" */
  imageSize?: "default" | "medium" | "tall";
  isWide?: boolean;
  category?: string;
  variant?: CardVariant;
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

function CategoryBadge({ category }: { category: string }) {
  return (
    <Badge className="absolute bottom-0 left-2 translate-y-1/2 bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-2 py-0.5 z-10">
      {category}
    </Badge>
  );
}

function ProjectTitle({ projectName, href, className }: { projectName: string; href?: string; className?: string }) {
  return (
    <h3 className={className}>
      {href
        ? (
            <CardLink href={href} className="hover:opacity-70 transition-opacity">
              {projectName}
            </CardLink>
          )
        : projectName}
    </h3>
  );
}

function ProjectDates({ dates }: { dates: string }) {
  return (
    <p className="text-sm lg:text-base font-medium leading-tight">
      {dates}
    </p>
  );
}

export function ProjectCard({
  projectName,
  subtitle,
  dates,
  tags,
  href,
  imageSrc,
  imageFit = "cover",
  imagePlaceholderColor = "transparent",
  imageSize = "default",
  isWide = false,
  category,
  variant = "default",
}: ProjectCardProps) {
  const imageContent = imageSrc
    ? (
        <div
          className={imageHeightVariants({ variant, imageSize })}
          style={{ backgroundColor: imageFit === "contain" ? imagePlaceholderColor : undefined }}
        >
          <img
            src={imageSrc}
            alt={`Logo of ${projectName}`}
            className={cn(
              "size-full",
              imageFit === "contain" ? "object-contain p-6" : "object-cover",
            )}
          />
        </div>
      )
    : (
        <div
          className={imageHeightVariants({ variant, imageSize })}
          style={{ backgroundColor: imagePlaceholderColor }}
        />
      );

  return (
    <div className={cn("group flex flex-col border-2 border-black dark:border-white bg-white dark:bg-black overflow-hidden", !isWide && variant === "default" && "max-w-md")}>
      {/* Image + Category badge */}
      <div className="relative">
        {href
          ? (
              <CardLink href={href} className="block">
                {imageContent}
              </CardLink>
            )
          : (
              imageContent
            )}

        {category && <CategoryBadge category={category} />}
      </div>

      {/* Content */}
      <div className="border-t-2 border-black dark:border-white px-2 flex flex-col justify-between flex-1 pt-2 gap-4">
        {/* Top group: company + tagline */}
        <div className={cn(category && "mt-2")}>
          <ProjectTitle projectName={projectName} href={href} className={titleVariants({ variant })} />
          <p className={subtitleVariants({ variant })}>{subtitle}</p>
        </div>

        {/* Bottom group: dates, tags, arrow */}
        <div>
          {dates && <ProjectDates dates={dates} />}

          <div className="flex items-end justify-between gap-4 pt-2 -mx-2">
            <p className={tagVariants({ variant })}>
              {tags.map(tag => `#${tag}`).join("    ")}
            </p>

            {href && (
              <Button
                asChild
                variant="secondary"
                size={variant === "compact" ? "icon" : "icon-lg"}
                className={arrowVariants({ variant })}
              >
                <CardLink href={href} aria-label={`View ${projectName}`}>
                  <ArrowRight className={arrowIconVariants({ variant })} />
                </CardLink>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
