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
        <Img fadeIn={true} fixed={featuredImg} alt={post.title} />
        {/* <img src={post.feature_image}></img> */}
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
        <div className="flex flew-row mb-6">
          <div className="relative z-10">
            <div
              className="rounded-full bg-sdv-highlight absolute top-0 left-0"
              style={{
                width: "48px",
                height: "48px",
              }}
            ></div>
            {/* <Img
                      fadeIn={true}
                      fixed={data.authorImage.childImageSharp.fixed}
                      alt="Author"
                      className="rounded-full ml-0.5 mt-0.5"
                    /> */}
            <img
              width={46}
              height={46}
              src={post.authors[0].profile_image}
              className="rounded-full ml-0.5 mt-0.5 relative z-10"
            ></img>
          </div>
          <div className="text-xs px-4 flex flex-col justify-center">
            <p className="font-bold text-xs">{post.authors[0].name}</p>
            <p className="font-light">{post.published_at}</p>
          </div>
        </div>
        <div>
          <h3 className="text-sdv-heading mb-4 leading-none">{post.title} </h3>
          <p className="text-sdv-subheading font-light mb-3">{post.excerpt}</p>
          <p>
            <Link
              to={post.slug}
              className="text-sdv-link font-bold cursor-pointer"
            >
              Read more <FontAwesomeIcon width="16" icon={faArrowRight} />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
