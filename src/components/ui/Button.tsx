import {Button as ShadButton} from "@/components/shad/ui/button.tsx";
import {cn} from "@/lib/utils.ts";

interface ButtonProps {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",
    size?: "default" | "sm" | "lg" | "icon",
    children: React.ReactNode | string
}

export function Button({variant = "default", size = "default", children}: ButtonProps)  {

    return (
        <ShadButton variant={variant} size={size} className={`
        rounded-none
        ${cn({
            "border-2 border-primary hover:bg-transparent hover:text-primary": variant === "default",
            "text-lg": size === "lg"
        })}`}>{children}</ShadButton>
    )
}