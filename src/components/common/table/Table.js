import React from "react";

export default function Table({ children, tableColDimensions }) {
  const customStyles = {
    "--table-col-dimensions": `${tableColDimensions ?? "minmax(0, 1fr)"}`,
    gridTemplateAreas: `"header" "body"`,
  };

  return (
    <div
      style={customStyles}
      className="grid border border-midnight-200 rounded-20"
    >
      {children}
    </div>
  );
}
