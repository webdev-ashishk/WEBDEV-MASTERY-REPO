"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillYoutube, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const NavBar = () => {
  const [showMenu, setMenu] = useState(false);
  function toggleMenu() {
    setMenu(!showMenu);
  }
  const router = useRouter();

  const handleYoutube = () => {
    window.open("https://www.youtube.com/@SumanMalakar18/featured", "_blank");
  };
  const handleGitHub = () => {
    window.open("https://github.com/sumanmalakar", "_blank");
  };
  const handleLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/suman-malakar/?originalSubdomain=in",
      "_blank"
    );
  };
  return (
    <div className="sticky top-0 flex justify-between mx-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
      <div className="flex gap-4 m-2 text-5xl font-bold ">
        <snap className="">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
            alt="logo"
            height={50}
            width={50}
          />
        </snap>
        <h1 className="font-bold sm:hidden lg:block md:block ">
          <Link href={"/"}>SUMAN</Link>
        </h1>
      </div>
      <nav className="flex items-center justify-center m-2 lg:block md:hidden sm:hidden">
        <ul className="flex sm:text-1xl gap-7 mx:text-1xl md:text-3xl md:font-bold">
          <li>
            <Link href="/courses">courses</Link>
          </li>
          <li>
            <Link href="/projects">projects</Link>
          </li>
          <li>
            <button onClick={handleYoutube}>
              <AiFillYoutube />
            </button>
          </li>
          <li>
            <button onClick={handleGitHub}>
              <FaGithub />
            </button>
          </li>
          <li>
            <button onClick={handleLinkedin}>
              <FaLinkedin />
            </button>
          </li>
        </ul>
      </nav>
      {/* when use click to menu button below div appear */}
      {showMenu && (
        <div className="fixed inset-x-0 flex flex-col items-center h-screen m-2 rounded-lg top-13">
          <ul className="w-full text-2xl font-bold text-center bg-black border-2">
            <li className="mt-2">
              <Link href="/courses">courses</Link>
            </li>
            <li>
              <Link href="/projects">projects</Link>
            </li>
            <ul className="flex justify-center gap-5 m-4">
              <li>
                <button onClick={handleYoutube}>
                  <AiFillYoutube />
                </button>
              </li>
              <li>
                <button onClick={handleGitHub}>
                  <FaGithub />
                </button>
              </li>
              <li>
                <button onClick={handleLinkedin}>
                  <FaLinkedin />
                </button>
              </li>
            </ul>
          </ul>
        </div>
      )}
      <button
        onClick={toggleMenu}
        className="m-3 text-3xl font-bold sm:block md:block lg:hidden"
      >
        {showMenu ? <IoMdClose /> : <AiOutlineMenu />}
      </button>
    </div>
  );
};

export default NavBar;
