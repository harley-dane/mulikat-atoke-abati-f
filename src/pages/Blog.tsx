// client/src/pages/Blog.tsx
import { useState, useEffect } from "react";
import ScrollArrows from "../components/ScrollArrows";

interface Post {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(() => setError("Failed to fetch posts"));
  }, []);

  return (
    <section className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        Blog
      </h1>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full md:w-1/3 h-48 object-cover rounded"
            />
            <div className="md:ml-6 mt-4 md:mt-0">
              <h3 className="text-xl font-semibold text-green-700">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Posted: {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-600 mt-2">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
      <ScrollArrows />
    </section>
  );
};

export default Blog;
