"use client";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type propTypes = {
  tabs: {
    name: string;
    path: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
  }[];
};
const NavTabs = ({ tabs }: propTypes) => {
  const activePath = usePathname();
  return (
    <ul className="flex items-center gap-4">
      {tabs.map((tab) => (
        <Link
          key={tab.path}
          href={tab.path}
          className={`px-1 py-1.5 sm:py-2 sm:px-3 text-foreground hover:opacity-100 transition-opacity duration-100 ease-linear tab ${
            activePath === tab.path
              ? "opacity-100 font-medium activeTab"
              : "opacity-70 font-normal"
          }`}
        >
          <tab.icon size={20} className="flex sm:hidden" />
          <li className="hidden sm:flex">{tab.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default NavTabs;
