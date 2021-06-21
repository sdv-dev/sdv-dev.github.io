import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Navigation } from ".";
import Footer from '../../components/Footer';
import Cta from '../../components/Cta'
import config from "../../utils/siteConfig";

import HeroImage from "../../../assets/blog-hero.svg";
import favicon from '../../../static/favicon.ico';

import Logo from "../../../assets/sdv-blog-logo.svg";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {

    return (
        <>
            <Helmet>
                <html lang={`en`} />
                <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
            </Helmet>

            <div className="">
                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    <div
                        className="relative container mx-auto w-full z-0"
                        style={{ maxWidth: "1680px" }}
                    >
                        <HeroImage className="absolute right-0 top-0 bottom-0 left-0 md:left-40 lg:left-80 xl:left-auto z-0 lg:block hidden" />
                    </div>
                    <Navigation
                        
                        navClass="block px-3 py-4 mb:py-2 rounded-md text-base hover:underline-none focus:outline-none transition duration-150 ease-in-out navbar-item"
                    >
                        <Link to="/">
                            <div className="w-20">
                            <Img
                                fadeIn={true}
                                fixed={
                                    data.logo
                                        .childImageSharp.fixed
                                }
                                alt="The Synthetic Data Vault Blog"
                                className=""
                            />
                            </div>
                            {/* {site.logo ? (
                                <img
                                    width="80"
                                    height="44"
                                    className="site-logo"
                                    src={site.logo}
                                    alt={site.title}
                                />
                            ) : (
                                <Img
                                    fixed={data.file.childImageSharp.fixed}
                                    alt={site.title}
                                />
                            )} */}
                        </Link>
                    </Navigation>
                    <header
                        className="z-10 relative"
                        // style={{
                        //     ...(site.cover_image && {
                        //         backgroundImage: `url(${site.cover_image})`,
                        //     }),
                        // }}
                    >
                        {isHome ? (
                            <div className="md:pt-20">
                                <div className="container mx-auto">
                                    <div className="flex flex-wrap -mx-6 justify-center lg:justify-between items-center">
                                        <div className="w-full lg:w-6/12 px-6 mt-20 sm:mt-24 md:mt-10 lg:mt-0 text-sdv-font text-center lg:text-left max-w-md">
                                            <h1 className="self-center leading-none sm:block hidden">
                                                Welcome to the SDV Blog
                                                {/* {site.title} */}
                                            </h1>
                                            {/* <p className="text-2xl">
                                                {site.description}
                                            </p> */}
                                        </div>
                                        <div className="w-10/12 sm:w-8/12 lg:w-5/12 px-6  sm:block hidden">
                                            <Img
                                                fadeIn={true}
                                                fluid={
                                                    data.blogHero
                                                        .childImageSharp.fluid
                                                }
                                                alt="The Synthetic Data Vault Blog"
                                                className="mt-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </header>

                    <main className="">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        <div
                            className="bg-sdv-offwhite mx-auto rounded-t-10 pt-10 md:pt-16 lg:pt-20 z-10 relative"
                            style={{
                                // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                maxWidth: "1300px",
                            }}
                        >
                            {children}
                        </div>
                    </main>
                </div>
                            {/* <Cta /> */}
                            <Footer />
           </div>
        </>
    );
};

export default function DefaultLayoutSettingsQuery (props) {
    return (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                file(relativePath: { eq: "ghost-icon.png" }) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                blogHero: file(
                    relativePath: { eq: "Blog graphic people.png" }
                ) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
                logo: file(
                    relativePath: { eq: "logo-home.png" }
                ) {
                    childImageSharp {
                        fixed(width: 84, quality: 100) {
                            ...GatsbyImageSharpFixed_noBase64
                        }
                    }
                }
            }
        `}
        render={(data) => <DefaultLayout data={data} {...props} />}
    />
)};
