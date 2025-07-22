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
      className={`py-3 px-6 cursor-pointer flex items-center justify-center gap-1.5 rounded-full transition-colors duration-100 ease-linear group font-medium ${
        variant === "secondary"
          ? ""
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
