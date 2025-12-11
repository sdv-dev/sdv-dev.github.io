import React from "react";
import { Helmet } from "react-helmet";

export default function HomePage() {
  const targetUrl = "https://datacebo.com/sdv-dev";

  return (
    <Helmet>
      <meta httpEquiv="refresh" content={`0; URL=${targetUrl}`} />
      <link rel="canonical" href={targetUrl} />
    </Helmet>
  );
}
