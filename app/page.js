"use client";

import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import { useState } from "react";

export default function Home() {
  const [bgColour, setBgColour] = useState(false);

  const setBg = (state) => {
    setBgColour(state);
  };

  return (
    <main className={`${bgColour && "bg-gray-300"}`}>
      <Navbar setBg={setBg} />
      <Hero />
      <Clients />
      <About />
      <Services />
      <Process />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
