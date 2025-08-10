// src/pages/Programs.tsx
import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types/index";

const Programs: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log(
          "Fetching from:",
          `${import.meta.env.VITE_API_URL}/api/projects`
        );
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/projects`
        );
        if (!response.ok) {
          throw new Error(
            `HTTP error! Status: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        setProjects(data);
      } catch (err: unknown) {
        // Updated to use unknown, see below
        if (err instanceof Error) {
          setError(err.message);
          console.error("Fetch error:", err);
        } else {
          setError("An unknown error occurred");
          console.error("Fetch error:", err);
        }
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
        Our Projects
      </h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      {projects.length === 0 && !error && (
        <p className="text-center">No projects found.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} /> // Changed to project._id
        ))}
      </div>
    </div>
  );
};

export default Programs;
