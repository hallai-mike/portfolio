import React, { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";
const key = "portfolio-theme";
function savedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(key);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export default function ThemeToggle() {
  const chosen = useRef(savedTheme() !== null);
  const [theme, setTheme] = useState<Theme>(
    () =>
      savedTheme() ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"),
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#181b19" : "#f5f3ee");
  }, [theme]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      if (!chosen.current) setTheme(preference.matches ? "dark" : "light");
    };
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    chosen.current = true;
    setTheme(next);
    try {
      localStorage.setItem(key, next);
    } catch {
      /* Still works when storage is unavailable. */
    }
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label="Dark mode"
      aria-pressed={theme === "dark"}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={toggle}
    >
      <svg
        viewBox="0 0 24 24"
        width="19"
        height="19"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {theme === "dark" ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
          </>
        ) : (
          <path d="M20.5 13.2A8.5 8.5 0 0 1 10.8 3a8.5 8.5 0 1 0 9.7 10.2Z" />
        )}
      </svg>
    </button>
  );
}
