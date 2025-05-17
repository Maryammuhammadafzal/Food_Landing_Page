import React, { useEffect } from "react";
import Button from "../components/Button";
import Popular from "./Popular";
import About from "./About";
import Deal from "./Deal";
import Menu from "./Menu";
import ChooseUs from "./ChooseUs";
import Testimonial from "./Testimonial";
import News from "./News";
import Contact from "./Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true, // Only animate once
  });
}, []);
  return (
    <>
      <div className="w-full h-auto max-xl:py-3  py-8 font-['Jost']">
        <div className="w-[65%] max-[1180px]:w-[75%] mx-auto max-lg:w-[90%] max-md:w-full  max-lg:px-3 h-[75vh] max-sm:h-[65vh] max-xl:h-[60vh] flex flex-col justify-center items-center ">
          <h1 data-aos="fade-down" className="text-6xl font-medium text-[#9B1B30] max-[880px]:text-5xl  text-center font-['Lobster'] max-[380px]:text-3xl">
            Welcome to [Your Brand Name] Where Every Bite is a Delight!
          </h1>
          <p data-aos="fade-up" className="py-8 px-15  max-lg:px-3 max-lg:text-md max-md:text-sm text-center text-lg ">
            At [Your Brand Name], we believe that food is more than just
            sustenance; it’s an experience. We bring you a carefully crafted
            menu, designed to tantalize your taste buds and satisfy your
            cravings. From freshly prepared appetizers to hearty main courses
            and indulgent desserts, every dish is made with love and passion.
          </p>
          <Button animation="fade-up" />
        </div>
      </div>
      <Popular />
      <About />
      <Deal />
      <Menu />
      <ChooseUs />
      <Testimonial />
      <News />
      <Contact />
    </>
  );
};

export default Home;
