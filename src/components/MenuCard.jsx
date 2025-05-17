import React, { useEffect } from "react";
import { Link } from "react-router";
import MenuImage1 from "../assets/menu-image1.png";
import MenuImage2 from "../assets/menu-image2.png";
import MenuImage3 from "../assets/menu-image3.png";
import MenuImage4 from "../assets/menu-image4.png";
import MenuImage5 from "../assets/menu-image5.png";
import AOS from "aos";
import "aos/dist/aos.css";
const MenuCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Only animate once
    });
  }, []);
  let menu_data = [
    {
      menuImage: MenuImage1,
      menuTitle: "Crispy Chicken Wings - $8.99",
      menuDescription: "Perfectly fried and tossed in a spicy sauce.",
    },
    {
      menuImage: MenuImage2,
      menuTitle: "Mozzarella Sticks - $6.99",
      menuDescription: "Golden brown and served with marinara sauce.",
    },
    {
      menuImage: MenuImage3,
      menuTitle: "Loaded Nachos - $9.99",
      menuDescription: "Topped with cheese, jalapeños, and salsa.",
    },
    {
      menuImage: MenuImage4,
      menuTitle: "Bruschetta - $5.99",
      menuDescription:
        "Fresh tomatoes, basil, and balsamic glaze on toasted bread.",
    },
    {
      menuImage: MenuImage5,
      menuTitle: "Garlic Butter Shrimp - $10.99",
      menuDescription: "Juicy shrimp sautéed in garlic butter.",
    },
    {
      menuImage: MenuImage1,
      menuTitle: "Crispy Chicken Wings - $8.99",
      menuDescription: "Perfectly fried and tossed in a spicy sauce.",
    },
    {
      menuImage: MenuImage2,
      menuTitle: "Mozzarella Sticks - $6.99",
      menuDescription: "Golden brown and served with marinara sauce.",
    },
    {
      menuImage: MenuImage3,
      menuTitle: "Loaded Nachos - $9.99",
      menuDescription: "Topped with cheese, jalapeños, and salsa.",
    },
    {
      menuImage: MenuImage4,
      menuTitle: "Bruschetta - $5.99",
      menuDescription:
        "Fresh tomatoes, basil, and balsamic glaze on toasted bread.",
    },
    {
      menuImage: MenuImage5,
      menuTitle: "Garlic Butter Shrimp - $10.99",
      menuDescription: "Juicy shrimp sautéed in garlic butter.",
    },
  ];
  return (
    <div className="w-[85%] h-auto flex flex-col justify-center items-center px-3 py-6 rounded-2xl bg-[#F7E1A4] max-[830px]:w-[98%]">
      <div className="head w-full h-auto flex justify-center items-center">
        <ul className="w-full h-auto flex justify-center items-center gap-8 max-sm:gap-4">
          <li className="w-fit h-fit text-lg text-red-700 font-semibold max-sm:text-[12px]">
            <Link to="">Appetizers</Link>
          </li>
          <li className="w-fit h-fit text-lg text-red-700 font-semibold max-sm:text-[12px]">
            <Link to="">Main Course</Link>
          </li>
          <li className="w-fit h-fit text-lg text-red-700 font-semibold max-sm:text-[12px]">
            <Link to="">Deserts</Link>
          </li>
          <li className="w-fit h-fit text-lg text-red-700 font-semibold max-sm:text-[12px]">
            <Link to="">Beverages</Link>
          </li>
        </ul>
      </div>
      <div className="body w-full h-auto flex justify-center p-2 items-center">
        <ul className="w-full h-auto flex flex-wrap justify-center gap-3 items-center">
          {menu_data.map(({ menuImage, menuDescription, menuTitle } , index) => (
            <li
            key={index}
              data-aos="fade-left"
              className="w-[40%] h-[70px]  flex gap-2 items-center justify-start max-[1190px]:w-[48%] max-sm:w-[393px]"
            >
              <div className="image h-12 w-12 max-md:h-10 max-md:w-10">
                <img
                  src={menuImage}
                  alt={menuTitle}
                  className="w-auto h-auto object-cover"
                />
              </div>
              <div className="content w-fit h-fit flex flex-col ">
                <h2 className="text-orange-400 text-lg font-semibold max-md:text-[14px]">
                  {menuTitle}
                </h2>
                <p className="text-xs">{menuDescription}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuCard;
