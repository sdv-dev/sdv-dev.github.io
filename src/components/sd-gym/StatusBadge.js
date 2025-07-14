import React from "react";

const StatusBadge = ({ dateText }) => {
  return (
    <div className="py-[11px] px-5 border border-blue-200 rounded-[40px] mb-8 lg:mb-12 bg-blue-100">
      <span className="text-midnight-950 text-base font-medium leading-6 md:leading-[18px] md:text-lg">
        Last Run: {dateText}
      </span>
    </div>
  );
};

export default StatusBadge;
