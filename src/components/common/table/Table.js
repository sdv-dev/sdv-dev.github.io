import React from "react";

export default function Table({ children, tableColDimensions }) {
  const customStyles = {
    "--table-col-dimensions": `${tableColDimensions ?? "minmax(0, 1fr)"}`,
    gridTemplateAreas: `"header" "body"`,
    boxShadow: "2.135px 8.539px 21.347px 0px rgba(0, 0, 54, 0.12)",
  };

  return (
    <div
      className="border border-midnight-50 rounded-[36px] p-5 md:p-9"
      style={{
        background: `conic-gradient(from 0deg at 50% 50%, var(--primary-dark-midnight-0, rgba(255, 255, 255, 0.10)) 0.15417183400131762deg, rgba(234, 252, 251, 0.10) 67.58502066135406deg, var(--primary-teal-400, rgba(1, 224, 201, 0.10)) 126.67272806167603deg, var(--primary-blue-500, rgba(3, 175, 241, 0.10)) 232.73083448410034deg, rgba(236, 249, 254, 0.10) 295.11245012283325deg), var(--primary-dark-midnight-25, #F6F6F9)`,
      }}
    >
      <div
        style={customStyles}
        className="max-w-[608px] grid border border-midnight-200 rounded-20 bg-white"
      >
        {children}
      </div>
    </div>
  );
}
