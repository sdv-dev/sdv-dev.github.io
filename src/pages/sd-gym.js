import React from "react";
import { Article } from "../components/common";
import config from "../utils/siteConfig";
import Seo from "../components/Seo";
import SdGymContent from "../components/sd-gym/SdGymContent";

export default function SdGymPage() {
  return (
    <Article>
      <Seo
        title={config.siteTitleMeta}
        description={config.siteDescriptionMeta}
        type="website"
        image={`/sdv-home.jpg`}
        canonical={`https://sdv.dev/`}
      />

      <div className="mx-auto">
        <SdGymContent />
      </div>
    </Article>
  );
}
