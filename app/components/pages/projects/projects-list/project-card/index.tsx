/* eslint-disable prettier/prettier */
import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src="/images/print-home.png"
          width={380}
          height={200}
          alt="Card do projeto"
          unoptimized
          className="w-full h-full object-cover duration-500 transition-all group-hover:scale-110 "
        />
      </div>
      <div className="flex-1 flex flex-col  p-8 ">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">
          Consulta Já
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4 ">Descrição</p>
        <span className="text-gray-300 text-sm font-medium block  mt-auto truncate">
          Vite, React, Supabase, Styled Components, Axios
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
