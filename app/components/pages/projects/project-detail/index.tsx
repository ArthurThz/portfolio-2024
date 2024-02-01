/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */
import Button from "@/app/components/button";
import Link from "@/app/components/link";
import SectionTitle from "@/app/components/section-title";
import TechBadges from "@/app/components/tech-badges";
import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";

const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            "url(/images/hero-bg.png) no-repeat center/cover, url(/images/print-home.png)",
        }}
      />
      <SectionTitle
        subtitle="projetos"
        title="Consulta Já"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        Aplicativo onde o usuário pode se cadastrar, fazer login, marcar e
        desmarcar consultas com diversas especialidades médicas.
      </p>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadges name="React" />
        <TechBadges name="Vite" />
        <TechBadges name="Styled Components" />
        <TechBadges name="Supabase" />
        <TechBadges name="Axios" />
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a
          href="https://github.com/ArthurThz/projeto-consulta-ja"
          target="_blank"
        >
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
        {/* <a href="https://github.com" target="_blank">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Projeto Online
          </Button>
        </a> */}
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  );
};

export default ProjectDetails;
