import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shad/ui/card.tsx";
import { Logo } from "@/components/ui/Logo.tsx";
import { useState } from "react";

interface JobCardProps {
  logoSrc?: string;
  bgSrc?: string;
  company: string;
  description: string;
  title: string;
  tags: string[];
  timeActive: string;
  linkTo?: string;
  classNames?: string;
  isImageLogo?: boolean;
}
export function JobCard({
  logoSrc,
  bgSrc,
  company,
  title,
  description,
  tags,
  timeActive,
  classNames,
}: JobCardProps) {
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const [isLogoErrored, setIsLogoErrored] = useState(false);

  return (
    <Card
      className={`pt-0 rounded-none border-2 shadow-none gap-2 pb-0 w-full ${classNames}`}
    >
      <CardHeader
        className={`flex items-center justify-center h-52 dark:bg-white/90 hover:opacity-50 hover:cursor-pointer bg-cover`}
        style={{ backgroundImage: bgSrc ? `url(${bgSrc})` : "" }}
      >
        {logoSrc && !isLogoErrored && (
          <div className="px-4 py-2">
            {!isLogoLoaded && (
              <Logo mode="icon" size="lg" theme="black" isLoading={true} />
            )}
            {!isLogoErrored && (
              <img
                src={`${logoSrc}`}
                onLoad={() => {
                  setIsLogoLoaded(true);
                }}
                onError={() => {
                  setIsLogoErrored(true);
                }}
              />
            )}
          </div>
        )}
        {(!logoSrc && !bgSrc) ||
          (isLogoErrored && <Logo mode="icon" size="lg" theme="black" />)}
      </CardHeader>
      <div className="flex flex-col justify-between flex-grow-1 gap-y-4">
        <CardContent className="border-t-2 px-2 pt-2 -mt-2">
          <CardTitle className="text-2xl hover:opacity-50 hover:cursor-pointer leading-[1.2] inline">
            {company}
          </CardTitle>
          <CardDescription className="text-lg text-black dark:text-white mt-[0.5]">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="px-0">
          <div className="text-sm pl-2 w-full flex items-start justify-end flex-col">
            <div className="flex flex-wrap gap-2 font-bold">
              <span>{title.toLowerCase()}</span>
              <span>//</span>
              <span>{timeActive}</span>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-0 mb-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="hover:text-black/50 hover:cursor-pointer"
                >
                  #{tag.toLowerCase()}
                </span>
              ))}
            </div>
          </div>
          <CardAction className="ml-4 dark:bg-white bg-black dark:text-black text-white hover:text-black dark:hover:text-white dark:hover:bg-black hover:bg-white border-t-2 border-l-2 w-14 h-12 flex justify-center items-center hover:cursor-pointer self-end">
            <Logo
              mode="arrow"
              theme="css"
              classNames="fill-white hover:fill-black dark:fill-black dark:hover:fill-white"
            />
          </CardAction>
        </CardFooter>
      </div>
    </Card>
  );
}
