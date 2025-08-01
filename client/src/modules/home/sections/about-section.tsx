"use client";
import React from "react";
import { motion } from "motion/react";
const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 flex justify-center bg-grid-pattern bg-background"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="p-8 max-w-3xl w-full text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-2xl sm:text-3xl md:text-5xl font-serif text-foreground mb-5"
        >
          <span className="text-foreground text-2xl md:text-4xl">_|</span>
          About Me
          <span className="text-foreground text-2xl md:text-4xl">|_</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg leading-relaxed"
        >
          I&apos;m Hannan, a 15-year-old self-taught full-stack web and mobile
          app developer. I specialize in building fast, modern, and responsive
          digital experiences using technologies like <strong>Next.js</strong>,{" "}
          <strong>React Native</strong>, <strong>TypeScript</strong>, and{" "}
          <strong>Node.js</strong>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg leading-relaxed"
        >
          I love turning ideas into real-world solutions — from dynamic websites
          to cross-platform mobile apps. Every project I take is built with
          performance, creativity, and scalability in mind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 text-foreground/60 flex flex-wrap justify-center items-center gap-4"
        >
          <span className="bg-bg-sec px-4 py-2 rounded-full">
            📍 Based in Pakistan
          </span>
          <span className="bg-bg-sec px-4 py-2 rounded-full">
            🧠 AI-powered Features
          </span>
          <span className="bg-bg-sec px-4 py-2 rounded-full">
            🌍 Serving Clients Globally
          </span>
          <span className="bg-bg-sec px-4 py-2 rounded-full">
            🛠 Next.js, MERN, TS, RN and more...
          </span>
          <span className="bg-bg-sec px-4 py-2 rounded-full">
            📆 Building Since 2023
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
