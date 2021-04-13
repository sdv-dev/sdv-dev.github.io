import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FeaturedArticle({children}) {
  
  return (
    <StaticQuery
      query={graphql`
        query FeaturedArticleWrap {
          afterImage: file(relativePath: { eq: "dotted graphics 2.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
            id
          }
        }
      `}
      render={(data) => {
        return (
          <div
            className="flex flex-wrap rounded-10 relative"
            style={{
              boxShadow: "0px 6px 40px rgba(153, 158, 178, 0.277153)",
            }}
          >
            <div className="absolute -right-11 top-10 bottom-10 z-0 w-28">
              <Img
                fadeIn={true}
                fluid={data.afterImage.childImageSharp.fluid}
                alt="graphic dots"
                className=""
              />
            </div>
            
              {children}
            
          </div>
        );
      }}
    />
  );
}
