import SocialIcons from "../../UI/SocialIcons/SocialIcons";
import HeroButton from "../../UI/HeroButton/HeroButton";
import StarsButton from "../../UI/StarsButton/StarsButton";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-effect w-full bg-transparent   backdrop-blur-[7px]">
        <div className="gradient1 "></div>
        <div className="gradient2 "></div>
        <div className=" mx-auto flex h-[97vh] w-[60%] flex-col justify-center  bg-transparent    text-[34px] leading-[47.6px] text-white ">
          <h2 className="hero__header">Hi, I'm Erion</h2>
          <p>
            a <span className=" font-semibold">web developer</span> specializing
            in 3D designs and interactive experiences. I enjoy creating
            meaningful narratives through motion graphics and experimenting with
            new technology to convey stories.
          </p>
          {/* <a className=" mt-14 w-max border-b-2">View My Work</a> */}
          <HeroButton />

          {/* <StarsButton /> */}
          <SocialIcons />
        </div>
      </div>
    </>
  );
};

export default Hero;
