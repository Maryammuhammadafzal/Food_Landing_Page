import React, { useEffect } from "react";
import AboutImage1 from "../assets/about-image1.png";
import AboutImage2 from "../assets/about-image2.png";
import SubHeading from "../components/SubHeading";
import Heading from "../components/Heading";
import AboutCard from "../components/AboutCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true, // Only animate once
  });
}, []);
  return (
    <div className="w-full max-[1240px]:h-auto h-screen py-8 max-md:py-3 min-xl:py-20 font-['Jost'] overflow-hidden relative flex items-start">
      <div className="leftImage w-fit h-full absolute top-15 -left-75">
        <img
          src={AboutImage1}
          alt="burger image"
          data-aos="fade-left"
          className="w-[650px] h-[600px] transform scale-x-[-1] rounded-full object-cover max-[1240px]:hidden"
        />
      </div>
      <div className="w-[50%] max-[1240px]:w-[80%] max-lg:w-[90%] max-[800px]:w-full mx-auto max-[800px]:mx-0 max-lg:px-3 max-sm:px-0 max-sm:w-full h-auto flex flex-col justify-between items-center">
        {/* Heading */}
        <div className="popular-heading flex justify-center items-center text-center flex-col">
          <SubHeading text="About Us" />
          <Heading text="A Passion for Culinary Excellence" />
          <p className="py-8 px-15 max-lg:px-3 max-lg:text-md max-md:text-sm text-center text-lg">
            At [Your Brand Name], we believe that food is more than just
            sustenance; it’s an experience. We bring you a carefully crafted
            menu, designed to tantalize your taste buds and satisfy your
            cravings. From freshly prepared appetizers to hearty main courses
            and indulgent desserts, every dish is made with love and passion.
          </p>
        </div>

        <div className="card w-full max-[1240px]:w-[75%] max-lg:w-[90%] max-[800px]:w-full flex flex-wrap justify-center items-center gap-5 max-sm:w-full max-sm:px-1 space-x-3 max-[800px]:space-x-1">
          <AboutCard />
        </div>
      </div>
      <div className="rightImage w-fit h-full absolute top-15 -right-75">
        <img
          src={AboutImage2}
          alt="burger image"
          data-aos="fade-right"
          className="w-[650px] h-[600px] transform scale-x-[-1] rounded-full object-cover max-[1240px]:hidden"
        />
      </div>
    </div>
  );
};

export default About;
