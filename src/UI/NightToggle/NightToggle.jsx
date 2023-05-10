import React from "react";
import "./NightToggle.css";

const NightToggle = () => {
  return (
    <div>
      <div className="wrapper pt-[5px]">
        <input type="checkbox" name="checkbox" className="switch" />
      </div>
    </div>
  );
};

export default NightToggle;
