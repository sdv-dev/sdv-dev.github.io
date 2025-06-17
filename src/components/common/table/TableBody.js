import React from "react";

export default function TableBody(props) {
  return (
    <div style={{ gridArea: "body" }}>
      <div className="h-1.5 bg-white"></div>
      {props.children}
    </div>
  );
}
