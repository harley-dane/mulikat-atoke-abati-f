// client/src/pages/Projects.tsx
import { useState, useEffect } from "react";
import ScrollArrows from "../components/ScrollArrows";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setError("Failed to fetch projects"));
  }, []);

  return (
    <section className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        Our Projects
      </h1>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={`/donate?project=${project.id}`}
                className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Donate to this Project
              </a>
            </div>
          </div>
        ))}
      </div>
      <ScrollArrows />
    </section>
  );
};

export default Projects;
