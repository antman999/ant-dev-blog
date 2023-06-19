import React from "react";
import Link from "next/link";
import { getExperience } from "@/lib/posts";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelopeOpenText,
  FaExternalLinkAlt,
} from "react-icons/fa";
export const revalidate = 86400;

export default async function Experience() {
  const experience = await getExperience();
  return (
    <main className="selection:bg-teal-300 selection:text-black px-6 prose prose-sm md:prose-lg w-full dark:prose-invert mx-auto">
      <section>
        <h2>About Me</h2>
        {experience}
      </section>
      <div className="flex flex-col gap-2 md:flex-row md:gap-2 mt-16 prose-sm ">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/anthony-mendoza9/"
          className="flex w-full border border-neutral-200 dark:border-slate-600 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-slate-700 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <FaLinkedinIn />
            <div className="ml-3">Linkedin</div>
          </div>
          <FaExternalLinkAlt />
        </a>
        <a
          target="_blank"
          href="https://github.com/antman999"
          rel="noopener noreferrer"
          className="flex w-full border border-neutral-200 dark:border-slate-600  rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-slate-700 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <FaGithub />
            <div className="ml-3">GitHub</div>
          </div>
          <FaExternalLinkAlt />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="/Anthony-Mendoza.pdf"
          className="flex w-full border border-neutral-200 dark:border-slate-600 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-slate-700 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <FaEnvelopeOpenText />
            <div className="ml-3">CV</div>
          </div>
          <FaExternalLinkAlt />
        </a>
      </div>
    </main>
  );
}
