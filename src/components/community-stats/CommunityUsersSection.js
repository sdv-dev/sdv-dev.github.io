import React, { useState } from "react";
import DotSlider from "../common/DotSlider";

export default function CommunityUsersSection() {
  const slides = [
    {
      imgSrc: "",
      title: "",
      link: "",
    },
    {
      imgSrc: "",
      title: "",
      link: "",
    },
    {
      imgSrc: "",
      title: "",
      link: "",
    },
  ];
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);

  return (
    <div className="container w-full flex flex-col py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-0">
      <h2 className="text-midnight-950 text-2xl font-medium leading-[36px] tracking-xs pb-12">
        Users of community
      </h2>
      <div className=""></div>
      <div className="mx-auto mt-5 lg:mt-12">
        <DotSlider
          sliderItems={slides}
          activeIndex={activeSliderIndex}
          onClick={(ind) => setActiveSliderIndex(ind)}
        />
      </div>
    </div>
  );
}
