import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Blob from "./Components/BlobEffect.jsx";

function App() {
  return (
    <>
      <div className=" fixed z-0" id="stars"></div>
      <div className=" fixed z-0" id="stars2"></div>
      <div className=" fixed z-0" id="stars3"></div>
      <div className=" mx-auto max-w-[1280px]   "></div>

      <div className="mx-auto max-w-[1460px] overflow-hidden ">
        <div className="relative mx-auto mt-5 overflow-hidden rounded-3xl bg-transparent">
          <div className="">
            <Navbar />
          </div>
          <div className=" mt-5 h-full w-full bg-transparent py-14 backdrop-blur-[4px]">
            <Hero className="" />
          </div>
          <Blob />
        </div>
      </div>
    </>
  );
}

export default App;
