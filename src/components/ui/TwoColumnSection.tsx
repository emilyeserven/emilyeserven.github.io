import { cn } from "@/lib/utils";

interface TwoColumnSectionProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function TwoColumnSection({
  children,
  className,
  centered = false,
}: TwoColumnSectionProps) {
  return (
    <section className={cn("py-8 lg:py-12", className)}>
      <div className={cn("max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6", centered ? "items-center" : "items-start")}>
        {children}
      </div>
    </section>
  );
}
