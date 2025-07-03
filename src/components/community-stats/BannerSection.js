import React from "react";
import useWindowWidth from "../../hooks/useviewport";
import ctaImage from "../../../static/cta-image.png";
import bannerHomeSm from "../../../static/banner-home-sm.png";
import eastIcon from "../../../static/east.svg";

export default function BannerSection() {
  const width = useWindowWidth();
  const isMobile = width < 768;

  return (
    <div className="flex justify-center bg-white">
      <div className="container w-full py-12 lg:py-24 px-4 md:px-5 lg:px-0">
        <div
          className="relative bg-teal-100 bg-opacity-50 bg-contain bg-center h-[340px] w-full border border-teal-100 rounded-20"
          style={{
            backgroundImage: `url(${isMobile ? bannerHomeSm : ctaImage})`,
          }}
        >
          <div className="w-full h-full flex flex-col justify-center items-center px-6">
            <h1 className="text-midnight-950 text-center text-4xl tracking-2xs md:text-5xl font-semibold leading-md md:leading-lg pb-[30px]">
              Partner with us on your synthetic data journey
            </h1>
            <a
              href="https://docs.sdv.dev/sdv"
              target="_blank"
              rel="noreferrer"
              className="all-button blue-btn !px-[15px] !py-[12px] md:!px-5 md:!py-[17px] !text-base md:!text-lg text-midnight-950 tracking-md md:tracking-none"
            >
              Get started with SDV Community{" "}
              <img
                src={eastIcon}
                alt="Arrow"
                className="inline w-4 h-4 md:w-5 md:h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
