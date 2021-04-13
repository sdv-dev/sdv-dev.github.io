import React from "react";
import BlogList from "../templates/blog-list";
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"

import FeaturedArticleWrap from "../components/FeaturedArticleWrap"
import FeaturedArticle from "../components/FeaturedArticle"
import AllArticlesWrap from "../components/AllArticlesWrap"
import AllArticles from "../components/AllArticles"

export default function Home({data}) {
  const posts = data.allGhostPost.edges;
  const featured = posts[0];
  const all = posts.slice(1);
  return (
    <BlogList>
        <Helmet>
          <meta charSet="utf-8" />
          <title>SDV Blog</title>
          <meta name="robots" content="noindex, nofollow"/>
        </Helmet>
      
      
        <h2 className="mb-10 lg:mb-14 lg:text-left text-center">Featured Article</h2>
        
        <FeaturedArticleWrap>
          <FeaturedArticle post={featured.node} 
            featuredImg={data.featuredImage.childImageSharp.fixed} // temporaty use of Img
          />
        </FeaturedArticleWrap>
        <AllArticlesWrap>
          <AllArticles posts={all} 
            featuredImg={data.featuredImage.childImageSharp.fixed} // temporaty use of Img
          />

        </AllArticlesWrap>
      
    </BlogList>
  );
}



export const pageQuery = graphql`
   query {
      allGhostPost(sort: { fields: published_at, order: DESC }) {
        edges {
          node {
            id
            excerpt
            updated_at(formatString: "MMMM DD, YYYY")
            title
            slug
            published_at(formatString: "MMMM DD, YYYY")
            plaintext
            html
            authors {
              bio
              cover_image
              name
              profile_image
              url
            }
            meta_description
            meta_title
            og_description
            og_image
            og_title
            feature_image
          }
        }
      }
    featuredImage: file(relativePath: { eq: "featured-article.png" }) {
      childImageSharp {
        fixed(height: 170, width: 170) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
      id
    }
    }
`