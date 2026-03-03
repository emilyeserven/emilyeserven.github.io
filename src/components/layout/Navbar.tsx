import { Link, useLocation } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const [prevPathname, setPrevPathname] = useState(location.pathname);

  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-4 border-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Left: name + title */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-2xl lg:text-4xl font-bold">Emily Serven</span>
          <span className="text-base lg:text-2xl">Senior Software Engineer</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-base lg:text-xl font-semibold hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <Menu className="size-6" />
        </button>
      </div>

      {/* Mobile nav dropdown */}
      <nav
        className={cn(
          "md:hidden border-t border-black/10 bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-200",
          mobileOpen ? "max-h-64 py-4" : "max-h-0",
        )}
        inert={!mobileOpen ? true : undefined}
      >
        <div className="max-w-5xl mx-auto px-4 flex flex-col gap-3">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-lg font-semibold py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
