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
        <div className="lg:pt-20">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-6">
              <div className="w-full md:w-6/12 px-6 flex">
                <h1 className="self-center">The Synthetic Data Vault Blog</h1>
              </div>
              <div className="w-full md:w-5/12 px-6">
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