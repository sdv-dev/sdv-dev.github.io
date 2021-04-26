import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import AuthorCard from "../AuthorCard"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`

    return (
        <Link to={url} className="w-full md:w-6/12 lg:w-4/12 px-6 mb-14 link-wrap" key={`blog-article-${post.id}`}>
            <header
                style={{
                boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.05)",
                }}
                className="w-full mb-8 rounded-tl-10 rounded-bl-10 rounded-tr-10 rounded-br-50 overflow-hidden border border-stroke flex justify-center"
            >
                <div className="w-full feature-image relative h-0 pb-cimg-xs">
                    <img src={post.feature_image} alt={post.title} className="absolute inset-0 md:w-full h-full object-cover object-center" />
                </div>
            </header>
            <AuthorCard post={post} />

            <div>
                <h3 className="text-sdv-heading mb-4 text-2xl leading-none">
                {post.title}
                </h3>
                <p className="text-sdv-subheading font-light mb-3">
                {post.excerpt}
                </p>
                <p>
                    <div className="read-more font-bold">Read more <FontAwesomeIcon width="16" icon={faArrowRight} /></div>
                </p>
            </div>
        </Link>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
