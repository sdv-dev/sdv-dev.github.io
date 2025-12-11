import React from "react";
import { Helmet } from "react-helmet";

const NotFoundPage = () => (
  <Helmet>
    <meta httpEquiv="refresh" content="0; URL=https://datacebo.com/404/" />
    <link rel="canonical" href="https://datacebo.com/404/" />
  </Helmet>
);

export default NotFoundPage;
