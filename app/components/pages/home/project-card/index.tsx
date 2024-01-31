/* eslint-disable prettier/prettier */
import TechBadges from "@/app/components/tech-badges";
import Image from "next/image";
import React from "react";
import Link from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";

const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          src="/images/print-home.png"
          width={420}
          height={304}
          alt="Thumbnail projeto consulta ja"
          className=" w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          Consulta Já
        </h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quia commodi hic fugit earum harum laborum, est quis, corporis
          exercitationem nobis unde libero fugiat possimus delectus eos ipsa
          dignissimos cum dolor? Dolor libero incidunt blanditiis, perferendis
          natus dignissimos laboriosam commodi laborum. Vel, dicta beatae!
          Maxime vitae perspiciatis deleniti esse sunt.
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadges name="Next.Js" />
          <TechBadges name="Next.Js" />
          <TechBadges name="Next.Js" />
          <TechBadges name="Next.Js" />
          <TechBadges name="Next.Js" />
        </div>

        <Link href="/projects/consultaja">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
