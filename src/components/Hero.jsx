import React from "react";
import Countdown from "react-countdown";

const Hero = () => {
  return (
    <div className="">
      <div className="grid justify-center items-center align-middle gap-4">
        <a href="https://onerpm.link/118885390996" target="_blank">
          <img className=" w-[700px]" src="entropia.jpeg" alt="" />
        </a>
        <div className="grid justify-center">
          <Countdown className=" text-gray-300 text-4xl" date={1716354000000} />
          <h1 className=" text-gray-300 text-3xl">DD:HH:MM:SS</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
