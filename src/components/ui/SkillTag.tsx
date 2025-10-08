interface SkillTagProps {
    tagName: string;
}

export function SkillTag({tagName}: SkillTagProps) {
    return (
        <span
            className="hover:text-black/50 hover:cursor-pointer"
        >
                  #{tagName}
                </span>
    )
}