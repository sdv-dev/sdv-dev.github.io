import React from "react";

export default function TableRowCell({ children }) {
  return (
    <div className="py-5 pl-6 pr-8 font-normal text-[19px] text-midnight-700 leading-none">
      {children}
    </div>
  );
}
