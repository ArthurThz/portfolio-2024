/* eslint-disable prettier/prettier */
import { cn } from "@/app/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-blue-800/70 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-blue-500 transition-all disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
