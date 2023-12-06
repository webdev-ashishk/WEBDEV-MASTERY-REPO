"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";
const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="flex justify-center flex-col items-center mt-5">
        <h1 className="text-4xl top-5 font-bold mb-4">Projects 🎓 </h1>
        <p className="mb-9 text-2xl">
          List of all Concept Videos here (यहां सभी कॉन्सेप्ट वीडियो की सूची है)
        </p>
        {/* HTML+CSS+JS PROJECT */}
        <h1 className="font-bold text-3xl">Web Design with HTML+CSS+JS</h1>
        <p className="m-4">
          #1 Responsive Image Gallery With HTML CSS JS | How To Create Image
          Gallery In JavaScript
          <Link
            href={"https://youtu.be/YjbJ0XIRJfQ"}
            className="ml-2 text-blue-400 font-bold"
          >
            Video Link
          </Link>
        </p>
        {/* MINI REACT JS PRJECT  */}
        <h1 className="font-bold text-3xl capitalize">MINI REACT JS PROJECT</h1>
        <p className="m-1">
          #1 React To Do List CRUD Application In HIndi
          <Link
            href={"https://youtu.be/l_O16Ld28JA"}
            className="ml-2 text-blue-400 font-bold"
          >
            Video Link
          </Link>
        </p>
        <p className="">
          #2 React Firebase Authentication Project || React Authentication With
          Firebase And Routing in Hindi
          <Link
            href={"https://youtu.be/qOrlnUsfOZI"}
            className="ml-2 text-blue-400 font-bold"
          >
            Video Link
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Projects;
