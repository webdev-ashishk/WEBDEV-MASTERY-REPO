import Image from "next/image";
import Link from "next/link";

async function getLatestPostData() {
  const res = await fetch("http://localhost:3000/api/posts");
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
          className="hover:scale-y-105 rounded-lg  m-4 w-[200px] pt-1 border-2 hover:bg-gradient-to-r from-purple-400"
        >
          <Link href={`/latestPost/${post.id}`}>
            <Image
              src={post.image}
              width={200}
              height={200}
              alt="post-image"
            ></Image>
            <h1>{post.heading}</h1>
            <p>{post.postDate}</p>
          </Link>
        </div>
      ))}
    </main>
  );
};

export default LatestPost;
