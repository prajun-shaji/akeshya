"use client";

import { clientImg } from "@/constants/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  useGSAP(() => {
    gsap.from("#client-img", {
      scrollTrigger: {
        trigger: "#client-img",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  });

  return (
    <section className="flex w-screen items-center justify-center gap-5 bg-[#f3f9fd] p-5 max-sm:grid max-sm:grid-cols-2 md:px-10 md:py-5">
      {clientImg.map(({ id, img }) => (
        <div key={id} className="flex-center w-full">
          <img
            id="client-img"
            className="size-24 object-contain grayscale filter hover:filter-none"
            src={img}
            alt="client images"
          />
        </div>
      ))}
    </section>
  );
};

export default Clients;
