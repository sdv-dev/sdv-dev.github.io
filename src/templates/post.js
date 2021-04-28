import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";

import { Article } from "../components/common";
import { MetaData } from "../components/common/meta";
import AuthorPost from "../components/AuthorPost"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import ProgressBar from "react-scroll-progress-bar";

import config from "../utils/siteConfig"

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
    const post = data.ghostPost;

    return (
        <>
            <MetaData data={data} location={location} type="article" />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <ProgressBar bgcolor="#000036" />
            <Article isPost={true}>
                
                <div className="pt-20">
                    <div className="w-full feature-image relative h-0 pb-pimg-xs sm:pb-pimg-sm lg:pb-pimg-lg">
                        
                            {post.feature_image ? (
                                <img
                                    src={post.feature_image}
                                    alt={post.title}
                                    className="absolute inset-0 md:w-full h-full object-cover object-center"
                                />
                            ) : ''}
                        
                    </div>
                </div>
                <div className="-mt-10 md:-mt-20 relative">
                
                 <div className="container max-w-7xl h-full z-0 mx-auto relative">
                 <section className="absolute left-0 pt-36 z-0 absolute hidden xl:block">
                        
                            <div className="flex flex-col mt-16 w-10 z-10 relative ">
                                <div className="px-1 pb-3">
                                    <Link
                                        target="_blank"
                                        rel="noopener"
                                        to={`https://twitter.com/intent/tweet/?text=${encodeURIComponent(post.title)}&url=https://sdv.dev${config.sitePath}${post.slug}&hashtags=syntheticdatavault`}
                                        className="w-8 h-8 flex justify-center items-center text-white bg-sdv-dark inline-block rounded-full"
                                    >
                                        <FontAwesomeIcon
                                            width="16"
                                            icon={faTwitter}
                                        />
                                    </Link>
                                </div>
                                <div className="px-1 pb-3">
                                    <Link
                                        target="_blank"
                                        rel="noopener"
                                        to={`https://www.linkedin.com/shareArticle?mini=true&url=https://sdv.dev${config.sitePath}${post.slug}`}
                                        className="w-8 h-8 flex justify-center items-center text-white bg-sdv-dark inline-block rounded-full"
                                    >
                                        <FontAwesomeIcon
                                            width="16"
                                            icon={faLinkedin}
                                        />
                                    </Link>
                                </div>
                            </div>
                        
                    </section>
                 </div>       
                    
                    <article className="container max-w-5xl bg-white px-6 pt-10 md:pt-20 md:px-10 lg:p-20 relative">
                        
                        <h1 className="leading-none text-6xl lg:text-8xl mb-3">
                            {post.title}
                        </h1>

                        <div className="block xl:hidden">
                        <div className="flex flex-row">
                                <div className="px-1 pb-3">
                                    <Link
                                        target="_blank"
                                        rel="noopener"
                                        to={`https://twitter.com/intent/tweet/?text=${encodeURIComponent(post.title)}&url=https://sdv.dev${config.sitePath}${post.slug}&hashtags=syntheticdatavault`}
                                        className="w-8 h-8 flex justify-center items-center text-white bg-sdv-dark inline-block rounded-full"
                                    >
                                        <FontAwesomeIcon
                                            width="16"
                                            icon={faTwitter}
                                        />
                                    </Link>
                                </div>
                                <div className="px-1 pb-3">
                                    <Link
                                        target="_blank"
                                        rel="noopener"
                                        to={`https://www.linkedin.com/shareArticle?mini=true&url=https://sdv.dev${config.sitePath}${post.slug}`}
                                        className="w-8 h-8 flex justify-center items-center text-white bg-sdv-dark inline-block rounded-full"
                                    >
                                        <FontAwesomeIcon
                                            width="16"
                                            icon={faLinkedin}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <p className="font-light text-xs mb-6">
                            {post.published_at_pretty}
                        </p>

                        <AuthorPost post={post} />
                        {post.primary_tag ? (
                            <div className="flex flex-grow -mx-6 font-light mb-8 lg:mb-14">
                                <div className="px-6">
                                    <Link
                                        to={`/tag/${post.primary_tag.slug}`}
                                        className="mb-2 border border-sdv-stroke rounded-full inline-block px-6 py-1 shadow-lg mr-4"
                                    >
                                        {post.primary_tag.name}
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                       
                        <div className="post">
                            <section
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                            <div className="">
                                <div className="flex flex-row items-center">
                                <div className="px-1 pb-3 font-light text-lg">Share: </div>
                                        <div className="px-1 pb-3">
                                            <Link
                                                target="_blank"
                                                rel="noopener"
                                                to={`https://twitter.com/intent/tweet/?text=${encodeURIComponent(post.title)}&url=https://sdv.dev${config.sitePath}${post.slug}&hashtags=syntheticdatavault`}
                                                className="w-8 h-8 flex justify-center items-center text-white bg-sdv-dark inline-block rounded-full"
                                            >
                                                <FontAwesomeIcon
                                                    width="16"
                                                    icon={faTwitter}
                                                />
                                            </Link>
                                        </div>
                                        <div className="px-1 pb-3">
                                            <Link
                                                target="_blank"
                                                rel="noopener"
                                                to={`https://www.linkedin.com/shareArticle?mini=true&url=https://sdv.dev${config.sitePath}${post.slug}`}
                                                className="w-8 h-8 flex justify-center items-center text-white bg-sdv-dark inline-block rounded-full"
                                            >
                                                <FontAwesomeIcon
                                                    width="16"
                                                    icon={faLinkedin}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                   
                </div>
            </Article>
        </>
    );
};

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
};

export default Post;

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`;
