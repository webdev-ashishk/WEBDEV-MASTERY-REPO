import Link from "next/link";

async function getLatestPostData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Page = async ({ params }) => {
  const data = await getLatestPostData(params.postid);
  const posts = data.result;
  console.log(posts);
  return (
    <div>
      post detail page
      <ul>
        <li>{posts.title}</li>
        <li>{posts.postDate}</li>
        <Link href={posts.videoLink} className="text-blue-400">
          Video links
        </Link>
      </ul>
    </div>
  );
};

export default Page;
