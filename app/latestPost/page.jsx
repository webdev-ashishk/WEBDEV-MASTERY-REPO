import Image from "next/image";
import Link from "next/link";

async function getLatestPostData() {
  const apiUrl = process.env.API_URL || "http://localhost:3000";
  const res = await fetch(`${apiUrl}/api/posts`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const LatestPost = async () => {
  const posts = await getLatestPostData();
  console.log(posts);
  return (
    <main className="flex flex-wrap justify-center items-center">
      {posts.map((post) => (
        <div
          key={post.id}
          className="hover:scale-y-105 rounded-lg  m-4 w-[300px]  border-2 hover:bg-gradient-to-r from-purple-400"
        >
          <Link href={`/latestPost/${post.id}`}>
            <Image
              src={post.image}
              width={300}
              height={300}
              alt="post-image"
              className="rounded-t-lg"
            ></Image>
            <h1 className="text-center">{post.heading}</h1>
          </Link>
        </div>
      ))}
    </main>
  );
};

export default LatestPost;
