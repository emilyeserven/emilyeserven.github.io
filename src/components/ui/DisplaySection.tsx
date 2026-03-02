import { cn } from "@/lib/utils";

interface DisplaySectionProps {
  children?: React.ReactNode;
  className?: string;
}

export function DisplaySection({
  children,
  className,
}: DisplaySectionProps) {
  return (
    <section className={cn("py-12 lg:py-20", className)}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
