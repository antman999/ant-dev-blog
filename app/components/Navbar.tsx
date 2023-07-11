import React from "react";
import Link from "next/link";
import ToggleButton from "./ToggleButton";

export default function Navbar() {
  return (
    <nav className="p-4 sticky top-0 z-10 backdrop-opacity-100 backdrop-filter backdrop-blur bg-white/60 dark:bg-[#0C1C2E]/60">
      <div className="prose prose-lg mx-auto flex items-center justify-between sm:flex-row dark:prose-invert">
        <Link href="/" className="no-underline">
          {"<A />"}
        </Link>
        <div>
          <ToggleButton />
        </div>
      </div>
    </nav>
  );
}
