import React from "react";

function WhiteBottomWave(props) {
  return (
    <svg
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
      // width="1440"
      // height="181"
      fill="none"
      viewBox="0 0 1440 181"
    >
      <path
        fill={props.color}
        fillRule="evenodd"
        d="M1440 180.307H0V.509c240 54.795 480 82.193 720 82.193S1200 55.304 1440 .51v179.798z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default WhiteBottomWave;
