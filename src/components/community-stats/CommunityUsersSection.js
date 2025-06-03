import React, { useState } from "react";
import DotSlider from "../common/DotSlider";
import DataceboLogo from "../common/DataceboLogo";

export default function CommunityUsersSection() {
  const slides = [
    {
      imgSrc: "",
      title:
        "JP Morgan Chase lorem ipsum dolorem lorem ipsum dolor lorem ipsum dolor dolor dolor dolor",
      link: "/",
    },
    {
      imgSrc: "",
      title: "MAPFRE insurance improves fraud detection by xx% using SDV",
      link: "/",
    },
    {
      imgSrc: "",
      title: "Kaggle releases data for 11 competitions using SDV",
      link: "/",
    },
    {
      imgSrc: "",
      title: "Spar Nord Bank is  using SDV",
      link: "/",
    },
  ];
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);
  const activeSlide = slides[activeSliderIndex];

  return (
    <div className="container w-full flex flex-col py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-0">
      <h2 className="text-midnight-950 text-2xl font-medium leading-[36px] tracking-xs pb-12">
        Users of community
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="h-[200px] bg-blue-700 rounded-t-20"></div>
        <div className="flex flex-col gap-6 pb-8 px-6 pt-6 border-b border-r border-l border-midnight-50 rounded-b-20 bg-midnight-25">
          <p className="text-midnight-950 text-2xl font-medium leading-[30px] tracking-xs line-clamp-3 min-h-[90px]">
            {activeSlide.title}
          </p>
          <div>
            <a
              href={activeSlide.link}
              target="_blank"
              rel="noreferrer"
              className="text-lg text-blue-600 hover:text-midnight-950 font-semibold duration-200 leading-none cursor-pointer"
            >
              Learn more
            </a>
          </div>
          <DataceboLogo />
        </div>
      </div>
      <div className="mx-auto mt-12">
        <DotSlider
          sliderItems={slides}
          activeIndex={activeSliderIndex}
          onClick={(ind) => setActiveSliderIndex(ind)}
        />
      </div>
    </div>
  );
}
