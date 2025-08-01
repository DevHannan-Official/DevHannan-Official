"use client";

import Button from "@/components/shared/button";
import { motion } from "framer-motion";
import { Code2, Smartphone, Zap, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Custom websites built with the MERN stack, using TypeScript and scalable architecture for performance and security.",
    icon: <Code2 className="w-8 h-8 text-primary" />,
  },
  {
    title: "Cross-Platform Mobile Apps",
    description:
      "React Native + Expo powered apps that run smoothly on both Android and iOS, optimized for performance and UI/UX.",
    icon: <Smartphone className="w-8 h-8 text-primary" />,
  },
  {
    title: "API Integrations & Backend Systems",
    description:
      "Secure, RESTful and GraphQL API integrations, session management, authentication, and real-time features.",
    icon: <Zap className="w-8 h-8 text-primary" />,
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-20 bg-background relative z-10 px-6 flex flex-col items-center justify-center gap-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex items-center justify-center gap-2 text-2xl sm:text-3xl md:text-5xl font-serif text-foreground mb-5"
      >
        <span className="text-foreground text-2xl md:text-4xl">_|</span>
        Featured Services
        <span className="text-foreground text-2xl md:text-4xl">|_</span>
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full mx-auto px-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-base rounded-2xl p-6 border border-border hover:border-border-hover transition flex flex-col items-center w-full"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className=" text-lg sm:text-xl font-semibold mb-2 text-center">
              {service.title}
            </h3>
            <p className="text-sm text-foreground/60 text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
      <Button
        navigateTo="/services"
        variant="secondary"
        additionalClass="w-full sm:w-fit"
      >
        View all
        <ArrowUpRight className="relative transition ease-in-out duration-100 translate-[0.121rem] group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
      </Button>
    </section>
  );
};

export default ServicesSection;
