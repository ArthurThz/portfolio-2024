/* eslint-disable prettier/prettier */
import HorizontalDivider from "@/app/components/divider/horizontal";
import SectionTitle from "@/app/components/section-title";
import React from "react";
import ProjectCard from "../project-card";
import Link from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Project } from "@/app/types/projects";

type HighlightedProjectsProps = {
  projects: Project[];
};

const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-16" />
      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex hover:text-blue-500">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HighlightedProjects;
