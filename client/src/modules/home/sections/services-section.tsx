"use client";

import Button from "@/components/shared/button";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Globe,
  LayoutGrid,
  Zap,
  ArrowUpRight,
} from "lucide-react";

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
    <section className="py-20 bg-white relative z-10 px-6 flex flex-col items-center justify-center gap-10">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex items-center justify-center gap-6 text-3xl  md:text-6xl font-serif text-black mb-5"
      >
        <span className="text-gray-700 text-2xl md:text-4xl">_|</span>
        Featured Services
        <span className="text-gray-700 text-2xl md:text-4xl">|_</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300  transition flex flex-col items-center w-full max-w-80"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {service.title}
            </h3>
            <p className="text-sm text-gray-700 text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
      <Button navigateTo="/services" variant="secondary">
        View all
        <ArrowUpRight className="relative transition ease-in-out duration-100 translate-[0.121rem] group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
      </Button>
    </section>
  );
};

export default ServicesSection;
