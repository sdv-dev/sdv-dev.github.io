import React from "react";
import { Article } from "../components/common";
import config from "../utils/siteConfig";
import Seo from "../components/Seo";
import CommunityStatsContent from "../components/community-stats/CommunityStatsContent";

export default function CommunityStatsPage() {
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
        <CommunityStatsContent />
      </div>
    </Article>
  );
}
