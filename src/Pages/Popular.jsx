import React from "react";
import SubHeading from "../components/subHeading.jsx";
import Heading from "../components/Heading.jsx";
import PopularCards from "../components/PopularCards.jsx";

const Popular = () => {
  return (
    <div className="w-full h-auto max-md:py-3 py-8 font-['Jost'] overflow-hidden">
      <div className="w-[80%] mx-auto max-lg:w-full max-lg:px-3  h-auto flex flex-col justify-between items-center">
        {/* Heading */}
        <div className="popular-heading flex w-full justify-center items-center flex-col">
          <SubHeading text="popular Dishes" />
          <Heading text="Savor Our Signature Creations" />
        </div>

        {/* Cards */}
        <div className="cards w-full justify-center gap-4 flex items-center  py-10 max-sm:py-3 h-auto max-lg:flex-wrap">
                <PopularCards/>
        </div>
      </div>
    </div>
  );
};

export default Popular;
