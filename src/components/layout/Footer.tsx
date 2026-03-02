import { Link } from "@tanstack/react-router";
import { ArrowButton } from "@/components/ui/ArrowButton";

const footerLinks = [
  { label: "About", to: "/about" },
  { label: "Web Dev", to: "/projects" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
] as const;

const quotes = [
  "\"Little quote to be randomly selected on render as an easter egg\" - Attribution",
];

// Selected at module load time to avoid impure render calls
const quote = quotes[Math.floor(Math.random() * quotes.length)];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left: CTA + social placeholders */}
          <div className="flex flex-col gap-4">
            <ArrowButton href="/contact" variant="filled" className="border-white">
              Contact Me
            </ArrowButton>
            <div className="flex gap-3">
              {[1, 2, 3, 4].map(i => (
                <div
                  key={i}
                  className="size-10 lg:size-[52px] bg-white"
                  aria-label={`Social link ${i}`}
                />
              ))}
            </div>
          </div>

          {/* Right: nav + attribution */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <nav className="flex gap-6 lg:gap-8">
              {footerLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-base lg:text-xl font-semibold hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-lg lg:text-[28px] font-semibold">
              Site dev &amp; design by Emily Serven
            </p>
          </div>
        </div>

        {/* Easter egg quote */}
        <p className="text-sm text-white/60 mt-6 text-right">{quote}</p>
      </div>
    </footer>
  );
}
