"use client";
import React from "react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import Button from "@/components/shared/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 bg-background md:gap-5 pt-10"
    >
      {/* Avatar with status */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="relative mb-6"
      >
        <div className="w-24 h-24 rounded-full bg-bg-sec text-foreground flex items-center justify-center text-3xl font-serif">
          HD
        </div>
        <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></span>
      </motion.div>

      {/* Brand name */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl sm:text-5xl md:text-6xl font-serif text-foreground mb-2"
      >
        Hey, I&apos;m Hannan
      </motion.h1>

      {/* Typewriter */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-md sm:text-lg md:text-xl text-foreground/60 font-light mb-6 h-10"
      >
        <Typewriter
          words={[
            "Full Stack Web Developer",
            "Cross Platform Mobile App Developer",
            "React / Next.js Expert",
            "Available for Hire 🟢",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 w-full items-center justify-center"
      >
        <Button
          navigateTo="#projects"
          variant="primary"
          additionalClass="w-full sm:w-fit"
        >
          View Projects
        </Button>
        <Button
          navigateTo="#contact"
          variant="secondary"
          additionalClass="w-full sm:w-fit"
        >
          Let’s Talk
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 text-foreground/60 flex flex-col items-center gap-4"
      >
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <span className="px-4 py-2 bg-bg-sec rounded-full">
            🚀 Fast Delivery
          </span>
          <span className="px-4 py-2 bg-bg-sec rounded-full">
            🛠️ Modern Technologies
          </span>
          <span className="px-4 py-2 bg-bg-sec rounded-full">
            🧠 AI Integrations
          </span>
          <span className="px-4 py-2 bg-bg-sec rounded-full">
            🌐 Global Clients
          </span>
        </div>

        <div className="text-sm text-gray-500 mt-2 flex items-center flex-col md:flex-row gap-2">
          Reach out anytime 👉
          <Link
            href="mailto:dev.hannan.official@gmail.com"
            className="underline underline-offset-2 hover:text-foreground/60 transition-colors duration-100 ease-linear"
          >
            dev.hannan.official@gmail.com
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-xs text-gray-400 mt-8"
      >
        🚨 Currently accepting freelance & collaborative projects.
      </motion.div>
    </section>
  );
};

export default HeroSection;
