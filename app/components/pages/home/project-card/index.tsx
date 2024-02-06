/* eslint-disable prettier/prettier */
"use client";
import TechBadges from "@/app/components/tech-badges";
import Image from "next/image";
import React from "react";
import Link from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Project } from "@/app/types/projects";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animation";

type ProjectCardProps = {
  project: Project;
};
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
    >
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full"
      >
        <Image
          src={project.thumbnail.url}
          width={420}
          height={304}
          alt={`Thumbnail projeto ${project.title}`}
          className=" w-full h-full object-cover rounded-lg"
        />
      </motion.div>
      <div className="flex-1 lg:py-[18px]">
        <motion.h3
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 font-medium text-lg text-gray-50"
        >
          <FaReact className="text-blue-500" />
          {project.title}
        </motion.h3>
        <motion.p
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="text-gray-400 my-6"
        >
          {project.shortDescription}
        </motion.p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {project.technologies.map((tech, i) => (
            <TechBadges
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: i * 0.1 }}
              key={`${project.title}-tech-${tech.name}`}
              name={tech.name}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
