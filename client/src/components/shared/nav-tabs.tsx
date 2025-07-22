"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type propTypes = {
  tabs: {
    name: string;
    path: string;
  }[];
};
const NavTabs = ({ tabs }: propTypes) => {
  const activePath = usePathname();
  return (
    <ul className="flex items-center gap-3">
      {tabs.map((tab) => (
        <Link
          key={tab.path}
          href={tab.path}
          className={`py-2 px-3 text-foreground hover:opacity-100 transition-opacity duration-100 ease-linear tab ${
            activePath === tab.path
              ? "opacity-100 font-medium activeTab"
              : "opacity-70 font-normal"
          }`}
        >
          <li>{tab.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default NavTabs;
