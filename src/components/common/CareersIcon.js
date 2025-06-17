import React from "react";

const CareersIcon = () => {
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
          width="34"
          height="34"
          rx="7"
          className="fill-[#F6F6F9] group-hover:fill-[#000036]"
        />
        <rect
          x="0.5"
          y="0.5"
          width="33"
          height="33"
          rx="6.5"
          className="stroke-[#EFEFF5] group-hover:stroke-[#000036] stroke-opacity-[0.07]"
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
            d="M11 23.75C10.5875 23.75 10.2344 23.6031 9.94063 23.3094C9.64688 23.0156 9.5 22.6625 9.5 22.25V14C9.5 13.5875 9.64688 13.2344 9.94063 12.9406C10.2344 12.6469 10.5875 12.5 11 12.5H14V11C14 10.5875 14.1469 10.2344 14.4406 9.94063C14.7344 9.64688 15.0875 9.5 15.5 9.5H18.5C18.9125 9.5 19.2656 9.64688 19.5594 9.94063C19.8531 10.2344 20 10.5875 20 11V12.5H23C23.4125 12.5 23.7656 12.6469 24.0594 12.9406C24.3531 13.2344 24.5 13.5875 24.5 14V22.25C24.5 22.6625 24.3531 23.0156 24.0594 23.3094C23.7656 23.6031 23.4125 23.75 23 23.75H11ZM11 22.25H23V14H11V22.25ZM15.5 12.5H18.5V11H15.5V12.5Z"
            className="fill-[#353E67] group-hover:fill-white"
          />
        </g>
      </svg>
    </div>
  );
};

export default CareersIcon;
