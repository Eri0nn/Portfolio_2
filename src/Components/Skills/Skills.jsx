import React from "react";
import AuroraText from "../../UI/AuroraText/AuroraText";
import Solar2 from "../../UI/SolarTwo/SolarTwo.jsx";
import "./Skills.css";
import MagicCard from "../../UI/MagicCard/MagicCard";
import GradientCard from "../../UI/GradientCard/GradientCard";

const Skills = () => {
  return (
    <>
      <div className=" pointer-events-auto mx-auto mt-24 flex h-[85vh] justify-evenly">
        <div className="flex w-[35%] flex-col justify-center   overflow-visible rounded-2xl bg-transparent   backdrop-blur-[7px]">
          {/* <h1>Skills</h1> */}
          <GradientCard span="Front-End" title="Developer" />
          <GradientCard span="Back-End" title="Developer" />

          {/* <AuroraText /> */}
        </div>

        <div className="  w-[45%] ">
          <Solar2 />
        </div>
      </div>
    </>
  );
};

export default Skills;
