// client/src/pages/Home.tsx
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types/index";

const Home: React.FC = () => {
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
        setProjects(data.slice(0, 3));
      } catch (err: unknown) {
        // Changed from any to unknown
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
    <div>
      <Hero />
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
          Featured Projects & Affiliates
        </h2>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {projects.length === 0 && !error && (
          <p className="text-center">No projects found.</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </section>
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-700">
            What People Say
          </h2>
          <p className="text-lg italic max-w-3xl mx-auto">
            “Mulikat Atoke Abati Foundation Near Foundation gives joy to
            everyone, not only the children in need but their families,
            volunteers, and donors.” – Lukman O., Donor
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
