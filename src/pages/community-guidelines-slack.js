import React from "react";
import { Helmet } from "react-helmet";

export default function ComunityGuidelinesSlackPage() {
  const targetUrl = "https://datacebo.com/community-guidelines";

  return (
    <Helmet>
      <meta httpEquiv="refresh" content={`0; URL=${targetUrl}`} />
      <link rel="canonical" href={targetUrl} />
    </Helmet>
  );
}
