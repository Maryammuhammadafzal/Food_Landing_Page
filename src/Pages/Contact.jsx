import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  let contact_data = [
    {
      name: "Address:",
      link: "3891 Ranchview Dr. Richardson, California 62639",
    },
    {
      name: "Send Email:",
      link: "Info@gmail.com",
    },
    {
      name: "Call Emergency:",
      link: "+88 (308) 555-0121",
    },
  ];
  return (
    <div className="w-full h-[100px] max-sm:h-auto flex justify-center items-center bg-orange-400">
      <div className="w-full max-sm:hidden h-[100px] flex justify-evenly items-center  text-white max-sm:flex-wrap max-sm:h-auto max-sm:gap-5 py-4">
        {contact_data.map(({ name, link }) => (
          <div
            key={name}
            className="w-[200px] flex flex-col gap-2 max-sm:w-full max-sm:px-2"
          >
            <h3 className="font-semibold text-2xl">{name}</h3>
            <a href="{link}" className="text-[14px]">
              {link}
            </a>
          </div>
        ))}
      </div>
      <div className="w-full min-sm:hidden p-4 flex flex-col gap-3 justify-center items-center ">
         <h4 className="text-white text-2xl font-bold capitalize ">
         Newsletter
        </h4>
        <div className=" text-lg font-[Nunito Sans] max-sm:w-full  relative font-[400] my-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="py-2 bg-white text-black w-full placeholder:text-gray-400 px-5 text-[14px] rounded-xl"
          />
          <button className="absolute right-2 top-[5px] text-white  bg-orange-500 py-1 px-2 z-10 rounded-xl">
            <FaArrowRightLong />
          </button>
        </div>
        {/* <ul className="list-none w-full gap-2 flex flex-col ">
          <li className="text-lg font-[Nunito Sans]   font-[400]">
            <p className="max-sm:text-[18px]">
              Monday-Friday <span className=" ">8am</span> to{" "}
              <span className="">4pm</span>
            </p>
          </li>
          <li className="text-lg font-[Nunito Sans]   font-[400]">
            <p className="max-sm:text-[18px]">
              Saturday<span className="">8am</span> to{" "}
              <span className="">12pm</span>
            </p>
          </li>
          <li className="text-lg font-[Nunito Sans] max-sm:w-full  relative font-[400] my-4">
            <input
              type="email"
              placeholder="Enter Email"
              className="py-2 bg-white text-black w-full placeholder:text-gray-400 px-5 rounded-xl"
            />
            <button className="absolute right-2 top-1 bg-orange-500 p-2 z-10 rounded-xl">
              <FaArrowRightLong />
            </button>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Contact;
