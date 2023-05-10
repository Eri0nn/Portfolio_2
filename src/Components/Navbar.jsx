import React from "react";
import NightToggle from "../UI/NightToggle";

const Navbar = () => {
  return (
    <div className=" m-5 flex items-center justify-between text-white">
      <h1 className=" text-[14px]">Erion Beka</h1>
      <div className=" flex items-center justify-between">
        <h1 className="mr-10 border-b-2 text-[14px]">Projects</h1>
        <h1 className="mr-8 border-b-2 text-[14px]">About</h1>
        <NightToggle />
        
      </div>
    </div>
  );
};

export default Navbar;
