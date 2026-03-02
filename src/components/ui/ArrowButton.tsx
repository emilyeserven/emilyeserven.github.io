import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ArrowButtonVariant = "filled" | "outline" | "blue";

interface ArrowButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ArrowButtonVariant;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<ArrowButtonVariant, string> = {
  filled: "bg-black text-white border-black",
  outline: "bg-white text-black border-3 border-black",
  blue: "bg-portfolio-blue text-white border-portfolio-blue",
};

export function ArrowButton({
  children,
  href,
  variant = "filled",
  className,
  onClick,
}: ArrowButtonProps) {
  const inner = (
    <>
      <span className="font-semibold text-lg sm:text-xl lg:text-[28px]">
        {children}
      </span>
      <ArrowRight className="size-5 lg:size-7 shrink-0" />
    </>
  );

  const baseClasses = cn(
    "inline-flex items-center gap-4 px-4 py-2 h-[50px] lg:h-[61px] transition-opacity hover:opacity-90",
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <Link to={href} className={baseClasses}>
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {inner}
    </button>
  );
}
