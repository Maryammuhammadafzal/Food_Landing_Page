import React from "react";
import SubHeading from "../components/SubHeading";
import Heading from "../components/Heading";
import MenuCard from "../components/MenuCard";

const Menu = () => {
  return (
      <div className="w-full h-auto max-lg:py-3 py-8 font-['Jost'] overflow-hidden">
      <div className="w-[80%] mx-auto max-lg:w-full max-lg:px-3  h-auto flex flex-col justify-center items-center">
        {/* Heading */}
        <div className="popular-heading flex w-full justify-center items-center text-center flex-col">
          <SubHeading text="Food Menu" />
          <Heading text="Our Delicious Menu – Indulge in Every Bite!" />
        </div>

        {/* Cards */}
        <div className="cards w-full justify-center gap-4 flex items-center  py-10 max-sm:py-3 h-auto max-lg:flex-wrap">
                <MenuCard/>
        </div>
      </div>
    </div>
  );
};

export default Menu;
