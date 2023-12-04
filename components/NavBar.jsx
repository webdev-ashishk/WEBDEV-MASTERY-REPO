"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillYoutube, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RiComputerFill } from "react-icons/ri";
import DarkLightSwitch from "./DarkLightSwitcher";
const NavBar = () => {
  const [showMenu, setMenu] = useState(false);
  function toggleMenu() {
    setMenu(!showMenu);
  }
  const router = useRouter();
  const currentRoute = usePathname();
  // styles for all links
  const linkStyle = "flex items-center hover:text-yellow-600 duration-300";

  // styles for active and non-active links
  const activeStyle = linkStyle + " text-yellow-500";
  const nonActiveStyle = linkStyle + " black";
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
    <>
      <div className="flex justify-between  sticky top-0 border-b border-b-gray-500 shadow-lg">
        <div className="flex  gap-4 text-5xl m-2 ml-9 font-bold ">
          <snap className="">
            <Link href={"/"}>
              <RiComputerFill />
            </Link>
          </snap>
          <div className="sm:block lg:hidden md:hidden text-3xl mt-2">
            <DarkLightSwitch />
          </div>
          <h1 className="sm:hidden lg:block md:block font-bold">
            <Link href={"/"}>SUMAN</Link>
          </h1>
        </div>
        <nav className=" lg:block md:hidden sm:hidden flex justify-center items-center m-2">
          <ul className="sm:text-1xl flex gap-7 mx:text-1xl  md:text-3xl md:font-bold mr-8 justify-center items-center ">
            <li>
              <Link
                href="/courses"
                className={
                  currentRoute === "/courses" ? activeStyle : nonActiveStyle
                }
              >
                courses
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={
                  currentRoute === "/projects" ? activeStyle : nonActiveStyle
                }
              >
                projects
              </Link>
            </li>
            <li className="mt-3">
              <button onClick={handleYoutube}>
                <AiFillYoutube />
              </button>
            </li>
            <li className="mt-3">
              <button onClick={handleGitHub}>
                <FaGithub />
              </button>
            </li>
            <li className="mt-3">
              <button onClick={handleLinkedin}>
                <FaLinkedin />
              </button>
            </li>
            <li className="text-2xl mt-[2px]">
              <DarkLightSwitch />
            </li>
          </ul>
        </nav>
        {/* when user click on Hamburger icons  */}
        {showMenu && (
          <div className="fixed inset-x-0 top-16 flex flex-col items-center rounded-lg ">
            <ul className="w-full h-screen text-3xl font-bold text-center bg-black text-white">
              <li className="mt-2">
                <button onClick={toggleMenu}>
                  <Link href="/courses">courses</Link>
                </button>
              </li>
              <li>
                <button onClick={toggleMenu}>
                  <Link href="/projects">projects</Link>
                </button>
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
          className="sm:block md:block lg:hidden m-3 text-3xl font-bold"
        >
          {showMenu ? <IoMdClose /> : <AiOutlineMenu />}
        </button>
      </div>
      {/* <hr className="sticky top-16" /> */}
    </>
  );
};

export default NavBar;
