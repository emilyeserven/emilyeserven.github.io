import { Avatar, AvatarImage, AvatarFallback } from "@/components/shad/ui/avatar";

import { cn } from "@/lib/utils";

interface AvatarPillProps {
  src: string;
  alt: string;
  fallback: string;
  name: string;
  className?: string;
}

export function AvatarPill({ src, alt, fallback, name, className }: AvatarPillProps) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 bg-black dark:bg-white text-white dark:text-black rounded-full pl-0 pr-3 text-base lg:text-lg border border-black dark:border-white", className)}>
      <Avatar className="size-6 lg:size-8">
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback className="text-xs">{fallback}</AvatarFallback>
      </Avatar>
      {name}
    </span>
  );
}
