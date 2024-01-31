/* eslint-disable prettier/prettier */
import React from "react";
import { FaReact } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-950 ">
      <span className="flex items-center gap-1.5 text-xs md:text-sm font-mono text-gray-400">
        Made by
        <strong className="font-medium ">Theodoro.tsx</strong>
        <FaReact className="text-blue-400" />
      </span>
    </footer>
  );
};

export default Footer;
