import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";
import Blob from "./UI/BlobEffect/BlobEffect.jsx";
import "./UI/StartAnimation.css";
import Skills from "./Components/Skills.jsx";

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
            <Hero className="" />
            <Blob />
          </div>
        </div>
      </div>

      <div className="">
        <Skills />
      </div>
    </>
  );
}

export default App;
