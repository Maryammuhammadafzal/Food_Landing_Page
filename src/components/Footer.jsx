import React from "react";
import SubHeading from "./subHeading";

const Footer = () => {
  return (
    <div className="w-full text-white h-auto gap-5 flex justify-center items-center p-3 bg-red-900">
      <div className="academySection w-[80%]  h-auto flex flex-col gap-4 justify-center items-center">
        <div className="footerContent max-sm:justify-center w-full h-auto flex flex-wrap justify-between mb-3 ">
          <div className="left w-[35%] max-sm:w-[100%] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center p-3 h-auto">
            {/* Logo */}
            <div className="logo ">
              <h3 className="font-extrabold text-4xl tracking-wide uppercase">
                Logo
              </h3>
            </div>
            <p className="text-md my-5 max-sm:w-[70%] max-sm:text-center font-[Nunito Sans] max-md:text-[.9rem] max-sm:text-[1rem]  font-[400]">
              At [Your Brand Name], we believe that food is more than just
              sustenance; it’s an experience. We bring you a carefully crafted
              menu, designed to tantalize your taste buds and satisfy your
              cravings.
            </p>
          </div>

          <div className="middle max-sm:w-[50%] w-[20%] p-3 h-auto">
            <h4 className="text-white text-2xl font-bold capitalize">
              Quick Links
            </h4>
            <hr className="w-17 h-[2px] mt-1 pl-2 bg-orange-400" />
            <ul className="list-none py-2 mt-5 gap-2 flex flex-col ">
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Home
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  About Us
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Academic
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Admission
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="middle max-sm:w-[50%] w-[20%] p-3 h-auto">
            <h4 className="text-white text-2xl font-bold capitalize">Menu</h4>
            <hr className="w-10 h-[2px] mt-1 pl-2 bg-orange-400" />
            <ul className="list-none py-2 mt-5 gap-2 flex flex-col ">
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Appetizers
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Main Course
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Desserts
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]  font-[400]">
                <a href="#" className="text-lg">
                  Beverages
                </a>
              </li>
            </ul>
          </div>
          <div className="left max-sm:w-[50%]  w-[20%] p-3 h-auto">
            <h4 className="text-white text-2xl font-bold capitalize">Contact</h4>
            <hr className="w-10 h-[2px] mt-1 pl-2 bg-orange-400" />
            <ul className="list-none py-2 mt-5 gap-2 flex flex-col ">
              <li className="text-lg font-[Nunito Sans]   font-[400]">
               <p className="text-2xl">Monday-Friday <span className="text-orange-500">8am</span> to <span className="text-orange-500">4pm</span></p> 
                {/* <a
                  href="#"
                  className=" hover:text-[#2D6A4F] flex gap-2 items-center max-[900px]:text-[1rem] font-semibold text-2xl p-1"
                > */}
                  {/* <img
                    src={Facebook}
                    alt="facebook"
                    className="w-[25px] h-[25px] max-[1050px]:w-[20px] max-[1050px]:h-[20px]"
                  /> */}
                  {/* Facebook
                </a> */}
              </li>
              <li className="text-lg font-[Nunito Sans]   font-[400]">
                 <p className="text-2xl">Saturday<span className="text-orange-500">8am</span> to <span className="text-orange-500">12pm</span></p>
                {/* <a
                  href="#"
                  className=" hover:text-[#2D6A4F] flex gap-2 items-center max-[900px]:text-[1rem] font-semibold text-2xl p-1"
                > */}
                  {/* <img
                    src={Instagram}
                    alt="facebook"
                    className="w-[25px] h-[25px] max-[1050px]:w-[20px] max-[1050px]:h-[20px]"
                  /> */}
                  {/* Instagram
                </a> */}
              </li>
              <li className="text-lg font-[Nunito Sans]  relative font-[400]">
                <input type="email" placeholder="Enter Email" className="py-2 px-5 rounded-xl"/>
                <button></button>
                {/* <a
                  href="#"
                  className=" hover:text-[#2D6A4F] flex gap-2 items-center max-[900px]:text-[1rem] font-semibold text-2xl p-1"
                > */}
                  {/* <img
                    src={Twitter}
                    alt="facebook"
                    className="w-[25px] h-[25px] max-[1050px]:w-[20px] max-[1050px]:h-[20px]"
                  /> */}
                  {/* Twitter
                </a> */}
              </li>
              <li className="text-lg font-[Nunito Sans]   font-[400]">
                <a
                  href="#"
                  className=" hover:text-[#2D6A4F] flex gap-2 items-center max-[900px]:text-[1rem] font-semibold text-2xl p-1"
                >
                  {/* <img
                    src={LinkedIn}
                    alt="facebook"
                    className="w-[25px] h-[25px] max-[1050px]:w-[20px] max-[1050px]:h-[20px]"
                  /> */}
                  LinkedIn
                </a>
              </li>
              <li className="text-lg font-[Nunito Sans]   font-[400]">
                <a
                  href="#"
                  className=" hover:text-[#2D6A4F] flex gap-2 items-center max-[900px]:text-[1rem] font-semibold text-2xl p-1"
                >
                  {/* <img
                    src={Whatsapp}
                    alt="facebook"
                    className="w-[25px] h-[25px] max-[1050px]:w-[20px] max-[1050px]:h-[20px]"
                  /> */}
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
