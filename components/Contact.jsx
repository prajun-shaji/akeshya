"use client";

import { contactList } from "@/constants/constants";
import { animateWithGsap } from "@/utils/animation";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  useGSAP(() => {
    animateWithGsap(".contact-section", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      stagger: 1,
    });
  }, []);

  return (
    <section id="contact" className="common-padding w-screen">
      <div className="screen-max-width flex flex-col gap-5">
        <div className="heading-div fromY contact-section mb-5">
          <hr />
          <h1 className="heading">CONTACT US</h1>
          <hr />
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-5">
          <div className="fromY contact-section flex flex-col gap-1">
            <h2 className="text-2xl font-medium">Akeshya</h2>
            <p className="text-sm font-light text-gray-400">
              Designers, developers & marketeers capable of delivering solutions
              according to your needs,
            </p>
          </div>
          <div className="contact-section fromY flex flex-col">
            {contactList.map(({ id, icon, text }) => (
              <div key={id} className="flex gap-1">
                <div className="text-darkblue">{icon}</div>
                <p className="text-sm font-light">{text}</p>
              </div>
            ))}
          </div>
          <form className="contact-section fromY flex w-full flex-col gap-5 lg:w-1/2">
            <input className="contacts" type="text" placeholder="Your Name" />
            <input className="contacts" type="text" placeholder="Your Email" />
            <input className="contacts" type="text" placeholder="Subject" />
            <textarea className="contacts min-h-32" placeholder="Message" />
            <div className="flex w-full justify-center">
              <button
                onClick={(e) => e.preventDefault()}
                className="rounded-full border-none bg-darkblue px-6 py-2 text-white hover:bg-lightblue"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
