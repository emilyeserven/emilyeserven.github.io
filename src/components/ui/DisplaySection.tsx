import { cn } from "@/lib/utils";

interface DisplaySectionProps {
  heading: string;
  body?: string;
  children?: React.ReactNode;
  className?: string;
}

export function DisplaySection({
  heading,
  body,
  children,
  className,
}: DisplaySectionProps) {
  return (
    <section className={cn("py-12 lg:py-20", className)}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          {heading}
        </h2>
        {body && (
          <p className="text-xl sm:text-2xl lg:text-3xl mt-2">
            {body}
          </p>
        )}
        {children && <div className="mt-4 lg:mt-6">{children}</div>}
      </div>
    </section>
  );
}
