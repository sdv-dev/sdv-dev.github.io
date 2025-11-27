import React from "react";
import { Article } from "../components/common";
import Features from "../components/home/features";
import Hero from "../components/home/hero";
import Join from "../components/home/join";
import OpenSource from "../components/home/open-source";
import ProtectEnhance from "../components/home/protect-enhance";
import TryIt from "../components/home/try-it";
import config from "../utils/siteConfig";
import Seo from "../components/Seo";

export default function HomePage() {
  return (
    <Article>
      <Seo
        title={config.siteTitleMeta}
        description={config.siteDescriptionMeta}
        type="website"
        image={`/sdv-home.jpg`}
        canonical={`https://sdv.dev/`}
      />

      <div className="mx-auto max-w-[1680px]">
        <Hero />
        <Features />
        <ProtectEnhance />
        <OpenSource />
        <TryIt />
        <Join />
      </div>
    </Article>
  );
}
