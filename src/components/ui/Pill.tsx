import {cn} from "@/lib/utils.ts";

interface PillProps {
    imgSrc?: string;
    children?: React.ReactNode | string;
}

export function Pill({imgSrc, children}: PillProps) {
  return (
    <span className={`mx-1 bg-black rounded-full pr-3 text-white inline-flex justify-between items-center gap-2 ${cn({
        "pl-3": !imgSrc,
    })}`}>
      {imgSrc && <img src={imgSrc} className="rounded-full w-7 h-7" />}
      {children}
    </span>
  );
}
