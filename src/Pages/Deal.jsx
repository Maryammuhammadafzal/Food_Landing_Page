import React from "react";
import Button from "../components/Button";
import DealImage from "../assets/dealImage.png";

const Deal = () => {
  return (
    <div className="w-full h-screen flex items-center text-white">
      <div className="w-full bg-gradient-to-tl h-[450px] max-lg:h-[400px] max-md:h-auto from-orange-400  to-red-700">

        <div className="content w-full p-6 max-md:gap-8 flex max-md:flex-col justify-between items-center h-full">
        {/* Content */}
          <div className="rightContent flex max-md:w-full max-md:p-0 max-md:items-center w-[60%] pl-12 flex-col">
            <h4 className="text-white text-xl pl-3 font-semibold capitalize">Hot Deal 🔥</h4>
            <h1 className="text-6xl font-medium max-lg:text-5xl max-md:text-5xl max-sm:text-3xl  max-md:text-center font-['Lobster'] my-5 ">
              Exclusive Food Deals – Delicious Savings Just for You!
            </h1>
          <div className="w-full mt-2 h-auto max-md:justify-center flex">
                  <Button borderColor="border-white" textColor="text-white"/>
          </div>
          </div>
          {/* Image */}
          <div className="rightimg  w-[40%] max-md:w-full h-auto flex justify-start max-md:justify-center items-center">
          <img src={DealImage} alt="food deal" className="w-auto h-auto max-md:h-[350px] max-md:w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
