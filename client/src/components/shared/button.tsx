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
      className={` p-3 sm:py-3 sm:px-6 cursor-pointer flex items-center justify-center gap-1.5 rounded-full transition-colors duration-100 ease-linear group font-medium ${
        variant === "secondary"
          ? "border border-foreground text-foreground bg-base hover:bg-bg-sec"
          : variant === "liquid"
          ? ""
          : "bg-foreground text-background hover:bg-foreground/90"
      } ${additionalClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
