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

      {/* Front-end dev + Lazarus AI */}
      <TwoColumnSection>
        <div>
          <h2 className="section-heading">I'm usually a front-end dev for JavaScript web apps.</h2>
          <p className="section-body mt-4">My work does skew towards ReactJS, but my foundation in vanilla JS allows me to pivot if needed.</p>
        </div>
        <ProjectCard
          title="Lazarus AI"
          subtitle="AI for the public sector"
          role="software engineer"
          dates="2025.06 - present"
          tags={["react", "data-viz", "typescript", "dashboard"]}
          href="#"
          imageSrc="/projects/lazarus-ai.png"
          imageFit="contain"
          imagePlaceholderColor="#f2f2f2"
        />
      </TwoColumnSection>

      {/* Full-stack frameworks + Panda5 */}
      <TwoColumnSection>
        <div>
          <h2 className="section-heading">Lately, I've been exploring full-stack frameworks.</h2>
          <p className="section-body mt-4">Being able to understand as much of the tech stack as I can has been an exciting journey, and I'm eager to continue.</p>
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
          imageSrc="/projects/panda5.png"
          imageFit="contain"
          imagePlaceholderColor="#ffffff"
        />
      </TwoColumnSection>

      {/* Skills beyond the stack */}
      <DisplaySection>
        <h2 className="section-heading">I have skills beyond the stack, too.</h2>
        <p className="section-body">As a freelancer with 12+ years of experience, I partner with clients that have little tech knowledge. I manage web projects start-to-finish, implement, and more.</p>
        <div className="mt-4 lg:mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
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
            imageSrc="/projects/company-of-dads.png"
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
            imageSrc="/projects/cod-tools.png"
          />
        </div>
      </DisplaySection>

      {/* That's the gist of it! */}
      <DisplaySection>
        <h2 className="section-heading">That's the gist of it!</h2>
        <div className="mt-4 lg:mt-6 flex flex-wrap gap-4">
          <Button href="/projects" variant="default" size="display" hasArrow>
            Explore more websites
          </Button>
          {/* TODO: Wire to resume PDF */}
          <Button variant="outline" size="display" hasArrow>Download Resume</Button>
        </div>
      </DisplaySection>

      {/* More than a developer */}
      <DisplaySection>
        <h2 className="section-heading">(By the way, I'm more than just a developer.)</h2>
        <p className="section-body">
          Frog Caretaker, 日本語 Learner,
          {" "}
          <span className="underline decoration-2 underline-offset-4">
            Photographer
          </span>
          , Designer, Wing Tsun Practitioner, Music Collector, Animation
          Enthusiast, Gardener, Pasta & Noodle Enthusiast, Tea Lover,
          Amateur Gardener...
        </p>
        <div className="mt-4 lg:mt-6 flex flex-wrap gap-4">
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
          <h2 className="section-heading text-white">Need a website? Want to chat?</h2>
          <p className="text-lg sm:text-xl lg:text-2xl mt-2 font-medium text-white"><a href="mailto:emily@emilyserven.net" className="underline underline-offset-4 hover:opacity-70 transition-opacity">I'm just an email away!</a></p>
        </div>
      </section>
    </>
  );
}
