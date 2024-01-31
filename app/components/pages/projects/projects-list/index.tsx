/* eslint-disable prettier/prettier */
import React from "react";
import ProjectCard from "./project-card";
import Link from "next/link";

const ProjectsList = () => {
  return (
    <section className="container py-32 grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      <Link href="/projects/consultaja">
        <ProjectCard />
      </Link>
      <Link href="/projects/techstack">
        <ProjectCard />
      </Link>
    </section>
  );
};

export default ProjectsList;
