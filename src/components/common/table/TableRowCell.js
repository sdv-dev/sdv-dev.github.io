import React from "react";

export default function TableRowCell({ children }) {
  return (
    <div className="py-[15px] pl-6 pr-6 md:pr-8 font-normal text-lg text-midnight-800 leading-none">
      {children}
    </div>
  );
}
