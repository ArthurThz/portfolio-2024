/* eslint-disable prettier/prettier */
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./nav-items";

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
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={58}
            height={49}
            src="/images/logo.svg"
            alt="Logo Theodoro.tsx"
          />
        </Link>

        <nav className="flex items-center  gap-4 sm:gap-10 justify-between">
          {NAV_ITEM.map((item, i) => (
            <NavItems key={i} {...item} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
