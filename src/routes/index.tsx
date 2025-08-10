import { createFileRoute } from "@tanstack/react-router";
import { JobCard } from "@/components/ui/JobCard.tsx";
import { FeatureText } from "@/components/ui/FeatureText.tsx";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="w-full bg-[url(./home-header.jpg)] h-100 border-b-2"></div>
        <div className="w-[1200px] max-w-[80%] mx-auto flex flex-col gap-y-12 -mt-8">
            <div className="grid grid-cols-2 gap-x-4">
                <FeatureText
                    boldedText="I’m usually a front-end dev for JavaScript web apps."
                    subText="My work does skew towards ReactJS, but my foundation in vanilla JS allows me to pivot if needed."
                    classNames="mt-16"
                />
                <JobCard
                    imageSrc={"./laz-logo.png"}
                    company={"Lazarus AI"}
                    description={"AI for the Public Sector"}
                    title={"Software Engineer"}
                    tags={["react", "typescript"]}
                    timeActive={"2025.06 - present"}
                />
            </div>
            <div className="grid grid-cols-2 gap-x-4 items-center">
                <FeatureText
                    boldedText="Lately, I’ve been exploring full-stack frameworks."
                    subText="Being able to understand as much of the tech stack as I can has been an exciting journey, and I’m eager to continue."
                />
                <JobCard
                    company={"Panda5"}
                    description={"knowledge-focused social media"}
                    title={"Software Engineer"}
                    tags={["react", "remix.run"]}
                    timeActive={"2023.01 - 2023.05"}
                />
            </div>
            <div className="mt-12">
                <FeatureText
                    boldedText="Lately, I’ve been exploring full-stack frameworks."
                    subText="Being able to understand as much of the tech stack as I can has been an exciting journey, and I’m eager to continue."
                />
            </div>
            <div className="grid grid-cols-2 gap-x-4">

                <JobCard
                    company={"Panda5"}
                    description={"knowledge-focused social media"}
                    title={"Software Engineer"}
                    tags={["react", "remix.run"]}
                    timeActive={"2023.01 - 2023.05"}
                />

                <JobCard
                    company={"Panda5"}
                    description={"knowledge-focused social media"}
                    title={"Software Engineer"}
                    tags={["react", "remix.run"]}
                    timeActive={"2023.01 - 2023.05"}
                />
            </div>
            <div className="mt-12">
                <FeatureText
                    boldedText="That's the gist of it!"
                />
            </div>
            <div className="mt-12">
                <FeatureText
                    boldedText="(By the way, I’m more than just a developer.)"
                    subText="Frog Caretaker, 日本語 Learner, Photographer, Designer, Wing Tsun Practitioner, Music Collector, Animation Enthusiast, Gardener, Pasta & Noodle Enthusiast, Tea Lover, Amateur Gardener..."
                    isSubtextSmaller={true}
                />
            </div>
        </div>
    </>
  );
}
