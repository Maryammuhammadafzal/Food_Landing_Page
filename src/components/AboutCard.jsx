import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../popular.css";
import { MdFastfood } from "react-icons/md";

const AboutCard = () => {
  const about_card_data = [
    {
      card_title: "Super Quality Food",
      card_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      card_title: "Super Quality Food",
      card_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      card_title: "Qualified Chefs",
      card_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      card_title: "Qualified Chefs",
      card_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];
  return (
    <>
      {about_card_data.map(({ card_title, card_description }) => (
        <div className="popular-card  w-[280px] max-md:w-[220px] max-sm:w-[160px] py-3 h-auto flex gap-4 max-sm:gap-1 font-['Jost']">
         
                 <MdFastfood  size={60} className="text-orange-500 max-md:w-[40px] max-sm:w-[30px]" />
         

          {/* Content */}
          <div className="flex flex-col w-full justify-end">
            <h3 className="text-lg text-red-700 font-semibold max-sm:text-[14px]">{card_title}</h3>
            <p className="text-xs w-full max-sm:text-[10px]">{card_description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutCard;
