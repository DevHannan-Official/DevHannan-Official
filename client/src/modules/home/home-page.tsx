import React from "react";
import HeroSection from "./sections/hero-section";
import AboutSection from "./sections/about-section";
import ServicesSection from "./sections/services-section";
import ProjectsSection from "./sections/projects-section";
import TestimonialSection from "./sections/testimonials-section";
import ContactSection from "./sections/contact-section";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
