import React from "react";
import { Helmet } from "react-helmet";

export default function CommunityStatsPage() {
  const baseUrl = "https://datacebo.com/sdv-dev";

  const finalUrl =
    typeof window !== "undefined"
      ? `${baseUrl}${window.location.hash || ""}`
      : baseUrl;

  return (
    <Helmet>
      <meta httpEquiv="refresh" content={`0; URL=${finalUrl}`} />
      <link rel="canonical" href={finalUrl} />
    </Helmet>
  );
}
