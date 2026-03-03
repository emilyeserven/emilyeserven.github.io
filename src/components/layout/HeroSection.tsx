import { Button } from "@/components/shad/ui/button";
import { LinkButton } from "@/components/ui/LinkButton";
import { AvatarPill } from "@/components/ui/AvatarPill";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b-4 border-black dark:border-white">
      {/* Background image */}
      <img
        src="/hero-bg.png"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pb-32 sm:pb-36 lg:pb-44">
        {/* Frosted glass card */}
        <div className="bg-white/90 dark:bg-black/80 backdrop-blur-lg border-2 border-black dark:border-white px-4 py-2 sm:p-6 max-w-3xl">
          {/* Greeting with headshot placeholder */}
          <p className="text-xl sm:text-2xl lg:text-3xl flex items-center flex-wrap">
            <span>Nice to meet you! I'm</span>
            <AvatarPill src="/headshot.png" alt="Emily Serven" fallback="ES" name="Emily" className="ml-2" />
            <span>.</span>
          </p>

          {/* Tagline */}
          <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl lg:leading-12 font-semibold">
            I develop scalable and usable experiences
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mt-1">
            as well as some other fun things.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap -mt-0.5">
          <Button asChild variant="secondary" size="display">
            <a href="/assets/emily-serven-resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
              <span aria-hidden="true" className="no-underline">→</span>
            </a>
          </Button>
          <LinkButton to="/projects" variant="outline" size="display" hasArrow className="-ml-0.5 hover:border-l-white">
            View Projects
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
