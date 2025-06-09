import React from "react";

export default function Tab({ children, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`text-midnight-800 text-base md:text-lg lg:text-xl font-semibold leading-none md:tracking-lg cursor-pointer py-4 px-5 ${
        isActive ? "bg-[#070C2F] rounded-[40px] !text-midnight-0" : ""
      }`}
    >
      {children}
    </div>
  );
}
