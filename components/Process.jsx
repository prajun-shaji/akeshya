"use client";

import { processCard } from "@/constants/constants";
import { animateWithGsap } from "@/utils/animation";
import { useGSAP } from "@gsap/react";

const Process = () => {
  useGSAP(() => {
    animateWithGsap(".process-section", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      stagger: 1,
    });
  }, []);

  return (
    <section className="common-padding w-screen">
      <div className="screen-max-width flex flex-col gap-5">
        <div className="fromY process-section flex flex-col gap-2">
          <div className="heading-div">
            <hr />
            <h1 className="heading">OUR PROCESS</h1>
            <hr />
          </div>
          <p className="text-center">
            Over the years we’ve evolved a tested method for attaining
            achievement for each one of our clients.
          </p>
        </div>
        <div className="mt-5 flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-10">
          {processCard.map(({ id, title, desc }) => (
            <div
              key={title}
              className="fromY process-section flex flex-col rounded-3xl bg-cardBg p-5 shadow-lg duration-500 hover:bg-darkblue hover:text-white"
            >
              <h2 className="flex flex-row gap-1 text-lg font-medium">
                <span>{id}.</span>
                {title}
              </h2>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
