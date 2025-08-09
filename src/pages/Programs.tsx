// src/pages/Programs.tsx
import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types";

const Programs: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Programs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Programs;
