// DarkLightSwitch.js
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkLightSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? "☀️" : "🌙 "}
    </button>
  );
}
