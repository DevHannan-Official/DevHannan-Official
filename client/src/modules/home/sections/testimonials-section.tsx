"use client";

import Button from "@/components/shared/button";
import { ArrowUpRight, UserRound } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import RatingStars from "@/components/shared/rating-stars";

const users = [
  {
    name: "User 1",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://placehold.co/400",
    linkedin: "https://linkedin.com/in/user1",
    rating: 5,
  },
  {
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 3.5,
  },
  {
    name: "User 3",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // image: "https://placehold.co/400",
    linkedin: "https://linkedin.com/in/user3",
    rating: 4,
  },
];

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-[#f9f9f5] relative z-10 px-6 flex flex-col items-center justify-center gap-10"
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
          Testimonials
          <span className="text-gray-700 text-2xl md:text-4xl">|_</span>
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 px-4 gap-10 max-w-6xl mx-auto">
          {users.map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 40 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition"
            >
              <div className="p-5 flex w-full items-center justify-center rounded-full">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={400}
                    height={400}
                    className="size-40 object-cover rounded-full"
                  />
                ) : (
                  <div className="size-40 flex items-center justify-center bg-gray-100 rounded-full">
                    <UserRound size={110} />
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg sm:text-xl font-medium mb-2 overflow-ellipsis overflow-hidden whitespace-nowrap">
                  {user.name || "Anonymous"}
                </h3>
                <p className="text-sm text-gray-600 mb-4 overflow-ellipsis overflow-hidden line-clamp-3">
                  {user.description}
                </p>
                <div className="flex gap-4 text-sm">
                  <RatingStars rating={user.rating} />
                  {user.linkedin && (
                    <Link
                      href={user.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-secondary hover:text-primary transition p-2 rounded-full hover:bg-gray-200"
                    >
                      <Image
                        src="/vectors/linkedin-icon.svg"
                        alt="linkedin"
                        width={30}
                        height={30}
                      />
                    </Link>
                  )}
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

export default TestimonialSection;
