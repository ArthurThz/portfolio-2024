/* eslint-disable prettier/prettier */
"use client";
import React, { ComponentProps } from "react";
import { motion } from "framer-motion";

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
};

const TechBadges = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      {...props}
      className="text-emerald-400 bg-emerald-900/80  text-sm py-1 px-3 rounded-lg"
    >
      {name}
    </motion.span>
  );
};

export default TechBadges;
