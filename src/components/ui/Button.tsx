import { Button as ShadButton } from "@/components/shad/ui/button.tsx";
import { cn } from "@/lib/utils.ts";
import { LucideMoveRight } from "lucide-react";

interface ButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "on-black"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  isArrowShown?: boolean;
  children: React.ReactNode | string;
  classNames?: string;
  onClick?: () => void;
}

export function Button({
  variant = "default",
  size = "default",
  isArrowShown = false,
  classNames,
  children,
  onClick,
}: ButtonProps) {
  const passedVariant = variant !== "on-black" ? variant : "outline";

  return (
    <ShadButton
      variant={passedVariant}
      size={size}
      className={`
        rounded-none border-2 hover:cursor-pointer
        ${cn({
          "border-primary hover:bg-white hover:text-primary":
            variant === "default",
          "border-black hover:bg-black hover:text-white": variant === "outline",
          "bg-black text-white border-black hover:bg-white hover:text-black":
            variant === "secondary",
          "border-white bg-black hover:bg-white text-white hover:text-black":
            variant === "on-black",
          "text-lg": size === "lg",
        })}
        ${classNames}
        `}
      onClick={onClick ?? undefined}
    >
      {children}
      {isArrowShown && <LucideMoveRight />}
    </ShadButton>
  );
}
