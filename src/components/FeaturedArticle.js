import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FeaturedArticle(props) {
  const { image, heading, text, link, date, author } = props;
  return (
    <StaticQuery
      query={graphql`
        query FeaturedImage {
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
      render={(data) => (
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
          <div className="w-full rounded-tl-10 rounded-bl-10 px-10 py-16 border md:w-5/12 border-t-stroke border-b-stroke border-l-stroke border-r-0 bg-white flex justify-center relative z-10">
            <Img
              fadeIn={true}
              fixed={data.featuredImage.childImageSharp.fixed}
              alt={heading}
            />
          </div>
          <div className="bg-white w-full rounded-r-10 border lg:w-7/12 xl:pl-28 lg:pl-20 pr-10 py-10 relative z-10">
            <div className="flex flew-row mb-6">
              <div className="relative z-10">
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
              <h3 className="text-sdv-heading mb-4 leading-none">
                Handling constraints in Tabular Models{" "}
              </h3>
              <p className="text-sdv-subheading font-light mb-3">
                A very common scenario that we face when working with tabular
                data is finding columns that have very particular relationships
              </p>
              <p>
                <Link to="#" className="text-sdv-link font-bold">
                  Read more <FontAwesomeIcon width="16" icon={faArrowRight} />
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    />
  );
}
