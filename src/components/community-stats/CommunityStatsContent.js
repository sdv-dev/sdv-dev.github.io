import React from "react";
import SdvCommunityHero from "./SdvCommunityHero";
import NewsSliderSection from "./NewsSliderSection";
import SynthesizeCardsSection from "./SynthesizeCardsSection";
import CommunityUsersSection from "./CommunityUsersSection";
import SdvInNumbersSection from "./SdvInNumbersSection";
import SdvEcosystemSection from "./SdvEcosystemSection";
import SdvOpenCoreSection from "./SdvOpenCoreSection";
import BannerSection from "./BannerSection";

export default function CommunityStatsContent() {
  return (
    <div className="pt-16 relative bg-white flex flex-col justify-center overflow-hidden">
      <SdvCommunityHero />
      <SynthesizeCardsSection />
      <CommunityUsersSection />
      <SdvInNumbersSection />
      <SdvEcosystemSection />
      <SdvOpenCoreSection />
      <NewsSliderSection />
      <BannerSection />
    </div>
  );
}
