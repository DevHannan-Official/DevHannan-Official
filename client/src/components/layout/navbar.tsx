"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavTabs from "@/components/shared/nav-tabs";
import Button from "@/components/shared/button";
import {
  ArrowUpRight,
  Home,
  LayoutPanelLeft,
  LogIn,
  PenBox,
  Settings2,
} from "lucide-react";
import { motion } from "motion/react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          // scroll down
          setShowNavbar(false);
        } else {
          // scroll up
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  const tabList = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "Services",
      path: "/services",
      icon: Settings2,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: LayoutPanelLeft,
    },
    {
      name: "Blogs",
      path: "/blogs",
      icon: PenBox,
    },
  ];
  return (
    <header className="flex items-center w-full justify-center sticky top-5 z-30 px-4">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`transition-transform duration-300 w-full max-w-7xl  px-4 py-3 sm:px-5 md:px-6 sm:py-4 rounded-full bg-white border-b border-gray-100 flex items-center justify-between ${
          showNavbar ? "translate-y-0" : "-translate-y-28"
        }`}
      >
        <Link
          href={"/"}
          className="text-lg md:text-2xl font-special relative top-1"
        >
          DH
        </Link>
        <NavTabs tabs={tabList} />

        <section>
          <Button navigateTo="/login">
            <span className="hidden md:flex">Login</span>
            <ArrowUpRight className="hidden md:flex relative transition ease-in-out duration-100 translate-[0.121rem] group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
            <LogIn className="flex md:hidden" size={16} />
          </Button>
        </section>
      </motion.nav>
    </header>
  );
};

export default Navbar;
