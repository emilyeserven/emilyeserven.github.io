import {Button as ShadButton} from "@/components/shad/ui/button.tsx";
import {cn} from "@/lib/utils.ts";
import {LucideMoveRight} from "lucide-react";

interface ButtonProps {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",
    size?: "default" | "sm" | "lg" | "icon",
    isArrowShown?: boolean,
    children: React.ReactNode | string
}

export function Button({variant = "default", size = "default", isArrowShown = false, children}: ButtonProps)  {

    return (
        <ShadButton variant={variant} size={size} className={`
        rounded-none border-2
        ${cn({
            "border-primary hover:bg-transparent hover:text-primary": variant === "default",
            "border-black hover:bg-black hover:text-white": variant === "outline",
            "text-lg": size === "lg"
        })}`}>{children}{isArrowShown && <LucideMoveRight />}</ShadButton>
    )
}