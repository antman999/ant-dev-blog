import React from "react";
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: MetaBlog;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="mt-4 text-lg md:text-xl dark:text-white/90 flex justify-between">
      <Link
        className="underline hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white text-left block"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <p className="text-sm ml-2 mt-1 text-right whitespace-nowrap">
        {formattedDate}
      </p>
    </li>
  );
}
