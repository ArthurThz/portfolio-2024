/* eslint-disable prettier/prettier */
import React from "react";

type TechBadgeProps = {
  name: string;
};

const TechBadges = ({ name }: TechBadgeProps) => {
  return (
    <span className="text-emerald-400 bg-emerald-900/80  text-sm py-1 px-3 rounded-lg">
      {name}
    </span>
  );
};

export default TechBadges;
