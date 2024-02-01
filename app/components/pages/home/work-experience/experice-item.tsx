/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */
import TechBadges from "@/app/components/tech-badges";
import Image from "next/image";
import React from "react";

const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="/images/verticore-logo.png"
            width={40}
            height={40}
            className="rounded-full object-cover"
            alt="logo da empresa"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>
      <div className="">
        <div className="flex flex-col gap-2 text-sm md:text-base">
          <a
            className="text-gray-500 hover:text-emerald-500 transition-colors"
            target="_blank"
            href="https://www.linkedin.com/company/verticoregroup/"
          >
            @Verticore
          </a>
          <h4 className="text-gray-300">Estagiário de TI</h4>
          <span className="text-gray-500">Jul 2023 - Nov 2023</span>
          <p className="text-gray-400">
            Desenvolvimento de automações utilizando python com a plataforma de
            BotCity, gerenciamento das novas automações e das pre-existentes
            (UiPath).
          </p>
          <p className="text-gray-400">
            Levantamento de requisitos para novas automações.
          </p>
          <p className="text-gray-400">
            Criação e manutenção de pipes no Pipefy.
          </p>
          <p className="text-gray-400">
            Atendimento de chamados para execução das automações.
          </p>
          <p className="text-gray-400">
            Desenvolvimento de relatórios no pipe de chamados para gerir a
            quantidade e prioridade de execução dos bots.
          </p>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadges name="Python" />
          <TechBadges name="BotCity" />
          <TechBadges name="Pipefy" />
          <TechBadges name="UiPath" />
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
