import {Button as ShadButton} from "@/components/shad/ui/button.tsx";

interface ButtonProps {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",
    children: React.ReactNode | string
}

export function Button({variant = "default", children}: ButtonProps)  {
    return (
        <ShadButton variant={variant}>{children}</ShadButton>
    )
}