import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/layout/HeroSection";
import { TwoColumnSection } from "@/components/ui/TwoColumnSection";
import { DisplaySection } from "@/components/ui/DisplaySection";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/shad/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Divider */}
      <div className="border-b-2 border-black h-12" />

      {/* Front-end dev + Lazarus AI */}
      <TwoColumnSection>
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
            I'm usually a front-end dev for JavaScript web apps.
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl xl:leading-snug mt-4">
            My work does skew towards ReactJS, but my foundation in vanilla JS allows me to pivot if needed.
          </p>
        </div>
        <ProjectCard
          title="Lazarus AI"
          subtitle="AI for the public sector"
          role="software engineer"
          dates="2025.06 - present"
          tags={["react", "data-viz", "typescript", "dashboard"]}
          href="#"
          imagePlaceholderColor="#f2f2f2"
        />
      </TwoColumnSection>

      {/* Full-stack frameworks + Panda5 */}
      <TwoColumnSection>
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Lately, I've been exploring full-stack frameworks.
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl xl:leading-snug mt-4">
            Being able to understand as much of the tech stack as I can has been an exciting journey, and I'm eager to continue.
          </p>
        </div>
        <ProjectCard
          title="Panda5"
          subtitle="knowledge-focused social media"
          role="software engineer"
          dates="2023.01 - 2023.05"
          tags={[
            "mvp",
            "react",
            "remix.run",
            "typescript",
            "prototyping",
            "schema",
            "prisma",
            "tailwind",
          ]}
          href="#"
          imagePlaceholderColor="#e8e8e8"
        />
      </TwoColumnSection>

      {/* Skills beyond the stack */}
      <DisplaySection
        heading="I have skills beyond the stack, too."
        body="As a freelancer with 12+ years of experience, I partner with clients that have little tech knowledge. I manage web projects start-to-finish, implement, and more."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="The Company of Dads"
            subtitle="community and content for lead dads"
            dates="2022.03 - Present"
            isWide
            tags={[
              "wordpress",
              "advanced-custom-fields",
              "wp-toolset",
              "email",
              "ux",
              "prototyping",
            ]}
            href="#"
            imagePlaceholderColor="#ddd"
          />
          <ProjectCard
            title="COD Tools"
            subtitle="streamlined content publishing"
            dates="2022.12 - Present"
            isWide
            tags={[
              "react",
              "remix.run",
              "typescript",
              "schema",
              "prototyping",
              "product-management",
              "tailwind",
            ]}
            href="#"
            imagePlaceholderColor="#e0e0e0"
          />
        </div>
      </DisplaySection>

      {/* That's the gist of it! */}
      <DisplaySection heading="That's the gist of it!">
        <div className="flex flex-wrap gap-4">
          <Button href="/projects" variant="default" size="display" hasArrow>
            Explore more websites
          </Button>
          {/* TODO: Wire to resume PDF */}
          <Button variant="outline" size="display" hasArrow>Download Resume</Button>
        </div>
      </DisplaySection>

      {/* More than a developer */}
      <DisplaySection heading="(By the way, I'm more than just a developer.)">
        <p className="text-xl sm:text-2xl lg:text-3xl lg:leading-snug font-medium">
          Frog Caretaker, 日本語 Learner,
          {" "}
          <span className="underline decoration-2 underline-offset-4">
            Photographer
          </span>
          , Designer, Wing Tsun Practitioner, Music Collector, Animation
          Enthusiast, Gardener, Pasta & Noodle Enthusiast, Tea Lover,
          Amateur Gardener...
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button href="/about" variant="default" size="display" hasArrow>
            Biography
          </Button>
          <Button href="/blog" variant="outline" size="display" hasArrow>
            Blog
          </Button>
        </div>
      </DisplaySection>

      {/* Blue CTA */}
      <section className="bg-portfolio-blue border-t-24 border-portfolio-blue-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
            Need a website? Want to chat?
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white mt-2">
            I'm just an email away!
          </p>
        </div>
      </section>
    </>
  );
}
