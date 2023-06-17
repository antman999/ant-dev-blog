"use client";
import React from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "../Icons/Sun";
import { MoonIcon } from "../Icons/Moon";

export default function ToggleButton() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=""
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
