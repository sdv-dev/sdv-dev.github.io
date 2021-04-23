import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";

import { Layout, PostCard, Pagination } from "../components/common";
import { MetaData } from "../components/common/meta";

import FeaturedArticleWrap from "../components/FeaturedArticleWrap";
import FeaturedArticle from "../components/FeaturedArticle";
import AllArticlesWrap from "../components/AllArticlesWrap";

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges;
    const tags = data.allGhostTag.edges;
    const featured = data.featured.edges[0];

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className="container">
                    {location.pathname === "/" || location.pathname === "/web-dev/" || location.pathname === "/blog/" ? (
                        <>
                            <h2 className="mb-10 lg:mb-14 lg:text-left text-center text-sdv-heading">
                                Featured Article
                            </h2>
                            <FeaturedArticleWrap>
                                <FeaturedArticle post={featured.node} />
                            </FeaturedArticleWrap>
                        </>
                    ) : (
                        ``
                    )}

                    <AllArticlesWrap>
                        
                            {tags.map(({ node }) => (
                                // The tag below includes the markup for each post - components/common/PostCard.js
                                <Link
                                    key={node.id}
                                    to={`/tag/${node.slug}`}
                                    className="mb-2 border border-sdv-stroke rounded-full inline-block px-6 py-3 shadow-lg mr-4"
                                >
                                    {node.name}
                                </Link>
                            ))}
                        
                    </AllArticlesWrap>

                    <section className="flex flex-wrap -mx-6">
                        {posts.map(({ node }) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <>
                            <PostCard key={node.id} post={node} />
                            </>
                        ))}
                    </section>
                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>
        </>
    );
};

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
};

export default Index;

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
    query GhostPostQuery($limit: Int!, $skip: Int!) {
        allGhostPost(
            sort: { order: DESC, fields: [published_at] }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    ...GhostPostFields
                }
            }
        }
        featured: allGhostPost(filter: {featured: {eq: true}}, limit: 1) {
            edges {
            node {
                featured
                id
                excerpt
                updated_at(formatString: "MMMM DD, YYYY")
                title
                slug
                published_at(formatString: "MMMM DD, YYYY")
                published_at_pretty: published_at(formatString: "DD MMMM, YYYY")
                authors {
                bio
                cover_image
                name
                profile_image
                url
                }
                primary_author {
                name
                profile_image
                }
                meta_description
                meta_title
                feature_image
            }
            }
        }
        allGhostTag {
            edges {
                node {
                    ...GhostTagFields
                }
            }
        }
    }
`;
