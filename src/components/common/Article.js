import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Navigation from "./Navigation";
import Footer from "../../components/Footer";
import MoreArticles from "../MoreArticles";
import dataceboHorizontalLogo from "../../../static/datacebo-horizontal-logo.svg";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const PostDefaultLayout = ({ data, children, bodyClass, isPost }) => {
  return (
    <>
      <Helmet>
        <html lang={`en`} />
        {/* <link rel="icon" type="image/png" href={favicon} sizes="16x16" /> */}
      </Helmet>
      <div>
        <div className="viewport-top">
          <Navigation
            isDark={true}
            navClass="block px-4 lg:px-4 py-4 md:py-2 rounded-md text-base hover:underline-none focus:outline-none transition duration-150 ease-in-out navbar-item"
          >
            <a href="https://datacebo.com">
              <div className="w-auto">
                <img
                  src={dataceboHorizontalLogo}
                  alt="DataCebo Logo"
                  className="dark-logo lg:pb-1"
                />
              </div>
            </a>
          </Navigation>

          <main className="">
            {children}
            {isPost ? (
              <div className="container mx-auto">
                <MoreArticles />
              </div>
            ) : (
              ""
            )}
          </main>
        </div>
        {/* <Cta /> */}
        <Footer />
      </div>
    </>
  );
};

export default function PostDefaultLayoutSettingsQuery(props) {
  return (
    <StaticQuery
      query={graphql`
        query GhostSettingsArticle {
          file(relativePath: { eq: "ghost-icon.png" }) {
            childImageSharp {
              fixed(width: 30, height: 30) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          blogHero: file(relativePath: { eq: "Blog graphic people.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={(data) => <PostDefaultLayout data={data} {...props} />}
    />
  );
}
