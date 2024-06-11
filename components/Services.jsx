"use client";

import { serviceCard } from "@/constants/constants";
import { animateWithGsap } from "@/utils/animation";
import { useGSAP } from "@gsap/react";

const Services = () => {
  useGSAP(() => {
    animateWithGsap(".services-section", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.25,
      stagger: 0.25,
    });
  }, []);
  return (
    <section id="services" className="common-padding w-screen">
      <div className="screen-max-width flex flex-col gap-5">
        <div className="fromY services-section flex flex-col gap-2">
          <div className="heading-div">
            <hr />
            <h1 className="heading">SERVICES</h1>
            <hr />
          </div>
          <p className="text-center">
            Akeshya will serve as your consultant and development partner to
            help you turn your idea into a reality.
          </p>
        </div>
        <div className="mt-10 flex h-full flex-col gap-10 lg:flex-row">
          {serviceCard.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="services-section fromY group relative flex h-1/4 md:h-[400px] flex-col gap-5 rounded-3xl rounded-tr-none bg-cardBg p-5 shadow-lg duration-700"
            >
              <div className="absolute right-0 top-0 h-14 w-12 rounded-bl-full bg-[#e1f0fa] transition-all duration-500 ease-in-out group-hover:size-full group-hover:rounded-3xl group-hover:rounded-tr-none group-hover:bg-darkblue" />

              <div className="flex-center size-14 rounded-full bg-darkblue text-white duration-1000 group-hover:z-10 group-hover:bg-white group-hover:text-darkblue">
                {icon}
              </div>

              <div className="flex flex-col gap-2 duration-700 group-hover:z-10 group-hover:text-white">
                <h2 className="text-lg font-medium">{title}</h2>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
