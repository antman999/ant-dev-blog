import Posts from "./components/Posts";
import ProfileImage from "./components/ProfileImage";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-6 mx-auto">
      <ProfileImage />
      <div className="mb-12 text-center">
        <p className="mb-3 md:mb-6 text-4xl">
          Hi, I'm&nbsp;
          <span className="whitespace-nowrap">
            <Link
              href="https://www.linkedin.com/in/anthony-mendoza9/"
              className="underline dark:decoration-teal-400 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white"
            >
              Anthony
            </Link>
            .
          </span>
        </p>
        <p className="max-w-2xl mx-auto text-md md:text-lg text-slate-700 dark:text-slate-300">
          Welcome to my personal blog/portfolio, where I write about what I'm
          working on and topics that I find interesting. Previously worked at
          Twitter, focusing on web and our design systems library.
          <span>
            {" "}
            <Link
              href="/experience"
              className="select-none text-black dark:text-white underline dark:decoration-teal-400 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white"
            >
              Want to learn More?
            </Link>
          </span>
        </p>
      </div>
      <Posts />
    </div>
  );
}
