import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/shad/ui/button";

function Icon500px({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7.439 9.01A2.994 2.994 0 0 0 4.449 12a2.994 2.994 0 0 0 2.99 2.99 2.994 2.994 0 0 0 2.99-2.99 2.994 2.994 0 0 0-2.99-2.99m0 4.48A1.494 1.494 0 0 1 5.949 12c0-.824.666-1.49 1.49-1.49s1.49.666 1.49 1.49-.666 1.49-1.49 1.49m9.494-4.48A2.994 2.994 0 0 0 13.943 12a2.994 2.994 0 0 0 2.99 2.99 2.994 2.994 0 0 0 2.99-2.99 2.994 2.994 0 0 0-2.99-2.99m0 4.48A1.494 1.494 0 0 1 15.443 12c0-.824.666-1.49 1.49-1.49s1.49.666 1.49 1.49-.666 1.49-1.49 1.49M11.262 9.541a.397.397 0 0 0-.299-.131h-.39c-.109 0-.22.047-.299.131a4.36 4.36 0 0 1-3.236 1.473.386.386 0 0 0-.283.122.39.39 0 0 0-.116.286v.156c0 .107.042.21.116.286a.386.386 0 0 0 .283.122c.76 0 1.484-.2 2.128-.553v3.025a.4.4 0 0 0 .399.399h.156a.4.4 0 0 0 .399-.399V9.84a.404.404 0 0 0-.058-.199z" />
    </svg>
  );
}

const socialLinks = [
  { label: "GitHub", href: "https://github.com/emilyeserven/", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emilyserven/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/emilyserven/", icon: Instagram },
  { label: "500px", href: "https://500px.com/emilyeserven", icon: Icon500px },
] as const;

const footerLinks = [
  { label: "About", to: "/about" },
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
            <Button href="/contact" variant="secondary" size="lg" hasArrow className="border-white">
              Contact Me
            </Button>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="size-10 lg:size-[52px] bg-white text-black flex items-center justify-center hover:opacity-70 transition-opacity"
                >
                  <Icon className="size-5 lg:size-7" />
                </a>
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
              Site dev & design by Emily Serven
            </p>
          </div>
        </div>

        {/* Easter egg quote */}
        <p className="text-sm text-white/60 mt-6 text-right">{quote}</p>
      </div>
    </footer>
  );
}
