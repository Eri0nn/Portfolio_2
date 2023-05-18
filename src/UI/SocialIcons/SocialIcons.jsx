import React from "react";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-container pointer-events-auto z-50">
      <ul className="social-icons absolute bottom-7  right-16">
        <li>
          <a className="" href="#">
            <i className=" fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a className="" href="#">
            <i className=" fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a className="" href="#">
            <i className=" fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a className="" href="#">
            <i className=" fa fa-codepen"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
