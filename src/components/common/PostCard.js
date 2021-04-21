import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

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
                className="w-full mb-8 rounded-tl-10 rounded-bl-10 rounded-tr-10 rounded-br-50 px-4 md:px-8 xl:px-10 py-6 md:py-12 xl:py-16 border border-stroke flex justify-center"
            >
            <img src={post.feature_image} alt={post.title} className="block object-contain h-48 w-full" />
            </header>
            <section className="flex flew-row mb-6">
                <div className="relative">
                <div
                    className="rounded-full bg-sdv-highlight top-0 left-0"
                    style={{
                    width: "48px",
                    height: "48px",
                    }}
                >
                    <div className="overflow-hidden rounded-full absolute bottom-0 right-0" style={{ width: '46px', height: '46px'}}>
                        {post.primary_author.profile_image ?
                            <img width={46} height={46} className="block rounded-full relative z-10" src={post.primary_author.profile_image} alt={post.primary_author.name} /> :
                            <img width={46} height={46} className="block rounded-full relative z-10" src="/images/icons/avatar.svg" alt={post.primary_author.name} />
                        }
                    </div>

                </div>
                    
                </div>
                <div className="text-xs px-4 flex flex-col justify-center">
                <p className="font-bold text-xs">{post.primary_author.name}</p>
                    <p className="font-light">{post.published_at_pretty}</p>
                </div>
            </section>

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
