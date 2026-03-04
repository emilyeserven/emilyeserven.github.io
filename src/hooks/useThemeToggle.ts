import { useState, useEffect } from "react";

export function useThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof localStorage !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") return true;
      if (stored === "light") return false;
    }
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    function handleChange(e: MediaQueryListEvent) {
      if (!localStorage.getItem("theme")) {
        const next = e.matches;
        document.documentElement.classList.toggle("dark", next);
        setDark(next);
      }
    }
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // TODO: add system-default option (three-way toggle: light/dark/system)
  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return { dark, toggle };
}
