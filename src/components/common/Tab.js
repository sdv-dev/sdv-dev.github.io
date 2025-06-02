import React from "react";

export default function Tab({ children, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-[93px] lg:w-auto text-center text-midnight-600 text-base md:text-lg lg:text-xl font-semibold leading-none md:tracking-lg cursor-pointer pb-3.5 ${
        isActive ? "border-b-4 border-b-teal-400 text-midnight-950" : ""
      }`}
    >
      {children}
    </div>
  );
}
