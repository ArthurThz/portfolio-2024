/* eslint-disable prettier/prettier */
import SectionTitle from "@/app/components/section-title";
import React from "react";
import KnowTech from "./know-tech";
import { TbBrandNextjs } from "react-icons/tb";

const KnowTechs = () => {
  return (
    <section className="container py-16 ">
      <SectionTitle title="Conhecimentos" subtitle="competências" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{ icon: <TbBrandNextjs />, expTime: 1, name: "Next Js" }}
          />
        ))}
      </div>
    </section>
  );
};

export default KnowTechs;
