import React from "react";
import NightToggle from "../UI/NightToggle/NightToggle.jsx";
import "../UI/StartAnimation.css";

const Navbar = () => {
  return (
    <>
      <nav className=" navbar sticky top-11 z-50 mx-14 flex items-center justify-between text-white">
        <div className=" flex flex-col">
          <h1 className="  text-[0.7rem]">Erion</h1>
          <h1 className=" relative left-4 text-[0.7rem]">Beka</h1>
        </div>

        <div className=" flex cursor-pointer items-center justify-between">
          <h1 className="pointer-events-auto mr-10 border-b-2 text-[0.7rem] transition-colors hover:border-purple-500">
            Projects
          </h1>
          <h1 className="pointer-events-auto mr-8 border-b-2 text-[0.7rem] transition-colors  hover:border-purple-500">
            About
          </h1>
          <h1 className="pointer-events-auto mr-8 border-b-2 text-[0.7rem] transition-colors  hover:border-purple-500">
            Contact
          </h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
