// components/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Facebook, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Blogs", href: "/blogs" },
  ];

  const socialLinks = [
    { icon: <Github />, href: "https://github.com/yourusername" },
    { icon: <Linkedin />, href: "https://linkedin.com" },
    { icon: <Mail />, href: "mailto:your@email.com" },
    { icon: <Facebook />, href: "https://facebook.com" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-neutral-900 text-neutral-200 py-10 mt-10 px-6 sm:px-12 rounded-t-3xl"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        {/* Logo & Tagline */}
        <div className="space-y-2">
          <h3 className="text-2xl font-special text-white">Dev Hannan</h3>
          <p className="text-neutral-400">
            Crafting modern apps with code & creativity.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-2">
          <h4 className="text-xl font-medium text-white">Quick Links</h4>
          <ul className="space-y-1">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="hover:text-white transition">
                  <ArrowUpRight className="inline-block mr-2" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="space-y-2">
          <h4 className="text-xl font-medium text-white">Connect</h4>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon, href }, idx) => (
              <Link
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-neutral-500 mt-8">
        © {new Date().getFullYear()} Hannan Developer. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
