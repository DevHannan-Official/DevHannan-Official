"use client";
import React from "react";
import { motion } from "motion/react";
import Button from "@/components/shared/button";
import { Mail, MessageCircleWarning } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 flex justify-center bg-grid-pattern bg-background">
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
          className="flex items-center justify-center gap-6 text-3xl  md:text-6xl font-serif text-black mb-10"
        >
          <span className="text-gray-700 text-2xl md:text-4xl">_|</span>
          Let&apos;s Work Together
          <span className="text-gray-700 text-2xl md:text-4xl">|_</span>
        </motion.h2>
        <div className=" w-full flex items-center justify-between gap-8">
          <section className="flex-1/3">
            <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
              <form className="w-full max-w-lg bg-white border border-gray-200 rounded-2xl p-6">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-foreground/50"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-foreground/50"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-foreground/50"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div>
                  <Button variant="primary">Send Message</Button>
                </div>
                <div className="text-center mt-10 flex items-center justify-center gap-2">
                  <MessageCircleWarning size={16} className="text-gray-600" />{" "}
                  <p className="text-gray-600 text-sm">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              </form>
            </div>
          </section>
          <section className="flex-1 flex flex-col items-start justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl font-medium text-center mt-10"
            >
              Or reach out directly at:
            </motion.h3>
            <div className="mt-4 text-start flex flex-col items-start gap-4">
              <p className="text-lg text-gray-700">
                <Mail size={20} className="inline mr-2" />
                <Link
                  href="mailto:dev.hannan.official@gmail.com"
                  className="underline"
                >
                  dev.hannan.official@gmail.com
                </Link>
              </p>
            </div>
            <div className="text-start flex flex-row items-center gap-8 mt-4">
              <Link
                href="https://facebook.com"
                className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition"
              >
                <Image
                  src="/vectors/facebook-icon.svg"
                  alt="facebook"
                  width={40}
                  height={40}
                />
              </Link>

              <Link
                href="https://x.com"
                className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition"
              >
                <Image
                  src="/vectors/x-icon.svg"
                  alt="x"
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href="https://instagram.com"
                className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition"
              >
                <Image
                  src="/vectors/instagram-icon.svg"
                  alt="instagram"
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href="https://linkedin.com"
                className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition"
              >
                <Image
                  src="/vectors/linkedin-icon.svg"
                  alt="linkedin"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </section>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
