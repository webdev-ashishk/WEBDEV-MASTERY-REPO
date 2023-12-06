"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";
const Courses = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div>
      <div
        data-aos="fade-up"
        className="flex justify-center flex-col items-center mt-5 sm:mx-5"
      >
        <h1 className="text-4xl top-5 font-bold mb-4">Courses 🎓</h1>
        <p className="mb-9 text-2xl">
          List of all Concept Videos here (यहां सभी कॉन्सेप्ट वीडियो की सूची है)
        </p>
        <h1 className="font-bold text-3xl">Crash Courses in Hindi</h1>
        <p className="mt-4">
          #1 HTML Tutorial For Beginners 2023 || HTML Tutorial In Hindi ||
          Complete HTML In One Video In Hindi
          <Link
            href={"https://www.youtube.com/watch?v=UNK9VoU5HFs"}
            className="ml-2 text-blue-400 font-bold"
          >
            Video Link
          </Link>
        </p>
        <p className="mt-4">
          #2 CSS Flexbox Tutorial For Beginners in Hindi || Flexbox in One Shot
          || Flexbox with project
          <Link
            href={"https://youtu.be/K4U7NE-yQss"}
            className="ml-2 text-blue-400 font-bold"
          >
            Video Link
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Courses;
