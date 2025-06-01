import React from "react";

export default function TableRow({ index, isLast, children }) {
  const bgClass = index % 2 === 0 ? "bg-midnight-25" : "bg-white";
  const cornerClass = isLast ? "rounded-bl-20 rounded-br-20" : "";

  return (
    <div
      className={`grid grid-cols-[--table-col-dimensions] cursor-pointer ${bgClass} hover:bg-midnight-50 ${cornerClass}`}
    >
      {children}
    </div>
  );
}
