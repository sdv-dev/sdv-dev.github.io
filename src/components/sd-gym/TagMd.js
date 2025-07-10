import React from "react";

export default function TagMd({ date, active, onClick, children }) {
  const baseClasses =
    "flex justify-center items-center py-[11px] px-4 text-base md:text-lg font-normal rounded-[40px] whitespace-nowrap";
  const activeClasses = "text-white bg-midnight-950 border-midnight-950";
  const inactiveClasses =
    "text-midnight-800 bg-midnight-0 focusable-elem interactive-tag";

  if (!onClick) {
    return (
      <div className={`${baseClasses} ${inactiveClasses} !px-3.5 !py-1.5`}>
        {children}
      </div>
    );
  }

  return (
    <button
      onClick={() => onClick(date)}
      type="button"
      className={`${baseClasses} !px-5 ${
        active ? activeClasses : inactiveClasses
      }`}
    >
      {children}
    </button>
  );
}
