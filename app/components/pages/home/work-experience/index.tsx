/* eslint-disable prettier/prettier */
import SectionTitle from "@/app/components/section-title";
import React from "react";
import ExperienceItem from "./experice-item";
import { WorkExperience as IWorkExperience } from "@/app/types/work-experience";

type WorkExperienceProps = {
  experiences: IWorkExperience[];
};

const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <section className="container py-16 flex gap-10 flex-col md:flex-row md:gap-4 lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="text-gray-400 mt-6">
          Estou sempre aberto a novos projetos e desafios emocionantes. Vamos
          trabalhar juntos para criar soluções incriveis!
        </p>
      </div>

      <div className="flex flex-col gap-4 ">
        {experiences?.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
