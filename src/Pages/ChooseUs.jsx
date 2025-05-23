import React, { useEffect } from "react";
import AboutImage1 from "../assets/choose-us-image.png";
import SubHeading from "../components/SubHeading";
import Heading from "../components/Heading";
import AOS from 'aos';
import 'aos/dist/aos.css';
const ChooseUs = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true, // Only animate once
  });
}, []);
  const choose_data = [
    {
      title: "Premium Ingredients",
      description:
        " We use only the freshest and finest ingredients to ensure quality in every dish.",
    },
    {
      title: "Authentic Recipes:",
      description:
        "Our dishes are inspired by traditional cooking techniques and modern innovations.",
    },
    {
      title: "Fast & Reliable Delivery:",
      description:
        "Get your favorite meals delivered straight to your doorstep, hot and fresh.",
    },
  ];
  return (
    <div className="w-full h-screen max-xl:h-auto max-xl:py-40 max-lg:py-30 max-sm:py-6 font-['Jost'] flex  justify-end overflow-hidden relative">
      <div className="leftImage max-md:hidden w-auto max-lg:w-[45%] h-full absolute top-0 left-0">
        <img
          src={AboutImage1}
          alt="burger image"
          data-aos="fade-right"
          className="w-auto h-auto rounded-50 object-cover "
        />
      </div>
      <div className="w-[65%]  max-md:w-full max-xl:w-[55%] max-lg:px-3 gap-10 max-sm:pl-1  h-auto flex flex-col justify-center items-start">
        {/* Heading */}
        <div className="popular-heading flex justify-center flex-col ">
          <div className="flex gap-2">
            <hr className="w-2 h-full rounded-2xl bg-amber-400" />
            <div>
              <SubHeading text="Our Best" />
              <Heading text="Why Choose Us?" />
            </div>
          </div>
        </div>

        <div className="point w-full flex flex-col justify-center items-start gap-5 pl-5">
          <ul className="w-[60%] pl-2 space-y-10">
            {choose_data.map(({ title, description }) => (
              <li key={title} className="text-xl max-sm:text-[16px] list-disc">
                <span className="text-black font-semibold pr-2">
                  {title}
                </span>
               {description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
