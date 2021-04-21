import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";

import { Article } from "../components/common";
import { MetaData } from "../components/common/meta";

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
                <div className="pt-32 bg-sdv-green pb-28">
                    <div className="container mx-auto" style={{ maxWidth: "560px"}}>
                        <div className="flex flex-wrap -mx-6 justify-center items-center">
                            {post.feature_image ? (
                                <img
                                    src={post.feature_image}
                                    alt={post.title}
                                    className="block object-contain h-64 w-full"
                                />
                            ) : ''}
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center items-center -mt-20">
                    <article className="container max-w-5xl bg-white px-6 pt-10 lg:p-20 relative">
                        
                        <h1 className="leading-none text-5xl mb-6">
                            {post.title}
                        </h1>

                        <section className="flex flew-row mb-6">
                            <div className="relative">
                                <div
                                    className="rounded-full bg-sdv-highlight top-0 left-0"
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                    }}
                                >
                                    <div
                                        className="overflow-hidden rounded-full absolute bottom-0 right-0"
                                        style={{
                                            width: "46px",
                                            height: "46px",
                                        }}
                                    >
                                        {post.primary_author.profile_image ? (
                                            <img
                                                width={46}
                                                height={46}
                                                className="block rounded-full relative z-10"
                                                src={
                                                    post.primary_author
                                                        .profile_image
                                                }
                                                alt={post.primary_author.name}
                                            />
                                        ) : (
                                            <img
                                                width={46}
                                                height={46}
                                                className="block rounded-full relative z-10"
                                                src="/images/icons/avatar.svg"
                                                alt={post.primary_author.name}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs px-4 flex flex-col justify-center">
                                <p className="font-bold text-xs">
                                    {post.primary_author.name}
                                </p>
                                <p className="font-light">
                                    {post.published_at_pretty}
                                </p>
                            </div>
                        </section>
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
                        <div className="leading-relaxed mb-4">
                            <p>{post.excerpt}</p>
                        </div>
                        <div className="post">
                        <section className="transform w-12 -translate-x-20 absolute inset-0 pt-36 z-0">
                            <div className="relative z-10">
                                <div className="flex flex-col sticky top-56">
                                    <div className="p-1">
                                        <Link
                                            target="_blank"
                                            rel="noopener"
                                            to={`https://twitter.com/intent/tweet/?text=${post.title}&url=https://sdv.dev${config.sitePath}${post.slug}&hashtags=syntheticdatavault`}
                                            className="w-10 h-10 flex justify-center items-center text-sdv-mute bg-sdv-font inline-block rounded-full"
                                        >
                                            <FontAwesomeIcon
                                                width="16"
                                                icon={faTwitter}
                                            />
                                        </Link>
                                    </div>
                                    <div className="p-1">
                                        <Link
                                            target="_blank"
                                            rel="noopener"
                                            to={`https://www.linkedin.com/sharing/share-offsite/?url=https://sdv.dev${config.sitePath}${post.slug}`}
                                            className="w-10 h-10 flex justify-center items-center text-sdv-mute bg-sdv-font inline-block rounded-full"
                                        >
                                            <FontAwesomeIcon
                                                width="16"
                                                icon={faLinkedin}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                            <section
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
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
