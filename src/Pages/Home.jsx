import React from "react";
import Button from "../components/Button";
import Popular from "./POpular";
import About from "./About";
import Deal from "./Deal";
import ChooseUs from "./ChooseUs";
import Testimonial from "./Testimonial";
import News from "./News";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto  py-8 font-['Jost']">
        <div className="w-[65%] max-[1180px]:w-[75%] mx-auto max-lg:w-[90%] max-md:w-full  max-lg:px-3 h-[75vh] flex flex-col justify-center items-center ">
          <h1 className="text-6xl font-medium text-[#9B1B30] max-[880px]:text-5xl  text-center font-['Lobster']">
            Welcome to [Your Brand Name] Where Every Bite is a Delight!
          </h1>
          <p className="py-8 px-15 max-lg:px-3 max-lg:text-md text-center text-lg ">
            At [Your Brand Name], we believe that food is more than just
            sustenance; it’s an experience. We bring you a carefully crafted
            menu, designed to tantalize your taste buds and satisfy your
            cravings. From freshly prepared appetizers to hearty main courses
            and indulgent desserts, every dish is made with love and passion.
          </p>
          <Button />
        </div>
      </div>
      <Popular />
      <About />
      <Deal />
      <ChooseUs />
      <Testimonial />
      <News />
      <Contact />
    </>
  );
};

export default Home;
