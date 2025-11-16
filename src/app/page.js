import About from "@/components/About";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Skills from "@/components/Skills";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <SectionTitle title="Skills" className="mt-20" />
      <Skills />
      <SectionTitle title="My Activities" className="mt-20" />
      <Activities />
      <SectionTitle title="Get in touch" className="mt-20" />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
