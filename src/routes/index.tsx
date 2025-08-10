import { createFileRoute } from "@tanstack/react-router";
import {JobCard} from "@/components/ui/JobCard.tsx";
import {FeatureText} from "@/components/ui/FeatureText.tsx";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
        <div className="w-full bg-[url(./home-header.jpg)] h-100 border-b-2">
        </div>
      <div className="w-[1200px] max-w-[80%] grid grid-cols-2 mx-auto gap-x-4 -mt-8">
          <FeatureText boldedText="I’m usually a front-end dev for JavaScript web apps." subText="My work does skew towards ReactJS, but my foundation in vanilla JS allows me to pivot if needed." classNames="mt-16" />
          <JobCard imageSrc={"./laz-logo.png"} company={"Lazarus AI"} description={"AI for the Public Sector"} title={"Software Engineer"} tags={["react", "typescript"]} timeActive={"2025.06 - present"} />
      </div>
    </>
  );
}
