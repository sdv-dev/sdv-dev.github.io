import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const InfoBar = () => {
  return (
    <div className="h-[42px] bg-blue-200 w-full fixed top-0 z-20">
      <div className="relative py-2.5 px-7 flex items-center justify-center h-full">
        <div className="text-white text-xs font-semibold leading-none bg-blue-700 px-2 pt-1.5 pb-1 border border-[rgba(0,0,54,0.04)] rounded-[18.741px] mr-5">
          Product{" "}
        </div>
        <div className="text-midnight-950 leading-none text-sm lg:text-base font-normal text-left md:text-center">
          Introducing Constraint-Augmented Generation (CAG)
          <a
            href="https://datacebo.com/announcements/introducing-cag/"
            target="_blank"
            rel="noreferrer"
            className="text-xs md:text-sm text-blue-600 hover:text-midnight-950 font-semibold duration-200 leading-none text-center cursor-pointer ml-4 md:ml-5 group"
          >
            Read More{" "}
            <ArrowRightIcon className="w-3.5 text-blue-600 group-hover:text-midnight-950 duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
