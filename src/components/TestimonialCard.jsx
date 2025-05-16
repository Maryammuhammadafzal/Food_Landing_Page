import React from "react";
import { FaStar } from "react-icons/fa";
import userImage1 from "../assets/user-image1.png"
const TestimonialCard = () => {
  return (
    <div className="w-[350px] h-[350px] flex justify-center items-center max-sm:pl-12 max-sm:mx-auto">
      <div className="w-auto h-auto flex justify-center items-center relative">
        <div className="orange_card w-[300px] h-[300px] rounded-2xl bg-orange-500 absolute top-10 right-10 "></div>
        <div className="white_card w-[300px] h-[300px] rounded-2xl bg-white z-10">
          <div className="content w-full h-full flex justify-center items-center gap-3 p-6 text-black flex-col">
            <h2 className="customer_name text-3xl font-['Lobster']">
              “Eleanor Pena”
            </h2>
            <div className="rank flex gap-2 items-center justify-center text-amber-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-[12px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="customer-sign w-full h-full flex items-end justify-end">
              <div className="flex gap-2 items-center justify-end">
                <hr className="w-10 h-[1px] bg-gray-500" />
                <p className="customer-name text-sm font-['Lobster'] text-gray-500">
                  Eleanor Pena
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="user-image w-25 h-25 absolute -bottom-15 -left-15  z-20 rounded-full flex justify-center items-center">
                <img src={userImage1} alt="user image" className="object-cover w-auto h-auto" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
