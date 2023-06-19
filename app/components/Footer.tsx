import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto mt-24 mb-4 text-center">
      <p className="text-sm md:text-lg text-slate-700 dark:text-slate-300">
        {" "}
        Built with ❤️ by{" "}
        <Link
          href="https://www.linkedin.com/in/anthony-mendoza9/"
          className="underline dark:hover:text-teal-300"
        >
          Anthony Mendoza
        </Link>
      </p>
    </footer>
  );
}
