import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Blob from "./Components/BlobEffect.jsx";
import "./Components/test.css";

function App() {
  return (
    <>
      <div className=" fixed z-0" id="stars"></div>
      <div className=" fixed z-0" id="stars2"></div>
      <div className=" fixed z-0" id="stars3"></div>

      <Navbar />

      <div className="animation-container ">
        <div className="animation-box mx-5 overflow-hidden">
          <div className="relative mx-auto overflow-hidden rounded-3xl bg-transparent">
            <div className="  w-full bg-transparent   backdrop-blur-[7px]">
              <div className="gradient1"></div>
              <div className="gradient2"></div>

              <Hero className="" />
            </div>
            <Blob />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
