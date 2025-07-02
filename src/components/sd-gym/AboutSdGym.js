import React from "react";
import aboutSdGym from "../../../static/about-sd-gym.png";

const AboutSdGym = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="container w-full flex flex-col py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-0">
        <h1 className="heading-600-lg text-[36px] md:text-5xl text-center">
          About SDGym
        </h1>
        <img src={aboutSdGym} alt="About SdGym" className="my-8 md:my-12" />
      </div>
    </div>
  );
};

export default AboutSdGym;
