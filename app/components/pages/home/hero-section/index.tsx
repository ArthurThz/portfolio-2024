/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */
import Button from "@/app/components/button";
import TechBadges from "@/app/components/tech-badges";
import Image from "next/image";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";

const Hero = () => {
  const MOCK_CONTACT = [
    {
      url: "https://github.com/arthurthz",
      icon: <TbBrandGithub />,
    },
    {
      url: "https://linkedin.com/in/arthurthz",
      icon: <TbBrandLinkedin />,
    },
    {
      url: "https://github.com/arthurthz",
      icon: <TbBrandWhatsapp />,
    },
  ];
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-zinc-500">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Arthur Theodoro</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Sou um desenvolvedor front-end apaixonado e altamente qualificado,
            com experiência sólida em tecnologias modernas e práticas de
            desenvolvimento web. Minha especialização inclui React, TypeScript,
            Next.js, Tailwind CSS, Styled Components, Redux e API RESTful, além
            de expertise em design responsivo. Ao longo da minha carreira,
            demonstrei habilidades excepcionais na criação de interfaces de
            usuário intuitivas e eficientes, contribuindo para experiências web
            envolventes.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadges name="Next Js" key={index} />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 sm:flex-row flex-col">
            <Button className="shadow-button w-max">
              Entre em contato
              <HiArrowNarrowRight />
            </Button>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACT.map((item, index) => (
                <a
                  href={item.url}
                  className="hover:text-gray-50 transition-colors"
                  target="_blank"
                  key={index}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="foto de perfil"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        /> */}
      </div>
    </section>
  );
};

export default Hero;
