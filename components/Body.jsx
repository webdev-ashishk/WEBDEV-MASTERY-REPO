"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import LatestPost from "../app/latestPost/page";
const Body = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <main>
      {/* hero section  */}
      <div
        data-aos="zoom-in-down"
        className="flex justify-center items-center w-full h-80 relative bg-gradient-to-tl from-purple-900 to green-700 -z-10 "
      >
        <Image
          src="/hero22.gif"
          // src="/bg.jpg"
          width={600}
          height={300}
          alt="post-image"
          className="h-full w-full object-cover absolute mix-blend-overlay blur-sm	"
        ></Image>
        <div className="font-bold text-3xl p-2 w-full flex flex-col justify-center items-center">
          <h1 className="text-white md:text-4xl sm:text-2xl">
            <strong className="text-yellow-400 font-extrabold sm:text-3xl md:text-4xl lg:text-6xl mr-2">
              Developer
            </strong>
            Courses in Hindi
          </h1>
          <i className="text-blue-200 md:text-3xl sm:text-[16px]">
            &quot; Your best teacher is your last mistake&quot;
          </i>
        </div>
      </div>
      {/* important links  */}
      <div>
        <h1 className="text-3xl font-bold m-5">Important Links 👇 </h1>
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
        <h1 className="text-3xl font-bold m-5">Latest Posts 😍</h1>
        <div className="flex flex-wrap m-1 gap-3 justify-center items-center">
          <LatestPost />
        </div>
      </div>
    </main>
  );
};

export default Body;
