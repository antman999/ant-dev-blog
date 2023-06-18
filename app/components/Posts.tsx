import React from "react";
import { getBlogPostMeta } from "@/lib/posts";
import ListItem from "./ListItem";

export default async function Posts() {
  const posts = await getBlogPostMeta();

  if (!posts) {
    return <p className="mt-10 text-center">No Posts at this time.</p>;
  }
  return (
    <section className="mt-12 md:mt-16 mx-auto max-w-2xl">
      <h2 className="text-2xl md:text-3xl font-bold dark:text-white mb-4 md:mb-8">
        Posts
      </h2>
      <ul className="w-full list-none p-0">
        {posts.map((post) => {
          return <ListItem key={post.id} post={post} />;
        })}
      </ul>
    </section>
  );
}
