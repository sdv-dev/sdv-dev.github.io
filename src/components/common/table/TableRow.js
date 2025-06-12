import React from "react";

export default function TableRow({ index, isLast, children }) {
  const bgClass = index % 2 === 0 ? "bg-midnight-25" : "bg-white";
  const cornerClass = isLast ? "rounded-bl-20 rounded-br-20" : "";

  return (
    <div
      className={`grid grid-cols-[--table-col-dimensions] ${bgClass} hover:bg-[rgba(3,175,241,0.18)] ${cornerClass}`}
    >
      {children}
    </div>
  );
}
