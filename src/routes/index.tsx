import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/layout/HeroSection";
import { TextWithCardSection } from "@/components/ui/TextWithCardSection";
import { ContentSection } from "@/components/ui/ContentSection";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArrowButton } from "@/components/ui/ArrowButton";

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
      <TextWithCardSection
        heading="I'm usually a front-end dev for JavaScript web apps."
        body="My work does skew towards ReactJS, but my foundation in vanilla JS allows me to pivot if needed."
        project={{
          title: "Lazarus AI",
          subtitle: "AI for the public sector",
          role: "software engineer",
          dates: "2025.06 - present",
          tags: ["react", "data-viz", "typescript", "dashboard"],
          href: "#",
          imagePlaceholderColor: "#f2f2f2",
        }}
      />

      {/* Full-stack frameworks + Panda5 */}
      <TextWithCardSection
        heading="Lately, I've been exploring full-stack frameworks."
        body="Being able to understand as much of the tech stack as I can has been an exciting journey, and I'm eager to continue."
        project={{
          title: "Panda5",
          subtitle: "knowledge-focused social media",
          role: "software engineer",
          dates: "2023.01 - 2023.05",
          tags: [
            "mvp",
            "react",
            "remix.run",
            "typescript",
            "prototyping",
            "schema",
            "prisma",
            "tailwind",
          ],
          href: "#",
          imagePlaceholderColor: "#e8e8e8",
        }}
      />

      {/* Skills beyond the stack */}
      <ContentSection
        heading="I have skills beyond the stack, too."
        body="As a freelancer with 12+ years of experience, I partner with clients that have little tech knowledge. I manage web projects start-to-finish, implement, and more."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="The Company of Dads"
            subtitle="community and content for lead dads"
            dates="2022.03 - Present"
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
      </ContentSection>

      {/* That's the gist of it! */}
      <ContentSection heading="That's the gist of it!">
        <div className="flex flex-wrap gap-4">
          <ArrowButton href="/projects" variant="blue">
            Explore more websites
          </ArrowButton>
          <ArrowButton variant="outline">Download Resume</ArrowButton>
        </div>
      </ContentSection>

      {/* More than a developer */}
      <ContentSection heading="(By the way, I'm more than just a developer.)">
        <p className="text-xl sm:text-2xl lg:text-[32px] lg:leading-[1.4] font-medium">
          Frog Caretaker, 日本語 Learner,
          {" "}
          <span className="underline decoration-2 underline-offset-4">
            Photographer
          </span>
          , Designer, Wing Tsun Practitioner, Music Collector, Animation
          Enthusiast, Gardener, Pasta &amp; Noodle Enthusiast, Tea Lover,
          Amateur Gardener...
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <ArrowButton href="/about" variant="blue">
            Biography
          </ArrowButton>
          <ArrowButton href="/blog" variant="outline">
            Blog
          </ArrowButton>
        </div>
      </ContentSection>

      {/* Blue CTA */}
      <section className="bg-portfolio-blue border-t-[24px] border-portfolio-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
            Need a website? Want to chat?
          </h2>
          <p className="text-xl sm:text-2xl lg:text-[32px] font-medium text-white mt-2">
            I'm just an email away!
          </p>
        </div>
      </section>
    </>
  );
}
