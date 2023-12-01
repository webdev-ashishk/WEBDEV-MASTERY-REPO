import Link from "next/link";
import LatestPost from "../app/latestPost/page";

const Body = () => {
  return (
    <main>
      {/* important links  */}
      <div className="">
        <h1 className="m-5 text-3xl font-bold">Important Links</h1>
        <ul className="flex flex-wrap justify-center gap-8 text-4xl sm:gap-4">
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
        <h1 className="m-5 text-3xl font-bold">Latest Posts</h1>
        <div className="flex flex-wrap items-center justify-center gap-3 m-1">
          <LatestPost />
        </div>
      </div>
    </main>
  );
};

export default Body;
