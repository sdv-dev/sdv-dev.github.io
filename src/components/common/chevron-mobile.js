import React from "react";

const ChevronMobile = ({ isActive }) => {
  return (
    <svg
      className={`inline-block h-3 w-3 lg:hidden rotate-0 ml-3 transform duration-200 ${
        !isActive ? "" : " rotate-90"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      fill="none"
      viewBox="0 0 7 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1.5 1l4 4-4 4"
      ></path>
    </svg>
  );
};

export default ChevronMobile;
