// src/pages/Home.tsx
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types";

const Home: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.slice(0, 3)));
  }, []);

  return (
    <div>
      <Hero />
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
          Featured Projects & Affiliates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-700">
            What People Say
          </h2>
          <p className="text-lg italic max-w-3xl mx-auto">
            “Naija friend Near Foundation gives joy to everyone, not only the
            children in need but their families, volunteers, and donors.” –
            Lukman O., Donor[](https://mulikat-atoke-abati-f.onrender.com)
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
