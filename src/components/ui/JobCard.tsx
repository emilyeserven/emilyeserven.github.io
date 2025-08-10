import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/shad/ui/card.tsx";
import React from "react";

interface JobCardProps {
    imageSrc: string,
    company: string,
    description: string,
    title: string,
    tags: string[],
    timeActive: string,
}
export function JobCard({
    company,
    title,
    description,
    tags,
    timeActive
    }: JobCardProps) {
    return (
        <Card className="pt-0">
            <CardHeader className="px-0">
                Image
            </CardHeader>
            <CardContent className="px-4">
              <CardTitle>{company}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter className="px-4">
                <div>
                    <p>{title} // {timeActive}</p>
                    <p>{tags.map(tag => (
                        <React.Fragment key={tag}>{tag}, </React.Fragment>
                    ))}</p>
                </div>
                <CardAction>
                    Arrow
                </CardAction>
            </CardFooter>

        </Card>
    )
}