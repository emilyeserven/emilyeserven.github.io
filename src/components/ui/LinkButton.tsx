import { Link } from "@tanstack/react-router";
import { Button, type buttonVariants } from "@/components/shad/ui/button";
import type { VariantProps } from "class-variance-authority";

type LinkButtonProps = {
  variant?: NonNullable<VariantProps<typeof buttonVariants>["variant"]>;
  size?: NonNullable<VariantProps<typeof buttonVariants>["size"]>;
} & Omit<React.ComponentProps<typeof Link>, "children" | "className"> & {
  hasArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function LinkButton({ hasArrow = false, children, variant, size, className, ...linkProps }: LinkButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link {...linkProps}>
        {children}
        {hasArrow && <span aria-hidden="true" className="no-underline">→</span>}
      </Link>
    </Button>
  );
}
