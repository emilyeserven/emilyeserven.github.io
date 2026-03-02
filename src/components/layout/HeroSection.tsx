import { Button } from "@/components/shad/ui/button";
import { AvatarPill } from "@/components/ui/AvatarPill";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b-4 border-black">
      {/* Background placeholder — geometric pattern area */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 opacity-40" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,0,0,0.15) 40px, rgba(0,0,0,0.15) 42px), repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(0,0,0,0.15) 40px, rgba(0,0,0,0.15) 42px)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Frosted glass card */}
        <div className="bg-white/90 backdrop-blur-lg border-2 border-black px-4 py-2 sm:p-6 max-w-3xl">
          {/* Greeting with headshot placeholder */}
          <p className="text-lg sm:text-xl lg:text-xl font-semibold flex items-center flex-wrap">
            <span>Nice to meet you! I'm</span>
            <AvatarPill src="/headshot.jpg" alt="Emily Serven" fallback="ES" name="Emily" className="ml-2" />
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
        <div className="flex flex-wrap gap-4 mt-6">
          {/* TODO: Wire to resume PDF */}
          <Button variant="secondary" size="display" hasArrow>Download Resume</Button>
          <Button href="/projects" variant="outline" size="display" hasArrow>
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
