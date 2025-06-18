import React from "react";
import sparNordLogo from "../../../static/spar-nord-logo.png";

const SparNordLogo = () => {
  return (
    <img
      src={sparNordLogo}
      alt="JPMC Logo"
      className="rounded-t-20 md:rounded-l-20 md:rounded-tr-none h-[186px] md:h-[246px] w-full"
    />
  );
};

export default SparNordLogo;
