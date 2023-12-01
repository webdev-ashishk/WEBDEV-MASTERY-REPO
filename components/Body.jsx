"use client";
import Image from "next/image";
import Link from "next/link";
import LatestPost from "../app/latestPost/page";

const Body = () => {
  return (
    <main>
      {/* hero section  */}
      <div className="flex justify-center items-center">
        <Image
          src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={600}
          height={300}
          alt="post-image"
          className="rounded-t-lg"
        ></Image>
      </div>
      {/* important links  */}
      <div className="">
        <h1 className="text-3xl font-bold m-5">Important Links</h1>
        <ul className="flex text-4xl justify-center gap-8 flex-wrap sm:gap-4">
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
        <div className="flex flex-wrap m-1 gap-3 justify-center items-center">
          <LatestPost />
        </div>
      </div>
    </main>
  );
};

export default Body;
