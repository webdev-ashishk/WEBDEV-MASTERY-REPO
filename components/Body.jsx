"use client";
import Link from "next/link";
import LatestPost from "./LatestPost";

const Body = () => {
  return (
    <main>
      {/* important links  */}
      <div className="border-2 border-solid border-red-500">
        <h1 className="text-3xl font-bold m-5">Important Links</h1>
        <ul className="flex text-4xl justify-center gap-8 sm:flex-col sm:gap-3 md:flex-row ">
          <li className="m-2">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2"
            >
              <Link href={"/courses"}>Course Video Link</Link>
            </button>
          </li>
          <li className="m-2">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2"
            >
              <Link href={"/projects"}>Projects Video Link</Link>
            </button>
          </li>
        </ul>
      </div>
      {/* latest post  */}
      <div>
        <h1 className="text-3xl font-bold m-5">Latest Posts</h1>
        <div className="border-2 flex flex-wrap m-1 gap-3">
          <LatestPost />
          <LatestPost />
          <LatestPost />
          <LatestPost />
          <LatestPost />
          <LatestPost />
        </div>
      </div>
    </main>
  );
};

export default Body;
