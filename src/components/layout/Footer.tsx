import { Link } from "@tanstack/react-router";
import { SiGithub, SiInstagram, Si500px } from "@icons-pack/react-simple-icons";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/shad/ui/button";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/emilyeserven/", icon: SiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emilyserven/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/emilyserven/", icon: SiInstagram },
  { label: "500px", href: "https://500px.com/emilyeserven", icon: Si500px },
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-6">
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
                  className="size-10 lg:size-13 bg-white text-black flex items-center justify-center hover:opacity-70 transition-opacity"
                >
                  <Icon className="size-5 lg:size-7" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: nav + attribution */}
          <div className="flex flex-col flex-1 items-start md:items-end gap-3 md:gap-0 md:justify-between">
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
            <p className="text-lg lg:text-2xl leading-none font-semibold flex items-center gap-2">
              <img src="/su-logo-white.svg" alt="" className="h-5 lg:h-6" />
              Site dev & design by Emily Serven
            </p>
            {/* Easter egg quote */}
            <p className="text-sm text-white/60">{quote}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
