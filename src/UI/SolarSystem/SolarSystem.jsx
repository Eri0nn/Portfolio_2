import React from "react";
import { useEffect } from "react";
import "./SolarSystem.css";

const SolarSystem = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    const universe = document.querySelector("#universe");
    const solarsys = document.querySelector("#solar-system");

    const init = () => {
      body.classList.add("view-3D");
    };

    const setView = (view) => {
      universe.className = view;
    };

    init();

    // Cleanup
  }, []);

  return (
    <div className="opening view-2D zoom-large ">
      <div id="universe" className="scale-stretched">
        <div id="galaxy">
          <div id="solar-system" className="earth">
            <div id="mercury" className="orbit">
              <div className="pos">
                <div className="planet"></div>
              </div>
            </div>
            <div id="venus" className="orbit">
              <div className="pos">
                <div className="planet"></div>
              </div>
            </div>
            <div id="earth" className="orbit">
              <div className="pos">
                <div className="orbit">
                  <div className="pos">
                    <div className="moon"></div>
                  </div>
                </div>
                <div className="planet"></div>
              </div>
            </div>
            <div id="mars" className="orbit">
              <div className="pos">
                <div className="planet"></div>
              </div>
            </div>
            <div id="jupiter" className="orbit ">
              <div className="pos ">
                <div className="planet">
                  {/* <span className="absolute bottom-[-32px] left-3  text-[25px] font-semibold text-purple-600 ">
                    HTML
                  </span> */}
                </div>
              </div>
            </div>
            <div id="uranus" className="orbit">
              <div className="pos">
                <div className="planet"></div>
              </div>
            </div>
            <div id="saturn" className="orbit">
              <div className="pos">
                <div className="planet">
                  <div className="ring"></div>
                </div>
              </div>
            </div>

            <div id="sun"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarSystem;
