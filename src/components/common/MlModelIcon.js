import React from "react";

const MlModelIcon = () => {
  return (
    <div className="group w-[34px] h-[34px]">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="33"
          height="33"
          rx="6.5"
          className="fill-[#F6F6F9] group-hover:fill-[#000036]"
        />
        <rect
          x="0.5"
          y="0.5"
          width="33"
          height="33"
          rx="6.5"
          className="stroke-[#EFEFF5] group-hover:stroke-[#000036]"
        />
        <path
          d="M10.8552 13.9468L17.0388 10.855M10.8552 13.9468L17.0388 17.0385M10.8552 13.9468L17.0388 23.2221"
          className="stroke-[#353E67] group-hover:stroke-white"
          strokeWidth="0.618358"
        />
        <path
          d="M10.8552 20.1314L17.0388 23.2232M10.8552 20.1314L17.0388 17.0396M10.8552 20.1314L17.0388 10.856"
          className="stroke-[#353E67] group-hover:stroke-white"
          strokeWidth="0.618358"
        />
        <path
          d="M23.2229 16.9855L17.0393 23.2221M23.2229 16.9855L17.0393 10.855M23.2229 16.9855L17.0393 16.9855"
          className="stroke-[#353E67] group-hover:stroke-white"
          strokeWidth="0.618358"
        />
        {/* Nodes */}
        <circle
          cx="23.2223"
          cy="17.0387"
          r="1.85507"
          className="fill-[#353E67] group-hover:fill-white"
        />
        <circle
          cx="17.0387"
          cy="23.2223"
          r="1.85507"
          className="fill-[#353E67] group-hover:fill-white"
        />
        <circle
          cx="10.8551"
          cy="20.1299"
          r="1.85507"
          className="fill-[#353E67] group-hover:fill-white"
        />
        <circle
          cx="10.8551"
          cy="13.9463"
          r="1.85507"
          className="fill-[#353E67] group-hover:fill-white"
        />
        <circle
          cx="17.0387"
          cy="17.0387"
          r="1.85507"
          className="fill-[#353E67] group-hover:fill-white"
        />
        <circle
          cx="17.0387"
          cy="10.8551"
          r="1.85507"
          className="fill-[#353E67] group-hover:fill-white"
        />
      </svg>
    </div>
  );
};

export default MlModelIcon;
