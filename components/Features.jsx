import { featuresCard } from "@/constants/constants";
import { animateWithGsap } from "@/utils/animation";
import { useGSAP } from "@gsap/react";

const Features = () => {
  useGSAP(() => {
    animateWithGsap(".feature-section", {
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
        <div className="fromY feature-section flex flex-col gap-2">
          <div className="heading-div">
            <hr />
            <h1 className="heading">OUR CORE FEATURES</h1>
            <hr />
          </div>
          <p className="text-center">
            Akeshya is a forward-thinking and intelligent design firm that is
            technically and creatively capable of transforming your brand into
            its best digital self. Our approach to design and development
            results in compelling, engaging branding and immersive digital
            experiences that provide a value for money.
          </p>
        </div>
        <div className="feature-section fromY mt-5 flex flex-col gap-5 lg:grid lg:grid-cols-4">
          {featuresCard.map(({ icon, title }) => (
            <div
              key={title}
              className="flex items-center gap-2 bg-cardBg p-4 duration-500 hover:bg-[#e1f0fa] hover:text-darkblue"
            >
              {icon}
              <p className="font-raleway font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
