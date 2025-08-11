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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        if (!apiUrl) {
          throw new Error(
            "VITE_API_URL is not defined in environment variables"
          );
        }
        const response = await fetch(`${apiUrl}/api/posts`);
        if (!response.ok) {
          throw new Error(
            `HTTP error! Status: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        setPosts(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Fetch error:", err);
          setError(
            err.message.includes("Failed to fetch")
              ? "Unable to connect to the server. Please check if the backend is running."
              : err.message
          );
        } else {
          console.error("Fetch error:", err);
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        Blog
      </h1>
      {isLoading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      {!isLoading && posts.length === 0 && !error && (
        <p className="text-center">No posts found.</p>
      )}
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
              onError={(e) => {
                console.error(`Failed to load image: ${post.image}`);
                e.currentTarget.src = "https://via.placeholder.com/150";
              }}
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
