import React from "react";
import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <section className="mt-12 md:mt-16 mx-auto max-w-2xl">
      <h2 className="text-2xl md:text-3xl font-bold dark:text-white mb-4 md:mb-8">
        Posts
      </h2>
      <ul className="w-full">
        {posts.map((post) => {
          return <ListItem key={post.id} post={post} />;
        })}
      </ul>
    </section>
  );
}
