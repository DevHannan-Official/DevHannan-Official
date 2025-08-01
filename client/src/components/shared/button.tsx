"use client";
import { useRouter } from "next/navigation";
import React from "react";

type propTypes = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "liquid";
  additionalClass?: string;
  onClick?: () => void;
  navigateTo?: string;
};
const Button = ({
  children,
  variant = "primary",
  additionalClass,
  onClick,
  navigateTo,
}: propTypes) => {
  const router = useRouter();
  return (
    <button
      onClick={navigateTo ? () => router.push(navigateTo) : onClick}
      className={` px-3 py-2 md:py-3 md:px-6 cursor-pointer flex items-center justify-center gap-1.5 rounded-full transition-colors duration-100 ease-linear group font-medium ${
        variant === "secondary"
          ? "border border-foreground text-foreground bg-white hover:bg-gray-100"
          : variant === "liquid"
          ? ""
          : "bg-foreground text-white hover:bg-foreground/80"
      } ${additionalClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
