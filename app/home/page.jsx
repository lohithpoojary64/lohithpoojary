"use client";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";
import About from "@/components/About/About";
import Projects from "@/components/Project/Projects";
import NavbarM from "@/components/Navbar/NavbarM";
import HeaderM from "@/components/Header/HeaderM";
import SkillsM from "@/components/Skills/SkillsM";
import AboutM from "@/components/About/AboutM";
import ProjectsM from "@/components/Project/ProjectsM";
import React from "react";
import Contact from "@/components/Contact/Contact";
import ContactM from "@/components/Contact/ContactM";
import { motion, useScroll, useTransform } from "framer-motion";

const page = () => {
  const { scrollYProgress } = useScroll();

  // Create a smooth scroll effect by transforming the Y position
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]); // Move Header upwards
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]); // Move Skills upwards
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]); // Move About upwards

  return (
    <motion.div className="bg-black min-h-screen h-[230vh] lg:h-[330vh] w-[100%]">
      <Navbar />
      <NavbarM />
      <motion.div style={{ y: y1 }}>
        <Header />
        <HeaderM />
      </motion.div>
      <motion.div style={{ y: y2 }}>
        <Skills />
        <SkillsM />
      </motion.div>
      <motion.div style={{ y: y3 }}>
        <About />
        <AboutM />
      </motion.div>
      <Projects />
      <ProjectsM />
      <Contact />
      <ContactM />
    </motion.div>
  );
};

export default page;
