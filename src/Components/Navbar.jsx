import React from "react";
import NightToggle from "../UI/NightToggle";
import "./test.css";

const Navbar = () => {
  return (
    <nav className=" navbar sticky top-11 z-50 mx-14 flex items-center justify-between text-white">
      <div className=" flex flex-col">
        <h1 className=" text-[14px]">Erion</h1>
        <h1 className="relative left-4 text-[14px]">Beka</h1>
      </div>

      <div className=" flex items-center justify-between">
        <h1 className="mr-10 border-b-2 text-[14px]">Projects</h1>
        <h1 className="mr-8 border-b-2 text-[14px]">About</h1>
        <NightToggle />
      </div>
    </nav>
  );
};

export default Navbar;
