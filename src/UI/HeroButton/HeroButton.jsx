import React from "react";
import "./HeroButton.css";

const HeroButton = () => {
  return (
    <>
      <div className=" mt-5 flex">
        <h1 className="buttoneffect  text-[14px]  " href="#">
          <span className=""></span>
          <span></span>
          <span></span>
          <span></span>
          View My Work{" "}
        </h1>
        {/* <h1 className="buttoneffect  text-[14px] " href="#">
          <span className=""></span>
          <span></span>
          <span></span>
          <span></span>
          Contact Me{" "}
        </h1>  */}
      </div>
    </>
  );
};

export default HeroButton;
