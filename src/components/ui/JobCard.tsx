import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/shad/ui/card.tsx";
import {LucideChevronRight} from "lucide-react";

interface JobCardProps {
    imageSrc: string,
    company: string,
    description: string,
    title: string,
    tags: string[],
    timeActive: string,
    linkTo?: string
}
export function JobCard({
    imageSrc,
    company,
    title,
    description,
    tags,
    timeActive,
    }: JobCardProps) {
    return (
        <Card className="pt-0 rounded-none border-2 shadow-none gap-2 pb-0 w-sm">
            <CardHeader className="px-4 py-2 border-b-2 flex items-center justify-center h-52 dark:bg-white/90">
                <img src={imageSrc} />
            </CardHeader>
            <CardContent className="px-2">
              <CardTitle className="text-xl">{company}</CardTitle>
              <CardDescription className="text-black dark:text-white">{description}</CardDescription>
            </CardContent>
            <CardFooter className="mt-2 px-0">
                <div className="text-xs pl-2 w-full flex items-start justify-center flex-col">
                    <div className="flex flex-wrap gap-2 font-bold">
                        <span>{title}</span>
                        <span>//</span>
                        <span>{timeActive}</span></div>
                    <div className="flex flex-wrap gap-2">{tags.map((tag) => (
                        <span key={tag}>
                            #{tag}
                        </span>
                    ))}</div>
                </div>
                <CardAction className="ml-4 dark:bg-white bg-black dark:text-black text-white hover:text-black dark:hover:text-white dark:hover:bg-black hover:bg-white border-t-2 border-l-2 w-12 h-12 flex justify-center items-center hover:cursor-pointer">
                    <LucideChevronRight className="w-10 h-10" />
                </CardAction>
            </CardFooter>
        </Card>
    )
}