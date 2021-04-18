import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FeaturedArticle({ post, featuredImg }) {
    return (
        <>
            <div
                className="w-full md:w-5/12 
              px-10 py-10 md:py-16 
              rounded-tl-10 md:rounded-bl-10 rounded-tr-10 md:rounded-tr-none
              border border-t-stroke border-b-none md:border-b-stroke border-l-stroke border-r-stroke md:border-r-0 
              bg-white flex justify-center relative z-10"
            >
                <img src={post.feature_image} className=" block object-contain h-48 w-full"></img>
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
                                style={{ width: "46px", height: "46px" }}
                            >
                                {post.primary_author.profile_image ? (
                                    <img
                                        width={46}
                                        height={46}
                                        className="block rounded-full relative z-10"
                                        src={post.primary_author.profile_image}
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
                        <p className="font-light">{post.published_at_pretty}</p>
                    </div>
                </section>
                <div>
                    <h3 className="text-sdv-heading mb-4 leading-none">
                        {post.title}{" "}
                    </h3>
                    <p className="text-sdv-subheading font-light mb-3">
                        {post.excerpt}
                    </p>
                    <p>
                        <Link
                            to={post.slug}
                            className="text-sdv-link font-bold cursor-pointer"
                        >
                            Read more{" "}
                            <FontAwesomeIcon width="16" icon={faArrowRight} />
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
