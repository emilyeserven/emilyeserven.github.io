import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

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
        <SectionHeading heading={heading} body={body} />
        {children && <div className="mt-4 lg:mt-6">{children}</div>}
      </div>
    </section>
  );
}
