import React from "react";
import jpmcLogo from "../../../static/jpmc-logo.png";

const JpmcLogo = () => {
  return (
    <img
      src={jpmcLogo}
      alt="JPMC Logo"
      className="rounded-t-20 md:rounded-l-20 md:rounded-tr-none"
    />
  );
};

export default JpmcLogo;
