import { createFileRoute } from "@tanstack/react-router";
import { JobCard } from "@/components/ui/JobCard.tsx";
import { FeatureText } from "@/components/ui/FeatureText.tsx";
import { Button } from "@/components/ui/Button.tsx";
import { Header } from "@/components/layout/Header.tsx";
import {Pill} from "@/components/ui/Pill.tsx";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="w-full bg-[url(./home-header.jpg)] border-b-2">
        <Header />
        <div className="container pt-20 pb-40">
          <div className="w-[600px] border-2 bg-white/70 px-4 py-4 backdrop-blur-sm flex flex-col">
            <p className="text-lg font-medium mb-2 flex items-center">
              Nice to meet you! I’m{" "}
                <Pill imgSrc={'./headshot-small.jpeg'}>Emily</Pill>
              .
            </p>
            <p className="text-2xl font-bold">
              I develop scalable and usable experiences
            </p>
            <p className="text-xl">as well as some other fun things.</p>
          </div>
          <div className="-mt-[2px]">
            <Button isArrowShown={true} variant="secondary" size="lg">
              Download Resume
            </Button>
            <Button
              variant="outline"
              isArrowShown={true}
              size="lg"
              classNames="-ml-[2px]"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-y-12 -mt-8">
        <div className="grid grid-cols-2 gap-x-4">
          <FeatureText
            boldedText="I’m usually a front-end dev for JavaScript web apps."
            subText="My work does skew towards ReactJS, but my foundation in vanilla JS allows me to pivot if needed."
            classNames="mt-16"
          />
          <JobCard
            logoSrc={"./laz-logo.png"}
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
            logoSrc={"./p5-logo.png"}
            company={"Panda5"}
            description={"knowledge-focused social media"}
            title={"Software Engineer"}
            tags={[
              "react",
              "remix.run",
              "typescript",
              "prototyping",
              "schema",
              "prisma",
              "tailwind",
            ]}
            timeActive={"2023.01 - 2023.05"}
          />
        </div>
        <div className="mt-12">
          <FeatureText
            boldedText="I have skills beyond the stack, too."
            subText="As a freelancer with 12+ years of experience, I partner with clients that have little tech knowledge. I manage web projects start-to-finish, implement, and more."
          />
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <JobCard
            bgSrc={"./cod-image.jpg"}
            isImageLogo={false}
            company={"The Company of Dads"}
            description={"community and content for lead dads"}
            title={"Web Developer"}
            tags={[
              "wordpress",
              "advanced-custom-fields",
              "wp-toolset",
              "email",
              "ux",
              "prototyping",
            ]}
            timeActive={"2022.03 - Present"}
          />

          <JobCard
            bgSrc={"./cod-tools-image.jpg"}
            isImageLogo={false}
            company={"COD Tools"}
            description={"streamlined content publishing"}
            title={"Engineer + Design + PDM"}
            tags={[
              "react",
              "remix.run",
              "typescript",
              "schema",
              "prototyping",
              "product-management",
              "tailwind",
            ]}
            timeActive={"2022.12 - Present"}
          />
        </div>
        <div className="mt-12 flex flex-col gap-y-4">
          <FeatureText boldedText="That's the gist of it!" />
          <div className="flex gap-x-2">
            <Button isArrowShown={true} size="lg">
              Explore more websites
            </Button>
            <Button variant="outline" isArrowShown={true} size="lg">
              Download Resume
            </Button>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-y-4">
          <FeatureText
            boldedText="(By the way, I’m more than just a developer.)"
            subText="Frog Caretaker, 日本語 Learner, Photographer, Designer, Wing Tsun Practitioner, Music Collector, Animation Enthusiast, Gardener, Pasta & Noodle Enthusiast, Tea Lover, Amateur Gardener..."
            isSubtextSmaller={true}
          />
          <div className="flex gap-x-2">
            <Button isArrowShown={true} size="lg">
              Biography
            </Button>
            <Button variant="outline" isArrowShown={true} size="lg">
              Blog
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
