import React from "react";
import { Helmet } from "react-helmet";

const NotFoundPage = () => (
  <Helmet>
    <meta name="robots" content="noindex" />
    <meta httpEquiv="refresh" content="0; URL=https://datacebo.com/404/" />
  </Helmet>
);

export default NotFoundPage;
