import React from "react";

import PostCard from './PostCard'



export default function AllArticles({posts, featuredImg}) {
  // const { image, heading, text, link, date, author } = props;

  return (
    <div className="flex flex-wrap -mx-6">
       {posts.map(({ node }) => (
            // The tag below includes the markup for each post - components/common/PostCard.js
            <PostCard key={node.id} post={node} featuredImg={featuredImg} />
        ))}  
    </div>
  );
}
