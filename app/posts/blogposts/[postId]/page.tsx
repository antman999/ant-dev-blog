import { getBlogPostMeta, getPostByName } from "@/lib/posts";
import getFormattedDate from "@/lib/getFormattedDate";
import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";
import NotFound from "./not-found";
import "highlight.js/styles/github-dark-dimmed.css";

export const revalidate = 1;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getBlogPostMeta();

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`/blogposts/${postId}.mdx`);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`/blogposts/${postId}.mdx`);
  if (!post) {
    notFound();
    return null;
  }

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => {
    return (
      <Link key={i} href={`/tags/${tag}`}>
        {tag}
      </Link>
    );
  });

  return (
    <main className="selection:bg-teal-300 selection:text-black px-6 prose prose-lg w-full dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{meta.title}</h1>
      <p className="mt-0 text-sm">{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related Posts:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
      </section>
      <p className="select-none mb-10">
        <Link href="/">← Back to home</Link>
      </p>
    </main>
  );
}
