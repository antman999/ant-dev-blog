import Posts from "./components/Posts";
import ProfileImage from "./components/ProfileImage";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" max-w-2xl mx-auto px-6">
      <ProfileImage />
      <div className="mb-12 text-center">
        <p className="mb-2 md:mb-5 text-2xl md:text-3xl">
          Hi, I'm&nbsp;
          <span className="whitespace-nowrap">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/anthony-mendoza9/"
              className="underline dark:decoration-teal-400 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white"
            >
              Anthony
            </a>
            .
          </span>
        </p>
        <p className="max-w-2xl mx-auto text-md md:text-lg text-slate-700 dark:text-slate-300">
          Welcome to my personal blog/portfolio, where I write about what I'm
          working on and topics that I find interesting.
        </p>
        <p className="text-md md:text-lg mt-2">
          <Link
            href="/experience"
            className="select-none text-black dark:text-white underline dark:decoration-teal-400 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white"
          >
            Want to learn more about me?
          </Link>
        </p>
      </div>
      <Posts />
    </div>
  );
}
