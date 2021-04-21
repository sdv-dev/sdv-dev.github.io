import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { PostCard } from "../components/common";

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
      }
    `}
    render={(data) => {
      const posts = data.allGhostPost.edges;
      
      return (
        <section className="my-10">
          <div>
            <h3>More Articles</h3>
            <div className="w-16 h-0.5 bg-sdv-green mt-6 mb-12"></div>
          </div>
          <div className="flex flex-wrap -mx-6">
            
            {posts.map(({ node }) => (

              <PostCard key={node.id} post={node} />
            ))}
          </div>
        </section>
      );
    }}
  />)
}
