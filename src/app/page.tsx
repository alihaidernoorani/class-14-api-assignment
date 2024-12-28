import Link from "next/link";

interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string
}

export default async function Home() {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let posts = await response.json();

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">All Posts</h1>
      <ul className="space-y-4">
        {posts.map((post: PostType) => {
          return (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <li className="p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-blue-50">
                <span className="font-bold text-gray-800">{post.id}.</span>{" "}
                <span className="text-gray-700">{post.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
