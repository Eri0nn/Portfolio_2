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
    <div className="opening hide-UI view-2D zoom-large data-close controls-close">
      <div id="navbar">
        <a id="toggle-data" href="#data">
          <i className="icon-data"></i>Data
        </a>
        <h1>
          3D Solar System
          <br />
          <span>
            by{" "}
            <a href="https://twitter.com/JulianGarnier" target="_blank">
              @JulianGarnier
            </a>
          </span>
        </h1>
        <a id="toggle-controls" href="#controls">
          <i className="icon-controls"></i>Controls
        </a>
      </div>
      <div id="data">
        <a className="sun" title="sun" href="#sunspeed">
          Sun
        </a>
        <a className="mercury" title="mercury" href="#mercuryspeed">
          Mercury
        </a>
        <a className="venus" title="venus" href="#venusspeed">
          Venus
        </a>
        <a className="earth active" title="earth" href="#earthspeed">
          Earth
        </a>
        <a className="mars" title="mars" href="#marsspeed">
          Mars
        </a>
        <a className="jupiter" title="jupiter" href="#jupiterspeed">
          Jupiter
        </a>
        <a className="saturn" title="saturn" href="#saturnspeed">
          Saturn
        </a>
        <a className="uranus" title="uranus" href="#uranusspeed">
          Uranus
        </a>
        <a className="neptune" title="neptune" href="#neptunespeed">
          Neptune
        </a>
      </div>
      <div id="controls">
        <label className="set-view">
          <input type="checkbox" />
        </label>
        <label className="set-zoom">
          <input type="checkbox" />
        </label>
        <label>
          <input type="radio" className="set-speed" name="scale" checked />
          <span>Speed</span>
        </label>
        <label>
          <input type="radio" className="set-size" name="scale" />
          <span>Size</span>
        </label>
        <label>
          <input type="radio" className="set-distance" name="scale" />
          <span>Distance</span>
        </label>
      </div>
      <div id="universe" className="scale-stretched">
        <div id="galaxy">
          <div id="solar-system" className="earth">
            <div id="mercury" className="orbit">
              <div className="pos">
                <div className="planet">
                  <dl className="infos">
                    <dt>Mercury</dt>
                    <dd>
                      <span></span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="venus" className="orbit">
              <div className="pos">
                <div className="planet">
                  <dl className="infos">
                    <dt>Venus</dt>
                    <dd>
                      <span></span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="earth" className="orbit">
              <div className="pos">
                <div className="orbit">
                  <div className="pos">
                    <div className="moon"></div>
                  </div>
                </div>
                <div className="planet">
                  <dl className="infos">
                    <dt>Earth</dt>
                    <dd>
                      <span></span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="mars" className="orbit">
              <div className="pos">
                <div className="planet">
                  <dl className="infos">
                    <dt>Mars</dt>
                    <dd>
                      <span></span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="jupiter" className="orbit">
              <div className="pos">
                <div className="planet">
                  <dl className="infos">
                    <dt>Jupiter</dt>
                    <dd>
                      <span></span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="uranus" className="orbit">
              <div className="pos">
                <div className="planet">
                  <dl className="infos">
                    <dt>Uranus</dt>
                    <dd>
                      <span></span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="saturn" className="orbit">
              <div className="pos">
                <div className="planet">
                  <div className="ring"></div>
                  <dl className="infos">
                    <dt>Saturn</dt>
                    <dd>
                      <span></span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            <div id="sun">
              <dl className="infos">
                <dt>Sun</dt>
                <dd>
                  <span></span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarSystem;
