import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function AllArticles(props) {
  const { image, heading, text, link, date, author } = props;

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
        const list = [1, 2, 3, 4];

        const bloglist = list.map((item, idx) => {
          return (
            <div key={`blog-article-${idx}`} className="w-full md:w-6/12 lg:w-4/12 px-6 mb-14">
              <div
                style={{
                  boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.05)",
                }}
                className="w-full mb-8 rounded-tl-10 rounded-bl-10 rounded-tr-10 rounded-br-50 px-10 py-16 border border-stroke flex justify-center"
              >
                <Img
                  fadeIn={true}
                  fixed={data.featuredImage.childImageSharp.fixed}
                  alt={heading}
                />
              </div>

              <div className="flex flew-row mb-6">
                <div className="relative">
                  <div
                    className="rounded-full bg-sdv-highlight absolute top-0 left-0"
                    style={{
                      width: "48px",
                      height: "48px",
                    }}
                  ></div>
                  <Img
                    fadeIn={true}
                    fixed={data.authorImage.childImageSharp.fixed}
                    alt="Author"
                    className="rounded-full ml-0.5 mt-0.5"
                  />
                </div>
                <div className="text-xs px-4 flex flex-col justify-center">
                  <p className="font-bold text-xs">Carles Sala</p>
                  <p className="font-light">February 23, 2021</p>
                </div>
              </div>

              <div>
                <h3 className="text-sdv-heading mb-4 text-2xl leading-none">
                  Deep Dive into the PAR Model
                </h3>
                <p className="text-sdv-subheading font-light mb-3">
                  In this guide we will go through a series of steps that will
                  let you discover functionalities of the PAR model for
                  timeseries data...
                </p>
                <p>
                  <Link to="#" className="text-sdv-link font-bold">
                    Read more <FontAwesomeIcon width="16" icon={faArrowRight} />
                  </Link>
                </p>
              </div>
            </div>
          );
        });

        return (
          <div className="mt-32">
            <div className="flex flex-wrap justify-center -mx-6">
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
              <div className="w-auto flex-grow px-6 font-light">
                <div className="border border-sdv-stroke rounded-full inline-block px-6 py-3 shadow-lg mr-4">
                  Engineering
                </div>
                <div className="border border-sdv-stroke rounded-full inline-block px-6 py-3 shadow-lg mr-4">
                  Product
                </div>
                <div className="border border-sdv-stroke rounded-full inline-block px-6 py-3 shadow-lg mr-4">
                  Leadership
                </div>
              </div>
            </div>
            <div className="w-20 h-0.5 bg-sdv-separator mt-8 mb-14"></div>

            <div className="flex flex-wrap -mx-6">{bloglist}</div>
          </div>
        );
      }}
    />
  );
}
