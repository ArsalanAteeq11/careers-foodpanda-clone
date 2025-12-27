import React from "react";

const Hero = ({ title }) => {
  return (
    <div className="bg-[#ff2b85] py-12 md:py-20">
      <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        {title}
      </h1>
    </div>
  );
};

export default Hero;
