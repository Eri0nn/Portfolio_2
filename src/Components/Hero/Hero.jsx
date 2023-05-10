const Hero = () => {
  return (
    <>
      <div className="  w-full bg-transparent   backdrop-blur-[7px]">
        <div className="gradient1"></div>
        <div className="gradient2"></div>
        <div className="  mx-auto flex h-[92vh] w-[60%]  flex-col   bg-transparent text-[34px] leading-[47.6px] text-white ">
          <h2>Hi, I'm Erion</h2>
          <p>
            a web developer specializing in 3D designs and interactive
            experiences. I enjoy creating meaningful narratives through motion
            graphics and experimenting with new technology to convey stories.
          </p>
          <a className=" mt-14 w-max border-b-2">View My Work</a>
        </div>
      </div>
    </>
  );
};

export default Hero;
