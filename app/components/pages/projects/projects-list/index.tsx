/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
"use client";
import React from "react";
import ProjectCard from "./project-card";
import Link from "next/link";
import { Project } from "@/app/types/projects";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/app/lib/animation";

type ProjectListProps = {
  projects: Project[];
};

const ProjectsList = ({ projects }: ProjectListProps) => {
  return (
    <section className="container py-32 grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {projects?.map((project, i) => (
        <motion.div
          {...fadeUpAnimation}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          key={project.title}
        >
          <Link href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        </motion.div>
      ))}
    </section>
  );
};

export default ProjectsList;
