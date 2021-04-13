import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MoreArticles from "../components/MoreArticles";
import ProgressBar from "react-scroll-progress-bar";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Post = ({ data }) => {
  const post = data.ghostPost;

  return (
    <div className="overflow-x-hidden">
      <ProgressBar bgcolor="#000036" />
      <Navbar />
      <div className="md:pt-32 bg-sdv-green pb-28">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-6 justify-center items-center">

            {post.feature_image ? (
              <img src={post.feature_image} alt={post.title} className="block object-contain h-64 w-full" />
            ) : <Img
            fadeIn={true}
            fixed={data.featuredImage.childImageSharp.fixed}
            alt="The Synthetic Data Vault Blog"
            className="mt-10"
          />}
            
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="-mx-6 flex justify-center items-center -mt-20">
          <article className=" max-w-5xl bg-white px-4 pt-10 lg:p-20">
            <h1 className="leading-none text-5xl mb-6">{post.title}</h1>
            <div className="flex flew-row mb-6">
              <div className="relative z-10">
                <div
                  className="rounded-full bg-sdv-highlight absolute top-0 left-0"
                  style={{
                    width: "48px",
                    height: "48px",
                  }}
                ></div>
                <Img
                  fadeIn={true}
                  fixed={data.authorImage.childImageSharp.fixed}
                  alt="Author"
                  className="rounded-full ml-0.5 mt-0.5"
                />
              </div>
              <div className="text-xs px-4 flex flex-col justify-center">
                <p className="font-bold text-xs">{post.authors[0].name}</p>
                <p className="font-light">{post.published_at}</p>
              </div>
             
            </div>

            <div className="text-sm leading-relaxed mb-4">
              <p>
              {post.excerpt}
              </p>
            </div>
            
            {/* <div>
              {post.html}
            </div>
            <div>
              {post.plaintext}
            </div> */}
            <div className="post">
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </article>
          
        </div>
        <MoreArticles />
      </div>
      <Footer />
    </div>
  );
};

export default Post;

export const postQuery = graphql`

  query($slug: String!) {
    featuredImage: file(relativePath: { eq: "featured-article.png" }) {
      childImageSharp {
        fixed(height: 170, width: 170) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
      id
    }
    authorImage: file(relativePath: { eq: "neha.jpg" }) {
      childImageSharp {
        fixed(height: 46, width: 46) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
      id
    }
    authorImage2: file(relativePath: { eq: "carles.jpg" }) {
      childImageSharp {
        fixed(height: 46, width: 46) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
      id
    }
    ghostPost(slug: { eq: $slug }) {
      title
      meta_description
      meta_title
      og_description
      og_image
      og_title
      published_at(formatString: "MMMM DD, YYYY")
      slug
      twitter_description
      twitter_image
      twitter_title
      updated_at(formatString: "MMMM DD, YYYY")
      html
      excerpt
      feature_image
      plaintext
      url
      authors {
        bio
        name
        cover_image
      }
    }
  }
`;
