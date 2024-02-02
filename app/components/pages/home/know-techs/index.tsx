/* eslint-disable prettier/prettier */
import SectionTitle from "@/app/components/section-title";
import React from "react";
import KnowTech from "./know-tech";
import { TbBrandNextjs } from "react-icons/tb";
import { KnownTechs as IKnownTechs } from "@/app/types/projects";

type KnowTechsProps = {
  techs: IKnownTechs[];
};
const KnowTechs = ({ techs }: KnowTechsProps) => {
  return (
    <section className="container py-16 ">
      <SectionTitle title="Conhecimentos" subtitle="competências" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech) => (
          <KnowTech key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
};

export default KnowTechs;
