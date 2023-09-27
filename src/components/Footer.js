import React from "react";

import Img from "gatsby-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSlack,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { Link, StaticQuery, graphql } from "gatsby";

export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query FooterImages {
          logo: file(relativePath: { eq: "logo-white.png" }) {
            childImageSharp {
              fixed(width: 182, quality: 100) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
          bg: file(relativePath: { eq: "mid-bg.png" }) {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <div
            className="relative mx-auto w-full z-0"
            style={{ maxWidth: "1680px" }}
          >
            <div
              className="h-1"
              style={{
                backgroundImage: "linear-gradient(to right, #F9AD14, #E45432)",
              }}
            ></div>
            <section
              className="z-10 relative pt-24 pb-32 bg-cover bg-bottom"
              style={{
                backgroundImage: "url('/mid-bg.png')",
              }}
            >
              <div className="container mx-auto mb-20">
                <div className="flex flex-col md:flex-row justify-center md:justify-start -mx-4">
                  <div className="flex-shrink w-full md:w-4/12 px-4 mb-10 flex justify-center md:justify-start">
                    <div className="w-auto -mt-3 flex-shrink flex flex-col items-center">
                      <Link to={`/`} className="inline-block">
                        <Img
                          fadeIn={true}
                          fixed={data.logo.childImageSharp.fixed}
                          alt="The Synthetic Data Vault Blog"
                          className=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="flex-grow md:w-8/12 px-4">
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-6/12 lg:w-3/12 text-sdv-footer mb-4">
                        <p className="font-bold mb-6 uppercase text-white">
                          Resources
                        </p>
                        <ul className="font-light">
                          {[
                            {
                              name: "GitHub",
                              url: "https://github.com/sdv-dev/SDV",
                            },
                            {
                              name: "SDV Docs",
                              url: "https://bit.ly/sdv-docs",
                            },
                            { name: "Blog", url: "https://datacebo.com/blog" },
                          ].map((i, idx) => {
                            return (
                              <li className="mb-4">
                                <a
                                  className="opacity-80 hover:opacity-100 text-white hover:underline"
                                  href={i.url}
                                  rel="noreferrer"
                                >
                                  {i.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="w-full md:w-6/12 lg:w-3/12 text-sdv-footer mb-4">
                        <p className="font-bold mb-6 uppercase text-white">
                          Company
                        </p>
                        <ul className="font-light">
                          {[
                            {
                              name: "About Us",
                              url: "https://datacebo.com/team/",
                            },
                            {
                              name: "Contact",
                              url: "https://datacebo.com/contact/",
                            },
                          ].map((i, idx) => {
                            return (
                              <li className="mb-4">
                                <a
                                  className="opacity-80 hover:opacity-100 text-white hover:underline"
                                  href={i.url}
                                  rel="noreferrer"
                                >
                                  {i.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="w-full md:w-6/12 lg:w-3/12 text-sdv-footer mb-4">
                        <p className="font-bold mb-6 uppercase text-white">
                          Connect
                        </p>
                        <div className="flex flex-row -mx-1 mt-4">
                          <div className="px-1">
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://www.linkedin.com/company/datacebo"
                              className="w-10 h-10 flex justify-center items-center bg-opacity-50 bg-sdv-mute inline-block rounded-full hover:bg-sdv-graylight bg-sdv-offwhite"
                            >
                              <FontAwesomeIcon width="16" icon={faLinkedin} />
                            </a>
                          </div>
                          <div className="px-1">
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://twitter.com/sdv_dev"
                              className="w-10 h-10 flex justify-center items-center bg-opacity-50 bg-sdv-mute inline-block rounded-full hover:bg-sdv-graylight bg-sdv-offwhite"
                            >
                              <FontAwesomeIcon width="16" icon={faTwitter} />
                            </a>
                          </div>
                          <div className="px-1">
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://bit.ly/sdv-slack-invite"
                              className="w-10 h-10 flex justify-center items-center bg-opacity-50 bg-sdv-mute inline-block rounded-full hover:bg-sdv-graylight bg-sdv-offwhite"
                            >
                              <FontAwesomeIcon width="16" icon={faSlack} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mx-auto">
                <p className="text-white text-sm">© 2023, DataCebo, Inc.</p>
              </div>
            </section>
          </div>
        );
      }}
    />
  );
}
