import React from "react";
import SdGymHero from "./SdGymHero";
import NewsSliderSection from "../community-stats/NewsSliderSection";
import BannerSection from "../community-stats/BannerSection";

export default function SdGymContent() {
  return (
    <div className="pt-16 relative bg-white flex flex-col justify-center overflow-hidden">
      <SdGymHero />
      <NewsSliderSection />
      <BannerSection />
    </div>
  );
}
