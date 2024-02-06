/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */
"use client";
import { motion } from "framer-motion";
import RichText from "@/app/components/rich-text";
import TechBadges from "@/app/components/tech-badges";
import { WorkExperience } from "@/app/types/work-experience";
import Image from "next/image";
import React from "react";
import { techBadgeAnimation } from "@/app/lib/animation";

type ExperienceItemProps = {
  experience: WorkExperience;
};
const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const {
    companyLogo,
    companyName,
    companyUrl,
    description,
    role,
    technologies,
  } = experience;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={companyLogo.url}
            width={40}
            height={40}
            className="rounded-full object-cover"
            alt={`logo da empresa ${companyName}`}
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>
      <div className="">
        <div className="flex flex-col gap-2 text-sm md:text-base">
          <a
            className="text-gray-500 hover:text-emerald-500 transition-colors"
            target="_blank"
            href={companyUrl}
          >
            @{companyName}
          </a>
          <h4 className="text-gray-300">{role}</h4>
          <span className="text-gray-500">Jul 2023 - Nov 2023</span>
          <div className="text-gray-400">
            <RichText content={description.raw} />
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {technologies.map((tech, i) => (
            <TechBadges
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: i * 0.1 }}
              name={tech.name}
              key={`experience-${companyName}-tech-${tech.name}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
