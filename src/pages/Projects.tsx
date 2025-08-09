// client/src/pages/Projects.tsx
import { useState, useEffect } from "react";

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/projects`
        );
        if (!response.ok) throw new Error("Failed to fetch projects");
        const data = await response.json();
        setProjects(data);
      } catch (err: any) {
        setError(err.message);
        console.error("Fetch error:", err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
        Our Projects
      </h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="bg-white p-4 shadow-md rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
