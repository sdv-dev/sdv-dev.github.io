import React from "react";
import { Helmet } from "react-helmet";

export default function CaseStudy({ pageContext }) {
  const baseUrl = "https://datacebo.com/case-studies/";
  const slugFromContext = pageContext?.url || "";

  const normalizedSlug = slugFromContext
    ? slugFromContext.replace(/^\/|\/$/g, "")
    : "";

  const finalUrl = normalizedSlug ? `${baseUrl}${normalizedSlug}/` : baseUrl;

  return (
    <Helmet>
      <meta httpEquiv="refresh" content={`0; URL=${finalUrl}`} />
      <link rel="canonical" href={finalUrl} />
    </Helmet>
  );
}
