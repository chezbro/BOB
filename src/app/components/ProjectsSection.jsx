"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Rent-A-Pup",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    upvotes: 0,
    downvotes: 0,
    userVote: null, // Add this line to track user's vote
  },
  {
    id: 2,
    title: "StripTeach",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    upvotes: 0,
    downvotes: 0,
    userVote: null, // Add this line to track user's vote
  },
  {
    id: 3,
    title: "TripShaman",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    upvotes: 0,
    downvotes: 0,
    userVote: null, // Add this line to track user's vote
  },
  {
    id: 4,
    title: "ReplyBot",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    upvotes: 0,
    downvotes: 0,
    userVote: null, // Add this line to track user's vote
  },
  {
    id: 5,
    title: "Roster",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    upvotes: 0,
    downvotes: 0,
    userVote: null, // Add this line to track user's vote
  },
  {
    id: 6,
    title: "SideKick",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    upvotes: 0,
    downvotes: 0,
    userVote: null, // Add this line to track user's vote
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [projects, setProjects] = useState(projectsData);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const handleVote = (projectId, voteType) => {
    setProjects(prevProjects =>
      prevProjects.map(project => {
        if (project.id === projectId) {
          if (project.userVote === voteType) {
            // If user clicks the same vote type, remove the vote
            return {
              ...project,
              [voteType + 's']: project[voteType + 's'] - 1,
              userVote: null
            };
          } else {
            // If user changes vote or votes for the first time
            const oppositeVote = voteType === 'upvote' ? 'downvote' : 'upvote';
            return {
              ...project,
              [voteType + 's']: project[voteType + 's'] + 1,
              [oppositeVote + 's']: project.userVote === oppositeVote ? project[oppositeVote + 's'] - 1 : project[oppositeVote + 's'],
              userVote: voteType
            };
          }
        }
        return project;
      })
    );
  };

  const filteredProjects = projects.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Explore Top Ideas
      </h2>
      <p className="text-center text-xl text-[#ADB7BE] mb-8">
        Vote for your favorite projects and help shape the future!
      </p>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              project={project}
              onVote={handleVote}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;