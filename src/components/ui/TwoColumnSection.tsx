import { cn } from "@/lib/utils";

interface TwoColumnSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function TwoColumnSection({
  children,
  className,
}: TwoColumnSectionProps) {
  return (
    <section className={cn("py-12 lg:py-20", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {children}
      </div>
    </section>
  );
}
