import React from "react";

export default function NewsUpdate({ imgSrc, label, text, link }) {
  return (
    <div className="h-full">
      <div className="flex flex-col md:flex-row gap-6 h-full md:h-[220px]">
        <img
          src={imgSrc}
          alt="Illustration"
          className="min-w-[292px] md:h-[176px] rounded-20 bg-[linear-gradient(270deg,_#F8F8F8_6.16%,_#F4F1F2_95.89%)] border border-midnight-50"
        />
        <div className="flex flex-col gap-2 justify-start">
          <span className="text-blue-600 text-base font-semibold md:text-lg">
            {label}
          </span>
          <p className="heading-500-md -tracking-label font-normal md:text-2xl line-clamp-3 leading-[36px]">
            <a href={link} target="_blank" rel="noreferrer">
              {text}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
