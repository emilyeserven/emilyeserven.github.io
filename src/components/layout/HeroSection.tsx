import { Button } from "@/components/shad/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/shad/ui/avatar";

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Frosted glass card */}
        <div className="bg-white/90 backdrop-blur-lg border-2 border-black p-6 sm:p-8 lg:p-10 max-w-3xl">
          {/* Greeting with headshot placeholder */}
          <p className="text-lg sm:text-xl lg:text-[22px] font-semibold flex items-center gap-2 flex-wrap">
            <span>Nice to meet you! I'm</span>
            <span className="inline-flex items-center gap-1.5 bg-black text-white rounded-full pl-0 pr-3 py-0.5 text-base lg:text-lg">
              <Avatar className="size-6 lg:size-8">
                <AvatarImage src="/headshot.jpg" alt="Emily Serven" />
                <AvatarFallback className="text-xs">ES</AvatarFallback>
              </Avatar>
              Emily
            </span>
            <span>.</span>
          </p>

          {/* Tagline */}
          <h1 className="mt-4 text-2xl sm:text-3xl lg:text-[42px] lg:leading-[48px] font-semibold">
            I develop scalable and usable experiences
          </h1>
          <p className="text-xl sm:text-2xl lg:text-[32px] mt-1">
            as well as some other fun things.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          {/* TODO: Wire to resume PDF */}
          <Button variant="secondary" size="lg" hasArrow>Download Resume</Button>
          <Button href="/projects" variant="outline" size="lg" hasArrow>
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
