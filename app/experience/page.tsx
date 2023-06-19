import React from "react";
import Link from "next/link";
import { getExperience } from "@/lib/posts";
export const revalidate = 86400;

export default async function Experience() {
  const experience = await getExperience();
  return (
    <main className="selection:bg-teal-300 prose-zinc selection:text-black px-6 prose prose-md w-full dark:prose-invert mx-auto">
      <section>{experience}</section>
      <div className="mt-12">
        <Link href="/"> ← Back to Home</Link>
      </div>
    </main>
  );
}
