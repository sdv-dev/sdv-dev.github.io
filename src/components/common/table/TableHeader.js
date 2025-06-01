import React from "react";

export default function TableHeader({ children }) {
  return (
    <div
      className="grid grid-cols-[--table-col-dimensions] rounded-tl-20 rounded-tr-20 bg-midnight-100"
      style={{ gridArea: "header" }}
    >
      {children}
    </div>
  );
}
