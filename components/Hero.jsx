"use client";

import { animateWithGsap } from "@/utils/animation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const Hero = () => {
  useGSAP(() => {
    animateWithGsap(".hero", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power1.inOut",
    });
    gsap.fromTo(
      "#hero-img",
      {
        y: -20,
      },
      {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
      },
    );
    animateWithGsap("#hero-title", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.inOut",
    });
    animateWithGsap(".sub", {
      opacity: 1,
      y: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.35,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="w-screen p-5">
      <div className="screen-max-width flex flex-col items-center gap-5 lg:flex-row-reverse">
        <img
          id="hero-img"
          className="hero translate-x-20 object-contain opacity-0"
          src="/hero.png"
          alt="hero image"
        />
        <div className="flex flex-col gap-3 font-raleway">
          <h1
            id="hero-title"
            className="fromY text-3xl font-bold text-darkblue md:text-5xl"
          >
            Grow your business with Akeshya
          </h1>
          <p className="fromY sub text-lg">
            We are team of talented website designers, developers & digital
            marketeers
          </p>
          <Link href="/about">
            <button className="btn fromY sub">Get Started</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
