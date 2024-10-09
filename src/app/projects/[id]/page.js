"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // In a real application, you would fetch the project data from an API
    // For this example, we'll use mock data
    const mockProject = {
      id: parseInt(id),
      title: `Project ${id}`,
      description: "This is a detailed description of the project. It includes information about the project's goals, technologies used, and challenges overcome.",
      image: `/images/projects/${id}.png`,
      tag: ["Web", "React", "Node.js"],
      gitUrl: "https://github.com",
      previewUrl: "https://example.com",
      upvotes: 10,
      downvotes: 2,
      features: [
        "Responsive design",
        "User authentication",
        "Real-time updates",
        "Data visualization"
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS"
      ]
    };
    setProject(mockProject);
  }, [id]);

  if (!project) {
    return <div className="text-white text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <Link href="/#projects" className="flex items-center text-blue-500 hover:text-blue-400 mb-8">
        <FaArrowLeft className="mr-2" />
        Back to Projects
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <p className="text-xl mb-8">{project.description}</p>
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            {project.tag.map((tag, index) => (
              <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            <a href={project.gitUrl} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
              <FaGithub />
            </a>
            <a href={project.previewUrl} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <span className="text-2xl font-bold">{project.upvotes}</span>
            <p>Upvotes</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold">{project.downvotes}</span>
            <p>Downvotes</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;