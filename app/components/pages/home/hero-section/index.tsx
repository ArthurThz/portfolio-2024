/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */
"use client";
import Button from "@/app/components/button";
import CmsIcon from "@/app/components/cms-icon";
import RichText from "@/app/components/rich-text";
import TechBadges from "@/app/components/tech-badges";
import { HomePageInfo } from "@/app/types/page-info";
import Image from "next/image";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};

const Hero = ({ homeInfo }: HomeSectionProps) => {
  const data = homeInfo[0];
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-zinc-500">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Arthur Theodoro</h2>

          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={data.introduction.raw} />
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {data.technologies.map((tech) => (
              <TechBadges name={tech.name} key={tech.name} />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 sm:flex-row flex-col">
            <Button onClick={handleContact} className="shadow-button w-max">
              Entre em contato
              <HiArrowNarrowRight />
            </Button>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {data.socials.map((social, index) => (
                <a
                  href={social.url}
                  className="hover:text-gray-50 transition-colors"
                  target="_blank"
                  key={index}
                >
                  <CmsIcon icon={social.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          width={420}
          height={404}
          src={data.profilePicture.url}
          alt="foto de perfil"
          className="w-auto h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-scale-down"
          unoptimized
        />
      </div>
    </section>
  );
};

export default Hero;
