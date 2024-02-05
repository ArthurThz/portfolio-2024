/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React from "react";
import ProjectCard from "./project-card";
import Link from "next/link";
import { Project } from "@/app/types/projects";

type ProjectListProps = {
  projects: Project[];
};

const ProjectsList = ({ projects }: ProjectListProps) => {
  return (
    <section className="container py-32 grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {projects?.map((project) => (
        <Link key={project.title} href={`/projects/${project.slug}`}>
          <ProjectCard project={project} />
        </Link>
      ))}
    </section>
  );
};

export default ProjectsList;
