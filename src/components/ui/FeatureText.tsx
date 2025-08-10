interface FeatureTextProps {
    boldedText: string;
    subText: string;
    classNames: string;
}
export function FeatureText({boldedText, subText, classNames}: FeatureTextProps) {
    return (
      <div className={`text-3xl leading-[1.3] ${classNames}`}>
        <p className="font-bold">{boldedText}</p>
        <p>{subText}</p>
      </div>
    );
}