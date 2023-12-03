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
    <div className="m-5 flex justify-center items-center flex-col flex-wrap">
      post detail page
      {posts.map((post) => {
        return (
          <div key={post._id} className="my-12 flex flex-wrap">
            <ul className="flex flex-col justify-center items-center">
              <li className="my-2 font-bold text-2xl text-gray-400">
                {post.title}
              </li>
              <li className="my-2 font-bold bg-green-400 p-2 rounded-lg bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 text-sm px-5 py-2.5 text-center me-2 mb-2 text-black">
                {post.postDate}
              </li>
              <iframe
                className="w-full md:w-3/4 lg:w-1/2 h-48 md:h-64 lg:h-96 mx-auto md:mx-0"
                src={post.src}
                title={post.ftitle}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
