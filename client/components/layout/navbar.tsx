"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RiMenu2Line } from "@remixicon/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const pathname = usePathname();
  const activePath = (path: string) => pathname === path;
  console.log(pathname);
  return (
    <nav className="py-6 px-4 md:px-20 lg:px-56 flex items-center justify-between border-b border-border">
      <section className="text-foreground/70">
        visitor
        <span className="text-foreground/85">@hannandev:-$</span>{" "}
        <span className="text-terminal-cyan animate-blink text-primary font-bold">
          _
        </span>
      </section>
      <section className="md:hidden">
        <Button>
          <RiMenu2Line />
          <span> MENU</span>
        </Button>
      </section>
      <ul className="hidden md:flex">
        {navLinks.map((link) => (
          <li key={link.name} className="ml-6">
            <a
              href={link.href}
              className={`text-sm font-medium  transition-colors  ${activePath(link.href) ? "bg-primary text-background hover:text-background" : "text-foreground/70 hover:text-primary"}`}
            >
              ./{link.name.toLowerCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
