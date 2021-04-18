import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Navigation } from ".";
import Footer from '../../components/Footer';
// import config from "../../utils/siteConfig";

import MoreArticles from '../MoreArticles'

import favicon from '../../../static/favicon.ico';


/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const PostDefaultLayout = ({ data, children, bodyClass, isPost }) => {
    const site = data.allGhostSettings.edges[0].node;
    const twitterUrl = site.twitter
        ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
        : null;
    const facebookUrl = site.facebook
        ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
        : null;

    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
                <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
            </Helmet>

            <div className="overflow-x-hidden">
                <div className="viewport-top">
                    <Navigation
                        data={site.navigation}
                        navClass="block px-3 py-4 mb:py-2 rounded-md text-base hover:underline-none focus:outline-none transition duration-150 ease-in-out navbar-item text-xl"
                    >
                        <Link to="/">
                            {site.logo ? (
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
                            )}
                        </Link>
                    </Navigation>
                 

                    <main className="">
                        {children}
                        { isPost ? (<div className="container mx-auto">
                            <MoreArticles />
                        </div>) : ''}
                    </main>
                </div>

                <Footer/>
                  </div>
        </>
    );
};

PostDefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
};

const PostDefaultLayoutSettingsQuery = (props) => (
    <StaticQuery
        query={graphql`
            query GhostSettingsArticle {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
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
            }
        `}
        render={(data) => <PostDefaultLayout data={data} {...props} />}
    />
);

export default PostDefaultLayoutSettingsQuery;
