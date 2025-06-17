import React from "react";

const SdvGuideIcon = () => {
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
        <mask
          id="mask0"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="8"
          y="8"
          width="18"
          height="18"
        >
          <rect x="8" y="8" width="18" height="18" fill="#D9D9D9" />
        </mask>

        <g mask="url(#mask0)">
          <path
            d="M11.75 23.75C11.3375 23.75 10.9844 23.6031 10.6906 23.3094C10.3969 23.0156 10.25 22.6625 10.25 22.25V11.75C10.25 11.3375 10.3969 10.9844 10.6906 10.6906C10.9844 10.3969 11.3375 10.25 11.75 10.25H22.25C22.6625 10.25 23.0156 10.3969 23.3094 10.6906C23.6031 10.9844 23.75 11.3375 23.75 11.75V22.25C23.75 22.6625 23.6031 23.0156 23.3094 23.3094C23.0156 23.6031 22.6625 23.75 22.25 23.75H11.75ZM11.75 11.75V22.25H22.25V11.75H20.75V17L18.875 15.875L17 17V11.75H11.75Z"
            className="fill-[#353E67] group-hover:fill-white"
          />
        </g>
      </svg>
    </div>
  );
};

export default SdvGuideIcon;
