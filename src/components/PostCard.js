import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Img from "gatsby-image";
import { Link } from 'gatsby'

export default function PostCard({post, featuredImg}) {
  const url = `/${post.slug}/`
  return (
    
    <div key={`blog-article-${post.id}`} className="w-full md:w-6/12 lg:w-4/12 px-6 mb-14">
      <div
        style={{
          boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.05)",
        }}
        className="w-full mb-8 rounded-tl-10 rounded-bl-10 rounded-tr-10 rounded-br-50 px-10 py-16 border border-stroke flex justify-center"
      >
       <img src={post.feature_image} className=" block object-contain h-48 w-full" />
        {/* <Img
          fadeIn={true}
          fixed={featuredImg}
          alt={post.title}
        /> */}
        
      </div>
      <div className="flex flew-row mb-6">
        <div className="relative">
          <div
            className="rounded-full bg-sdv-highlight absolute top-0 left-0"
            style={{
              width: "48px",
              height: "48px",
            }}
          ></div>
          {/* <Img
            fadeIn={true}
            fixed={author_image}
            alt="Author"
            className="rounded-full ml-0.5 mt-0.5"
          /> */}
          <img width={46} height={46} src={post.authors[0].profile_image}
              className="rounded-full ml-0.5 mt-0.5 relative z-10"
            ></img>

            
        </div>
        <div className="text-xs px-4 flex flex-col justify-center">
        <p className="font-bold text-xs">{post.authors[0].name}</p>
            <p className="font-light">{post.published_at}</p>
        </div>
      </div>

      <div>
        <h3 className="text-sdv-heading mb-4 text-2xl leading-none">
          {post.title}
        </h3>
        <p className="text-sdv-subheading font-light mb-3">
          {post.excerpt}
        </p>
        <p>
          <Link to={url} className="text-sdv-link font-bold">
            Read more <FontAwesomeIcon width="16" icon={faArrowRight} />
          </Link>
        </p>
      </div>
    </div>
      
  )
}