/* eslint-disable prettier/prettier */
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./nav-items";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

const Header = () => {
  const NAV_ITEM = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projetos",
      href: "/projects",
    },
  ];
  return (
    <motion.header
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 w-full z-10 h-24 flex items-center justify-center"
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <FaReact className="text-blue-500" size={40} />
        </Link>

        <nav className="flex items-center  gap-4 sm:gap-10 justify-between">
          {NAV_ITEM.map((item, i) => (
            <NavItems key={i} {...item} />
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
