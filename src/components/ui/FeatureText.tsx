import {cn} from "@/lib/utils.ts";


interface FeatureTextProps {
    boldedText: string;
    subText?: string;
    isSubtextSmaller?: boolean;
    classNames?: string;
}
export function FeatureText({boldedText, subText, isSubtextSmaller, classNames}: FeatureTextProps) {
    return (
      <div className={`text-3xl leading-[1.3] ${classNames}`}>
        <p className="font-bold">{boldedText}</p>
          {subText && <p className={cn({
                  "text-2xl mt-2": isSubtextSmaller
          })}>{subText}</p>}
      </div>
    );
}