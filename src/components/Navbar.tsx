import { Link, NavLink } from "react-router-dom";
import NavigationButton from "./NavigationButton";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  // const navLinks = [
  //   "PRICING",
  //   "SAMPLES",
  //   "ABOUT US",
  //   "CAREERS",
  //   "CONTACT",
  //   "BLOG",
  // ];

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="padding-x-1 flex items-center justify-between h-[90px]">
      <Link to="/">
        <span className="font-bold text-2xl xxs:text-red-500">PIXESSA</span>
      </Link>
      {/* WIDE SCREEN NAV LINKS */}
      <div className="flex justify-between w-[45%] items-center md-lg-max:hidden">
        <NavLink to="/" className={"text-sm"}>
          PRICING
        </NavLink>
        <NavLink to="/" className={"text-sm"}>
          SAMPLES
        </NavLink>
        <NavLink to="/" className={"text-sm"}>
          ABOUT US
        </NavLink>
        <NavLink to="/" className={"text-sm"}>
          CAREERS
        </NavLink>
        <NavLink to="/" className={"text-sm"}>
          CONTACT
        </NavLink>
        <NavLink to="/" className={"text-sm"}>
          BLOG
        </NavLink>
      </div>
      <div className="flex justify-between items-center w-fit ">
        <NavigationButton
          to="sign-up"
          className={
            "h-[48px] w-[130px] text-xs border-[1px] rounded border-gray-400 mr-4 md-lg-max:hidden"
          }
        >
          LOGIN / SIGN UP
        </NavigationButton>

        <div className="flex justify-between items-center">
          <CiGlobe className="w-[20px] h-[20px]" />
          <span className="text-sm font-bold mx-1">ENG</span>
          <MdOutlineKeyboardArrowDown className="w-[20px] h-[20px]" />
        </div>

        {/* TOGGLE ICON */}
        <div
          className="cursor-pointer ml-4 md-lg-min:hidden"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? <IoClose size={30} /> : <IoMenuSharp size={30} />}
        </div>

        {/* MENU */}

        {toggleMenu && (
          <div className="font-semibold flex flex-col w-[60%] pr-7 h-fit border-r-gray-400 border-b-gray-400 border-[0.5px] bg-white fixed left-0 top-0 pl-10 py-16 z-10">
            <Link to="/">
              <span className="font-bold text-3xl xxs:text-red-500">
                PIXESSA
              </span>
            </Link>

            {/* SMALLER SCREENS NAV LINKS */}
            <NavLink to="/" className={"text-sm mt-12"}>
              PRICING
            </NavLink>
            <NavLink to="/" className={"text-sm mt-12"}>
              SAMPLES
            </NavLink>
            <NavLink to="/" className={"text-sm mt-12"}>
              ABOUT US
            </NavLink>
            <NavLink to="/" className={"text-sm mt-12"}>
              CAREERS
            </NavLink>
            <NavLink to="/" className={"text-sm mt-12"}>
              CONTACT
            </NavLink>
            <NavLink to="/" className={"text-sm mt-12"}>
              BLOG
            </NavLink>

            <NavigationButton
              to="sign-up"
              className={
                "h-[48px] w-[130px] text-xs border-[1px] rounded border-gray-400 mt-12"
              }
            >
              LOGIN / SIGN UP
            </NavigationButton>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
