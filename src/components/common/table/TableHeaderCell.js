import React from "react";

export default function TableHeaderCell({ children }) {
  return (
    <div className="flex justify-end py-[33px] pl-6 pr-8 font-semibold text-[20px] text-midnight-950 leading-none tracking-lg">
      {children}
    </div>
  );
}
