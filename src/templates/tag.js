import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { PostCard, Pagination, Article } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Tag page (/tag/:slug)
*
* Loads all posts for the requested tag incl. pagination.
*
*/
const Tag = ({ data, location, pageContext }) => {
    const tag = data.ghostTag
    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="series"
            />
            <Article hasMoreArticles={false}>
            <div className="lg:pt-32 pt-20 bg-sdv-green p-16">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-6 justify-center items-center">
                    <div className="w-full lg:w-6/12 px-6 md:mt-0 text-white text-center">
                        <h1 className="leading-none ">
                            {tag.name}
                        </h1>
                        {tag.description ? <p className="text-2xl">
                            {tag.description}
                        </p> : null }
                        
                    </div>
                    </div>
                </div>
            </div>
                <div className="container">
                    
                    <section className="flex flex-wrap -mx-6 pt-12">
                        {posts.map(({ node }) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard key={node.id} post={node} />
                        ))}
                    </section>
                    <Pagination pageContext={pageContext} />
                </div>
            </Article>
        </>
    )
}

Tag.propTypes = {
    data: PropTypes.shape({
        ghostTag: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
        }),
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Tag

export const pageQuery = graphql`
    query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
        ghostTag(slug: { eq: $slug }) {
            ...GhostTagFields
        }
        allGhostPost(
            sort: { order: DESC, fields: [published_at] },
            filter: {tags: {elemMatch: {slug: {eq: $slug}}}},
            limit: $limit,
            skip: $skip
        ) {
            edges {
                node {
                ...GhostPostFields
                }
            }
        }
    }
`
