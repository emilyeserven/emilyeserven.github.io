import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shad/ui/button";
import { useThemeToggle } from "@/hooks/useThemeToggle";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
] as const;

function ThemeToggleButton({
  dark,
  onToggle,
  iconClass,
}: {
  dark: boolean;
  onToggle: () => void;
  iconClass: string;
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun className={iconClass} /> : <Moon className={iconClass} />}
    </Button>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark, toggle: toggleTheme } = useThemeToggle();
  const location = useLocation();
  const [prevPathname, setPrevPathname] = useState(location.pathname);

  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b-4 border-black dark:border-white">
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
              className="text-sm lg:text-lg font-semibold hover:underline underline-offset-4 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggleButton dark={dark} onToggle={toggleTheme} iconClass="size-5 lg:size-6" />
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggleButton dark={dark} onToggle={toggleTheme} iconClass="size-5" />
          <button
            className="p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      <nav
        id="mobile-nav"
        className={cn(
          "md:hidden border-t border-black/10 dark:border-white/10 bg-white/95 dark:bg-black/95 backdrop-blur-md overflow-hidden transition-all duration-200",
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
