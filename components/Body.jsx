"use client";
import Image from "next/image";
import Link from "next/link";
import LatestPost from "../app/latestPost/page";

const Body = () => {
  return (
    <main>
      {/* hero section  */}
      <div className="flex justify-center items-center w-full h-96 relative bg-gradient-to-tl from-purple-900 to green-700 ">
        <Image
          // src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          src="/hero.jpg"
          width={600}
          height={300}
          alt="post-image"
          className="h-full w-full object-cover absolute mix-blend-overlay"
        ></Image>
        <div className="font-bold text-3xl p-2 w-full flex flex-col justify-center items-center">
          <h1 className="text-green-500 md:text-6xl sm:text-2xl">
            Welcome to Awesome place@
          </h1>
          <h2 className="text-blue-500 md:text-3xl sm:text-1xl">
            wow wow wo wo wow owo
          </h2>
        </div>
      </div>
      {/* important links  */}
      <div className="">
        <h1 className="text-3xl font-bold m-5">Important Links</h1>
        <ul className="flex justify-center gap-8 flex-wrap sm:gap-1">
          <li className="m-2">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2"
            >
              <Link href={"/courses"} className="sm:text-1xl md:text-3xl">
                Course Video Link
              </Link>
            </button>
          </li>
          <li className="m-2">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2"
            >
              <Link href={"/projects"} className="sm:text-1xl md:text-3xl">
                Projects Video Link
              </Link>
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
