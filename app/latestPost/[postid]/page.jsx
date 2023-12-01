import Link from "next/link";

async function getLatestPostData(id) {
  const apiUrl = process.env.API_URL || "http://localhost:3000";
  const res = await fetch(`${apiUrl}/api/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Page = async ({ params }) => {
  const data = await getLatestPostData(params.postid);
  const _posts = data.result;
  const posts = _posts.morePost;
  console.log(_posts.morePost);
  return (
    <div className="flex flex-col items-center justify-center p-2 m-5 border-2 rounded-lg">
      post detail page
      {posts.map((post) => {
        return (
          <div
            key={post._id}
            className="border-2 border-solid border-green-600 flex gap-3 m-5 p-4 rounded-lg flex-wrap w-[800px]"
          >
            <ul>
              <li>{post.title}</li>
              <li>{post.postDate}</li>
              <Link href={post.videoLink} className="text-blue-400">
                Video links
              </Link>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
