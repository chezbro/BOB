"use client";
import React from 'react';
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import EmailSection from "./EmailSection";

const HomeContent = () => {
  return (
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <ProjectsSection />
      <EmailSection />
    </div>
  );
};

export default HomeContent;