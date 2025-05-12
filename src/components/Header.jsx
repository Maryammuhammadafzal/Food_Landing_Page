import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => { 
    if (window.innerWidth <= 769) {
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <header className="w-full h-auto  py-8 font-['Jost']">
      <div className="w-[80%] mx-auto max-lg:w-full max-lg:px-3  h-auto flex justify-between items-center ">
        {/* Logo */}
        <div className="logo ">
          <h3 className="font-extrabold text-2xl uppercase">Logo</h3>
        </div>

        <nav className="">
          <ul className="w-auto flex gap-5 max-lg:gap-2 justify-center items-center max-md:hidden">
            <li className="font-semibold px-2 text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold px-2 text-lg">
              <Link to="/">About Us</Link>
            </li>
            <li className="font-semibold px-2 text-lg">
              <Link to="/">Shop</Link>
            </li>
            <li className="font-semibold px-2 text-lg">
              <Link to="/">Pages</Link>
            </li>
            <li className="font-semibold px-2 text-lg">
              <Link to="/">Blog</Link>
            </li>
            <li className="font-semibold px-2 text-lg">
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <div className="icon-button flex gap-6 max-lg:gap-3 text-[#9B1B30]">
          <Link>
            <IoSearchSharp size={27} />
          </Link>
          <Link>
            <FiShoppingCart size={25} />
          </Link>
          <Link className="menu hidden max-md:block" onClick={toggleMenu}>
            <FiMenu size={25} />
          </Link>
        </div>
      </div>
      <div
        className={`dropdown-menu relative top-0 right-0  ${
          isMenuOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="drop absolute top-10 right-0  w-full h-auto min-md:hidden z-50 ">
          <nav className=" flex flex-col gap-4 justify-start items-center border-t-2 bg-white shadow-lg text-black ">
            <ul className="w-auto flex flex-col p-5 gap-7 justify-start items-center min-md:hidden">
              <li className="font-semibold px-2 text-lg">
                <Link to="/">Home</Link>
              </li>
              <li className="font-semibold px-2 text-lg">
                <Link to="/">About Us</Link>
              </li>
              <li className="font-semibold px-2 text-lg">
                <Link to="/">Shop</Link>
              </li>
              <li className="font-semibold px-2 text-lg">
                <Link to="/">Pages</Link>
              </li>
              <li className="font-semibold px-2 text-lg">
                <Link to="/">Blog</Link>
              </li>
              <li className="font-semibold px-2 text-lg">
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
