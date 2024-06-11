"use client";

import { aboutText, stat } from "@/constants/constants";
import { animateWithGsap } from "@/utils/animation";
import { useGSAP } from "@gsap/react";
import { DoneAll } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const About = () => {
  useGSAP(() => {
    animateWithGsap(".about-section", {
      opacity: 1,
      y: 0,
      x: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.35,
      ease: "power1.inOut",
    });
  }, []);

  const [countState, setCountState] = useState(false);

  return (
    <section id="about" className="common-padding w-screen">
      <ScrollTrigger
        onEnter={() => setCountState(true)}
        onExit={() => setCountState(false)}
      >
        <div className="screen-max-width flex-center flex-col gap-5">
          <div className="heading-div about-section fromY">
            <hr />
            <h1 className="heading">ABOUT US</h1>
            <hr />
          </div>
          <div className="about-section fromY mt-5 flex w-full flex-col gap-5 text-gray-500 md:flex-row">
            {aboutText.map(({ id, main, sub, isButton }) => (
              <div key={id} className="flex w-full flex-col lg:w-1/2">
                <p className="mb-5">{main}</p>
                {sub
                  ? sub.map((s, i) => (
                      <p key={i} className="flex gap-2">
                        <DoneAll className="text-darkblue" />
                        {s}
                      </p>
                    ))
                  : isButton && (
                      <Link href="/services">
                        <button className="btn">{isButton}</button>
                      </Link>
                    )}
              </div>
            ))}
          </div>

          {/* stats */}
          <div className="mt-5 flex w-full flex-col items-center gap-5 md:flex-row lg:gap-10">
            <div className="about-section flex w-full -translate-x-20 justify-center opacity-0 md:w-1/2">
              <img
                className="object-contain"
                src="/counts.svg"
                alt="stats image"
              />
            </div>
            <div className="fromX about-section flex w-full flex-col gap-2 lg:grid lg:w-1/2 lg:grid-cols-2 lg:gap-20">
              {stat.map(({ number, icon, boldText, lightText }) => (
                <div key={number} className="flex gap-2">
                  <div>{icon}</div>
                  <div className="flex flex-col gap-1">
                    {countState && (
                      <span className="text-3xl font-bold">
                        <CountUp start={0} duration={4} end={number} />
                      </span>
                    )}
                    <p className="text-sm font-semibold">
                      {boldText}
                      {lightText && (
                        <span className="font-light">{lightText}</span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default About;
