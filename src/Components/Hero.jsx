const Hero = () => {
  return (
    <>
      <div className=" z-20 m-24 mx-64 bg-transparent text-[34px] leading-[47.6px] text-white ">
        <h1 className="">
          Hi, I'm{" "}
          <span className="z-20 bg-gradient-to-r from-slate-200 to-gray-700  bg-clip-text text-[40px] font-semibold  text-transparent">
            Erion
          </span>
          , a web developer specializing in 3D designs and interactive
          experiences. I enjoy creating meaningful narratives through motion
          graphics and experimenting with new technology to convey stories
        </h1>

        <a className="z-20 mt-14 inline-block border-b-2">View My Work</a>
      </div>
    </>
  );
};

export default Hero;
