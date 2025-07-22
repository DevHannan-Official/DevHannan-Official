import Link from "next/link";
import React from "react";
import NavTabs from "@/components/shared/nav-tabs";
import Button from "@/components/shared/button";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const tabList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
  ];
  return (
    <nav className="flex items-center justify-between py-4 px-6  fixed top-5 bg-white w-full max-w-7xl rounded-full left-1/2 transform -translate-x-1/2">
      <Link href={"/"} className="text-2xl font-special relative top-1">
        DH
      </Link>
      <NavTabs tabs={tabList} />

      <section>
        <Button navigateTo="/login">
          Login
          <ArrowUpRight className="relative transition ease-in-out duration-100 translate-[0.121rem] group-hover:translate-x-1 group-hover:-translate-y-0.5" />
        </Button>
      </section>
    </nav>
  );
};

export default Navbar;
