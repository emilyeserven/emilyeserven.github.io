import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  heading: string;
  body?: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

export function SectionHeading({
  heading,
  body,
  className,
  bodyClassName,
}: SectionHeadingProps) {
  return (
    <div>
      <h2 className={cn("text-2xl sm:text-3xl lg:text-4xl font-bold", className)}>
        {heading}
      </h2>
      {body && (
        <p className={cn("text-xl sm:text-2xl lg:text-3xl mt-2", bodyClassName)}>
          {body}
        </p>
      )}
    </div>
  );
}
