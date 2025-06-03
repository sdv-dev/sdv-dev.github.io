import React, { useRef, useState, useEffect } from "react";
import dataceboIng from "../../../static/images/news/datacebo-ing.svg";
import newStack from "../../../static/images/news/new-stack.svg";
import aiConnectors from "../../../static/images/news/ai-connectors.svg";
import cag from "../../../static/images/news/cag.svg";
import forbes from "../../../static/images/news/forbes.svg";
import syntDataNews from "../../../static/images/news/synt-data-news.svg";
import ArrowSlider from "../common/ArrowSlider";
import DotSlider from "../common/DotSlider";
import NewsUpdate from "../common/NewsUpdate";

export default function LatestsNewsSubSection() {
  const newsAndUpdates = [
    {
      id: 1,
      imgSrc: newStack,
      label: "Blog",
      text: "What’s Next for Companies Built on Open Source?",
      link: "https://medium.com/ing-blog/how-ai-powered-synthetic-data-boosts-software-engineering-d89ad77ca2e7",
    },
    {
      id: 2,
      imgSrc: aiConnectors,
      label: "Announcements",
      text: "Introducing AI Connectors",
      link: "https://datacebo.com/announcements/introducing-ai-connectors",
    },
    {
      id: 3,
      imgSrc: cag,
      label: "Announcements",
      text: "Introducing Constraint-Augmented Generation (CAG)",
      link: "https://datacebo.com/announcements/introducing-cag",
    },
    {
      id: 4,
      imgSrc: dataceboIng,
      label: "Blog",
      text: "How ING Belgium Uses DataCebo’s SDV Enterprise to Create Synthetic Data for 100x the Test Coverage",
      link: "https://datacebo.com/blog/ing-belgium-sepa",
    },
    {
      id: 5,
      imgSrc: forbes,
      label: "News",
      text: "DataCebo Creates Synthetic Enterprise Data With Actually Useful Generative AI",
      link: "https://www.forbes.com/sites/justinwarren/2024/04/29/datacebo-creates-synthetic-enterprise-data-with-actually-useful-generative-ai",
    },
    {
      id: 6,
      imgSrc: syntDataNews,
      label: "News",
      text: "What is synthetic data — and how can it help you competitively?",
      link: "https://mitsloan.mit.edu/ideas-made-to-matter/what-synthetic-data-and-how-can-it-help-you-competitively",
    },
  ];

  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLg = windowWidth >= 1024;
  const isMd = windowWidth >= 768 && windowWidth < 1024;
  const visibleSlides = isLg ? 2 : 1;
  const maxSlide = newsAndUpdates.length - visibleSlides;
  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide === maxSlide;

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const containerWidth = scrollRef.current?.offsetWidth || 0;
  const cardWidth = isLg
    ? containerWidth / 2
    : isMd
    ? containerWidth * 0.85
    : containerWidth;

  const translateX = -(currentSlide * cardWidth);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const minSwipe = 50;

    if (Math.abs(deltaX) > minSwipe) {
      if (deltaX > 0 && !isAtEnd) {
        handleNext();
      } else if (deltaX < 0 && !isAtStart) {
        handlePrev();
      }
    }
  };

  return (
    <div className="flex justify-center bg-white mt-[72px]">
      <div className="container w-full flex flex-col px-4 md:px-5 lg:px-0">
        <div className="flex justify-between items-center pb-8 md:pb-12">
          <h2 className="text-midnight-950 font-medium leading-[30px] text-lg md:text-xl lg:text-2xl md:leading-9 tracking-lg md:tracking-md lg:tracking-xs">
            Latest news and updates
          </h2>
          <div className="hidden md:block">
            <ArrowSlider
              onPrev={handlePrev}
              onNext={handleNext}
              disablePrev={isAtStart}
              disableNext={isAtEnd}
            />
          </div>
        </div>
        <div className="overflow-hidden" ref={scrollRef}>
          <div className="relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${translateX}px)` }}
              onTouchStart={!isLg ? handleTouchStart : undefined}
              onTouchMove={!isLg ? handleTouchMove : undefined}
              onTouchEnd={!isLg ? handleTouchEnd : undefined}
            >
              {newsAndUpdates.map((n) => (
                <div
                  key={n.id}
                  className={`shrink-0 md:px-4 ${
                    isLg ? "w-1/2" : isMd ? "w-[85%]" : "w-full"
                  }`}
                >
                  <NewsUpdate
                    imgSrc={n.imgSrc}
                    label={n.label}
                    text={n.text}
                    link={n.link}
                  />
                </div>
              ))}
            </div>
            <div className="pt-8 md:hidden">
              <DotSlider
                sliderItems={newsAndUpdates}
                activeIndex={currentSlide}
                onClick={(ind) => setCurrentSlide(ind)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
