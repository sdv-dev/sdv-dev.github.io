import React from "react";
import BlogList from "../templates/blog-list";

import FeaturedArticle from "../components/FeaturedArticle"
import AllArticles from "../components/AllArticles"

export default function Home() {
  return (
    <BlogList>
      
      
        <h2 className="mb-14">Featured Article</h2>
      
        <FeaturedArticle />

        <AllArticles />
      
    </BlogList>
  );
}
