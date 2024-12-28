import React from "react";

async function Post({ params }: { params: { id: number } }) {
  // Fetch the post data
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  let post = await response.json();

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          User ID: <span className="text-gray-800">{post.userId}</span>
        </h1>
        <p className="text-sm text-gray-500 mb-2">Post ID: {post.id}</p>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">{post.title}</h2>
        <p className="text-gray-700 leading-relaxed">{post.body}</p>
      </div>
    </div>
  );
}

export default Post;
