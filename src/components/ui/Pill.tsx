import {cn} from "@/lib/utils.ts";
import {Avatar} from "@/components/ui/Avatar.tsx";

interface PillProps {
    imgSrc?: string;
    children?: React.ReactNode | string;
}

export function Pill({imgSrc, children}: PillProps) {
  return (
    <span className={`mx-1 bg-black rounded-full text-white inline-flex justify-between items-center gap-2 ${cn({
        "px-4 py-1": !imgSrc,
        "pr-3": imgSrc
    })}`}>
        {imgSrc && <Avatar imgSrc={imgSrc} />}
      {children}
    </span>
  );
}
