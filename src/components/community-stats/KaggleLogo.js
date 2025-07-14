import React from "react";
import kaggleLogo from "../../../static/kaggle-logo.png";

const KaggleLogo = () => {
  return (
    <img
      src={kaggleLogo}
      alt="JPMC Logo"
      className="rounded-t-20 md:rounded-l-20 md:rounded-tr-none"
    />
  );
};

export default KaggleLogo;
