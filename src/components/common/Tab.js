import React from "react";

export default function Tab({ children, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`text-midnight-800 text-base md:text-lg lg:text-xl font-semibold leading-none md:tracking-lg cursor-pointer py-4 px-5 border border-transparent rounded-[40px] ${
        isActive
          ? "bg-midnight-950  !text-midnight-0"
          : "hover:border hover:border-midnight-50 hover:bg-midnight-25"
      }`}
    >
      {children}
    </div>
  );
}
