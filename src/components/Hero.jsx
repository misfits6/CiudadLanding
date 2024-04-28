import React from "react";
import Countdown from "react-countdown";

const Completionist = () => (
  <span className=" text-gray-300 text-4xl font-tac">AL AIRE!</span>
);

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span className=" text-gray-300 text-4xl font-tac">
        {days}:{hours}:{minutes}:{seconds}
        <h1 className="">DD:HH:MM:SS</h1>
      </span>
    );
  }
};

const Hero = () => {
  return (
    <div className="">
      <div className="grid justify-center items-center align-middle gap-4">
        <a href="https://onerpm.link/118885390996" target="_blank">
          <img className=" w-[700px]" src="entropia.jpeg" alt="" />
        </a>
        <div className="grid justify-center">
          <Countdown
            className=" text-gray-300 text-4xl"
            // date={Date.now() + 5000}
            date={1716354000000}
            renderer={renderer}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
