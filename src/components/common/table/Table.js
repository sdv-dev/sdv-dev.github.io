import React from "react";

export default function Table({ children, tableColDimensions }) {
  const customStyles = {
    "--table-col-dimensions": `${tableColDimensions ?? "minmax(0, 1fr)"}`,
    gridTemplateAreas: `"header" "body"`,
    boxShadow: "2.135px 8.539px 21.347px 0px rgba(0, 0, 54, 0.12)",
  };

  return (
    <div
      className="border border-midnight-50 rounded-[36px] p-9"
      style={{
        background: `conic-gradient(from 0deg at 50% 50%, var(--primary-dark-midnight-0, rgba(255, 255, 255, 0.16)) 0.15deg, rgba(234, 252, 251, 0.16) 67.59deg, var(--primary-teal-400, rgba(1, 224, 201, 0.16)) 126.67deg, var(--primary-blue-500, rgba(3, 175, 241, 0.16)) 232.73deg, rgba(236, 249, 254, 0.16) 295.11deg), var(--primary-dark-midnight-25, #F6F6F9)`,
      }}
    >
      <div
        style={customStyles}
        className="max-w-[776px] grid border border-midnight-200 rounded-20"
      >
        {children}
      </div>
    </div>
  );
}
