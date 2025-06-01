import React from "react";

export default function TableBody(props) {
  return <div style={{ gridArea: "body" }}>{props.children}</div>;
}
