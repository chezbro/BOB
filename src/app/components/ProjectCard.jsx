import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const ProjectCard = ({ project, onVote }) => {
  return (
    <div className="relative">
      <Link href={`/projects/${project.id}`}>
        <div className="h-52 md:h-72 rounded-t-xl relative group cursor-pointer">
          <div
            className="h-full w-full bg-cover bg-center rounded-t-xl"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <img src={project.image} alt={`${project.title} project thumbnail`} className="hidden" />
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
              <div className="text-white">Click to view details</div>
            </div>
          </div>
        </div>
      </Link>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
        <p className="text-[#ADB7BE]">{project.description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-4">
            <button
              className={`flex items-center space-x-1 ${
                project.userVote === "upvote" ? "text-green-500" : "text-gray-400"
              }`}
              onClick={() => onVote(project.id, "upvote")}
            >
              <FaThumbsUp />
              <span>{project.upvotes}</span>
            </button>
            <button
              className={`flex items-center space-x-1 ${
                project.userVote === "downvote" ? "text-red-500" : "text-gray-400"
              }`}
              onClick={() => onVote(project.id, "downvote")}
            >
              <FaThumbsDown />
              <span>{project.downvotes}</span>
            </button>
          </div>
          <div className="flex space-x-2">
            <Link href={project.gitUrl} target="_blank" rel="noopener noreferrer">
              <CodeBracketIcon className="h-6 w-6 text-white" />
            </Link>
            <Link href={project.previewUrl} target="_blank" rel="noopener noreferrer">
              <EyeIcon className="h-6 w-6 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
