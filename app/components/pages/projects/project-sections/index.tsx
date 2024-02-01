/* eslint-disable prettier/prettier */
import Image from "next/image";
import React from "react";

const sections = [
  {
    title: "login",
    image: "/images/print-home.png",
  },
  {
    title: "Home",
    image: "/images/print-home.png",
  },
];

const ProjectSections = () => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section, index) => (
        <div className="flex flex-col items-center gap-6 md:gap-12" key={index}>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {section.title}
          </h2>
          <Image
            src={section.image}
            width={1080}
            height={672}
            alt="Imagem do projeto"
            className="w-full aspect-auto rounded-lg object-cover"
            unoptimized
          />
        </div>
      ))}
    </section>
  );
};

export default ProjectSections;
