import React, { useRef, useState, useEffect } from "react";
import newStack from "../../../static/images/news/new-stack.svg";
import hoodline from "../../../static/images/news/hoodline.svg";
import ArrowSlider from "../common/ArrowSlider";
import DotSlider from "../common/DotSlider";
import NewsUpdate from "../common/NewsUpdate";

export default function LatestsNewsSubSection() {
  const newsAndUpdates = [
    {
      id: 1,
      imgSrc: newStack,
      label: "News",
      text: "What’s Next for Companies Built on Open Source?",
      link: "https://thenewstack.io/whats-next-for-companies-built-on-open-source/",
    },
    {
      id: 2,
      imgSrc: hoodline,
      label: "News",
      text: "MIT's DataCebo Reinvents Software Testing with Over 1 Million Downloads of Synthetic Data Vault",
      link: "https://hoodline.com/2024/03/mit-s-datacebo-reinvents-software-testing-with-over-1-million-downloads-of-synthetic-data-vault/",
    },
    {
      id: 3,
      imgSrc: newStack,
      label: "Announcements",
      text: "Introducing Constraint-Augmented Generation (CAG)",
      link: "https://datacebo.com/announcements/introducing-cag",
    },
    {
      id: 4,
      imgSrc: hoodline,
      label: "Blog",
      text: "How ING Belgium Uses DataCebo’s SDV Enterprise to Create Synthetic Data for 100x the Test Coverage",
      link: "https://datacebo.com/blog/ing-belgium-sepa",
    },
    {
      id: 5,
      imgSrc: newStack,
      label: "News",
      text: "DataCebo Creates Synthetic Enterprise Data With Actually Useful Generative AI",
      link: "https://www.forbes.com/sites/justinwarren/2024/04/29/datacebo-creates-synthetic-enterprise-data-with-actually-useful-generative-ai",
    },
    {
      id: 6,
      imgSrc: hoodline,
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
    <div className="flex justify-center bg-white mt-12 lg:my-24">
      <div className="container w-full flex flex-col px-4 md:px-5 lg:px-0">
        <div className="flex justify-between items-center pb-8 md:pb-12">
          <h2 className="heading-600-lg text-[36px] md:text-5xl">
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
              {newsAndUpdates.map((n, idx) => (
                <div
                  key={n.id}
                  className={`shrink-0 md:px-4 ${
                    isLg ? "w-1/2" : isMd ? "w-[85%]" : "w-full"
                  } ${
                    (isMd || isLg) && idx === currentSlide
                      ? "!pl-0"
                      : (isMd || isLg) && idx === currentSlide + 1
                      ? "!pr-0"
                      : ""
                  }`}
                >
                  <NewsUpdate
                    imgSrc={n.imgSrc}
                    imgDimensions={"md:h-[149px] min-w-[288px]"}
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
