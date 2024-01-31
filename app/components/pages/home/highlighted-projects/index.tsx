/* eslint-disable prettier/prettier */
import HorizontalDivider from "@/app/components/divider/horizontal";
import SectionTitle from "@/app/components/section-title";
import React from "react";
import ProjectCard from "../project-card";
import Link from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";

const HighlightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-16" />
      <div>
        <ProjectCard />
        <HorizontalDivider />
        <ProjectCard />
        <HorizontalDivider />
        <ProjectCard />
        <HorizontalDivider />

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HighlightedProjects;
