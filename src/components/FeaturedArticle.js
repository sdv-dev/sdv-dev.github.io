import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import AuthorCard from "./AuthorCard"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FeaturedArticle({ post, featuredImg }) {
    return (
        <>
            <Link to={post.slug} className="link-wrap flex flex-wrap rounded-10 relative w-full">
                <div
                    className="w-full md:w-5/12 overflow-hidden
                  rounded-tl-10 md:rounded-bl-10 rounded-tr-10 md:rounded-tr-none
                  border border-t-stroke border-b-none md:border-b-stroke border-l-stroke border-r-stroke md:border-r-0
                  bg-white justify-center relative z-10"
                >
                    <div className="w-full feature-image relative h-full pb-pimg-sm md:pb-pimg-md"><img src={post.feature_image} className="absolute inset-0 md:w-full h-full object-cover object-center" alt={post.title}></img></div>
                </div>
                <div
                    className="bg-white w-full md:w-7/12 xl:pl-28
                md:pl-20 md:pr-10 pr-5 pl-5 md:py-10 py-5
                md:rounded-r-10
                md:rounded-bl-none
                rounded-bl-10 rounded-br-10
                border-r border-b border-l border-t-none md:border-t
                relative z-10"
                >
                    <AuthorCard post={post} />
                    <div>
                        <h3 className="text-sdv-heading mb-4 leading-none">
                            {post.title}{" "}
                        </h3>
                        <p className="text-sdv-subheading font-light mb-3">
                            {post.excerpt}
                        </p>
                        <p>
                            <div
                                className="read-more font-bold cursor-pointer"
                            >
                                Read more{" "}
                                <FontAwesomeIcon width="16" icon={faArrowRight} />
                            </div>
                        </p>
                    </div>
                </div>
            </Link> </>
    );
}
