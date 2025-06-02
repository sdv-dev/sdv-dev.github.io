import React, { useState, useRef } from "react";
import firstSlide from "../../../static/first-slide.svg";
import secondSlide from "../../../static/second-slide.svg";
import thirdSlide from "../../../static/third-slide.svg";
import DotSlider from "../common/DotSlider";
import ArrowSlider from "../common/ArrowSlider";

export default function SdvOpenCoreSection() {
  const slides = [
    {
      link: "https://docs.sdv.dev/sdv",
      imgSrc: firstSlide,
    },
    {
      link: "https://docs.sdv.dev/sdv",
      imgSrc: secondSlide,
    },
    {
      link: "https://docs.sdv.dev/sdv",
      imgSrc: thirdSlide,
    },
  ];

  const [activeSliderIndex, setActiveSliderIndex] = useState(0);
  const activeSlide = slides[activeSliderIndex];

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    const threshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && activeSliderIndex < slides.length - 1) {
        setActiveSliderIndex((prev) => prev + 1);
      } else if (diff < 0 && activeSliderIndex > 0) {
        setActiveSliderIndex((prev) => prev - 1);
      }
    }
  };

  const handlePrev = () => {
    if (activeSliderIndex > 0) {
      setActiveSliderIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeSliderIndex < slides.length - 1) {
      setActiveSliderIndex((prev) => prev + 1);
    }
  };

  const isAtStart = activeSliderIndex === 0;
  const isAtEnd = activeSliderIndex === slides.length - 1;

  return (
    <div className="flex justify-center bg-white">
      <div className="container w-full flex flex-col py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-0">
        <h1 className="heading-600-lg pb-6 text-center md:leading-lg">
          SDV: An open core software for tabular Generative AI
        </h1>
        <div className="text-center pt-1.5">
          <a
            href={activeSlide.link}
            target="_blank"
            rel="noreferrer"
            className="text-lg text-blue-600 hover:text-midnight-950 font-semibold duration-200 leading-none cursor-pointer"
          >
            Learn more
          </a>
        </div>
        <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <img
            src={activeSlide.imgSrc}
            alt="Illustration"
            className="pt-12 pb-5"
          />
        </div>
        <div className="flex items-end justify-between">
          <div className="hidden md:block w-[132px]"></div>
          <DotSlider
            sliderItems={slides}
            activeIndex={activeSliderIndex}
            onClick={(ind) => setActiveSliderIndex(ind)}
          />
          <ArrowSlider
            onPrev={handlePrev}
            onNext={handleNext}
            disablePrev={isAtStart}
            disableNext={isAtEnd}
          />
        </div>
      </div>
    </div>
  );
}
