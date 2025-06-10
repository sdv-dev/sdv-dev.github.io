import React from "react";
import worldMap from "../../../static/world-map.png";
import eastIcon from "../../../static/east.svg";

export default function SdvCommunityHero() {
  return (
    <div
      style={{
        background: `
        linear-gradient(180deg, rgba(246, 246, 249, 0.78) 0%, #FFF 100%),
        linear-gradient(90deg, var(--primary-blue-200, #B7E9FF) 0%, var(--primary-teal-200, #95EEDE) 100%)
      `,
      }}
    >
      <div className="dotted-bg flex justify-center">
        <div className="container w-full flex flex-col lg:flex-row lg:justify-between lg:gap-8 py-12 md:py-16 lg:py-[46px] px-4 md:px-5 lg:px-0">
          <div className="flex flex-col flex-1 lg:justify-center">
            <h1 className="text-center md:text-left heading-700-xl md:leading-xl pb-10 lg:pb-16 md:max-w-[624px]">
              <span className="pt-[0.1rem] pr-[0.1rem text-blue-600">
                SDV <br className="md:hidden" />
              </span>
              Community
            </h1>

            <div className="flex flex-col items-center md:flex-row gap-8 pb-10 lg:pb-0">
              <button
                className="all-button blue-btn flex gap-2"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Join our community <img src={eastIcon} alt="Arrow" />
              </button>
              <button
                className="all-button gray-btn"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Get started
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={worldMap}
              className="w-full h-auto rounded-20"
              alt="World map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
