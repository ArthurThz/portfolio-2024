/* eslint-disable prettier/prettier */
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";

type NavItemProps = {
  label: string;
  href: string;
};

const NavItems = ({ href, label }: NavItemProps) => {
  const pathName = usePathname();

  const isActive = pathName === href;
  return (
    <Link
      href={href}
      className={cn(
        "text-gray-400 flex items-center gap-2 font-medium font-mono",
        isActive && "text-gray-50"
      )}
    >
      <span className="text-blue-500">#</span>
      {label}
    </Link>
  );
};

export default NavItems;
