/* eslint-disable prettier/prettier */
import React, { ReactNode } from "react";
type KnowTechProps = {
  tech: {
    icon: ReactNode;
    name: string;
    expTime: number;
  };
};
const KnowTech = ({ tech }: KnowTechProps) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>
      <span>
        {tech.expTime > 1
          ? `${tech.expTime} anos de experiência`
          : `${tech.expTime} ano de experiência`}
      </span>
    </div>
  );
};

export default KnowTech;
