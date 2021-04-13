import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

export default function BlogHeader() {
  return (

    <StaticQuery 
      query={graphql`
        query BlogHero {
          blogHero: file(relativePath: { eq: "Blog graphic people.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}

      render={data => (
        <div className="md:pt-20">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-6 justify-center lg:justify-between items-center">
              <div className="w-full lg:w-6/12 px-6 flex mt-28 md:mt-0">
                <h1 className="self-center leading-none text-center lg:text-left">The Synthetic Data Vault Blog</h1>
              </div>
              <div className="w-10/12 sm:w-8/12 lg:w-5/12 px-6">
                <Img
                  fadeIn={true}
                  fluid={data.blogHero.childImageSharp.fluid}
                  alt='The Synthetic Data Vault Blog'
                  className="mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      )}

    />
    
  )
}