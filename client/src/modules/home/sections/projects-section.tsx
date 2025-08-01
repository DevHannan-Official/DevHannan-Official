"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/shared/button";
import { ArrowUpRight, Code, Globe } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "AI Chatbot Platform",
    description:
      "An intelligent chatbot web and mobile app built using Next.js, tRPC, MongoDB, and React Native with Expo.",
    image: "https://placehold.co/600x400",
    code: "https://github.com/DevHannan-Official",
    live: "#projects",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Full-stack responsive admin dashboard with real-time analytics, product control, and payment integration.",
    image: "https://placehold.co/600x400",
    code: "https://github.com/DevHannan-Official",
    live: "#projects",
  },
  {
    title: "Social Media App",
    description:
      "Cross-platform mobile app like Instagram built with React Native + Expo and Node.js backend with real-time chat.",
    image: "https://placehold.co/600x400",
    code: "https://github.com/DevHannan-Official",
    live: "#projects",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 flex justify-center bg-grid-pattern bg-background"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-2xl sm:text-3xl md:text-5xl font-serif text-black mb-5"
        >
          <span className="text-gray-700 text-2xl md:text-4xl">_|</span>
          Featured Projects
          <span className="text-gray-700 text-2xl md:text-4xl">|_</span>
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl px-4 mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 40 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg sm:text-xl font-medium mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4 text-sm">
                  <Button variant="secondary" navigateTo={project.code}>
                    <Code />
                  </Button>
                  <Button variant="secondary" navigateTo={project.live}>
                    <Globe />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Button
            navigateTo="/projects"
            variant="secondary"
            additionalClass="w-full sm:w-fit"
          >
            View all
            <ArrowUpRight className="relative transition ease-in-out duration-100 translate-[0.121rem] group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
export default ProjectsSection;
