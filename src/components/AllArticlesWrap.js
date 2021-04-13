import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


export default function AllArticlesWrap({children}) {


  return (
    <StaticQuery
      query={graphql`
        query AllArticles {
          featuredImage: file(relativePath: { eq: "featured-article.png" }) {
            childImageSharp {
              fixed(height: 170, width: 170) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
            id
          }
          authorImage: file(relativePath: { eq: "carles.jpg" }) {
            childImageSharp {
              fixed(height: 46, width: 46) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
            id
          }
          afterImage: file(relativePath: { eq: "dotted graphics.png" }) {
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
          <div className="mt-32">
            <div className="flex flex-wrap justify-center md:justify-start -mx-6">
              <div className="w-auto flex-shrink px-6 relative">
                <div className="absolute -left-4 bottom-7 z-0 w-20">
                  <Img
                    fadeIn={true}
                    fluid={data.afterImage.childImageSharp.fluid}
                    alt="graphic dots"
                    className=""
                  />
                </div>
                <h3>All Articles</h3>
              </div>
              {/* <div className="w-auto flex-grow px-6 font-light">
                <div className="mb-2 border border-sdv-stroke rounded-full inline-block px-6 py-3 shadow-lg mr-4">
                  Engineering
                </div>
                <div className="mb-2 border border-sdv-stroke rounded-full inline-block px-6 py-3 shadow-lg mr-4">
                  Product
                </div>
                <div className="mb-2 border border-sdv-stroke rounded-full inline-block px-6 py-3 shadow-lg mr-4">
                  Leadership
                </div>
              </div> */}
            </div>
            <div className="w-20 h-0.5 bg-sdv-separator mt-8 mb-14"></div>

            <div>{children}</div>
          </div>
        );
      }}
    />
  );
}
