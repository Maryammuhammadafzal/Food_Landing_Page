import React from "react";
import SubHeading from "../components/SubHeading.jsx";
import Heading from "../components/Heading.jsx";
import NewsCard from "../components/NewsCard.jsx";

const News = () => {
  return (
    <div className="w-full h-auto  py-8 font-['Jost'] overflow-hidden">
      <div className="w-[80%] mx-auto max-lg:w-full max-lg:px-3  h-auto flex flex-col justify-between items-center">
        {/* Heading */}
        <div className="heading flex w-full text-center justify-center items-center flex-col">
          <SubHeading text="Latest Food News" />
          <Heading text="Stay Updated with the Latest Food Trends & News" />
        </div>

        {/* Cards */}
        <div className="cards w-full justify-center gap-4 space-y-5 flex items-center py-10 h-auto max-[1200px]:flex-wrap">
                <NewsCard/>
        </div>
      </div>
    </div>
  );
};

export default News
