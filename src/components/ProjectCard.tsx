// src/components/ProjectCard.tsx
import type { Project } from "../types";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-green-700">
          {project.title}
        </h3>
        <p className="text-gray-600">{project.description}</p>
        <div className="flex space-x-4 mt-4">
          <a href={project.link} className="text-blue-600 hover:underline">
            Learn More
          </a>
          <Link
            to={`/donate?project=${project._id}`} // Changed from project.id to project._id
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Donate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
