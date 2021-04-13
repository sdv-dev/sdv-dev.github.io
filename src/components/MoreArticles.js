import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import PostCard from "./PostCard";

export default function MoreArticles() {
  return (<StaticQuery
    query={graphql`
      query MoreArticles{
        allGhostPost(sort: { fields: published_at, order: DESC }, limit: 3) {
          edges {
            node {
              id
              excerpt
              updated_at(formatString: "MMMM DD, YYYY")
              title
              slug
              published_at(formatString: "MMMM DD, YYYY")
              authors {
                bio
                cover_image
                name
                profile_image
                url
              }
              meta_description
              meta_title
              feature_image
            }
          }
        }
      }
    `}
    render={(data) => {
      const posts = data.allGhostPost.edges;
      const postMarkup = posts.map(({ node }) => (
        // The tag below includes the markup for each post - components/common/PostCard.js
        <PostCard key={node.id} post={node} />
      ))
      return (
        <section className="my-10">
          <div>
            <h3>More Articles</h3>
            <div className="w-16 h-0.5 bg-sdv-green mt-6 mb-12"></div>
          </div>
          <div className="flex flex-wrap -mx-6">
            {postMarkup}
          </div>
        </section>
      );
    }}
  />)
}
