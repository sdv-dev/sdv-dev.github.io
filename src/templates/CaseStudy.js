import React, { useEffect } from "react";
import { LightLayout } from "../components/common";
import { graphql, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { GatsbyImage } from "gatsby-plugin-image";
import Prism from "prismjs";
import "prismjs";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-okaidia.css";
import AuthorImages from "./AuthorImages";

const ImageModal = () => {
  return (
    <div
      className="relative z-40 modal"
      style={{
        display: "none",
      }}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed modal-bg inset-x-0 bottom-0 top-16 lg:top-20 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-md"></div>

      <div className="modal-wrap fixed inset-x-0 bottom-0 top-16 lg:top-20 z-10 w-screen overflow-y-auto">
        <div className=" flex min-h-full overflow-auto items-center justify-center p-4 text-center sm:items-center">
          <div className="relative my-4 transform rounded-lg text-left transition-all w-full max-w-7xl px-4 md:px-8">
            <div className="modal-body relative bg-white rounded p-2">
              <img
                className="w-auto h-auto max-h-[80vh] bg-white mx-auto"
                src=""
                alt="modal"
              />
              <p className="modal-caption text-midnight-700 mt-4 text-center text-sm lg:text-base"></p>
              <div className="flex items-center justify-center absolute -top-7 -right-7">
                <button
                  className="  w-8 h-8 flex items-center opacity-60 hover:opacity-100 justify-center bg-white hover:bg-white hover:text-blue-400 text-gray-500 transition-colors rounded-full hover:border-blue-400 border-2 border-gray-500"
                  onClick={() => {
                    document.querySelector(".modal").style.display = "none";
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SocialDesktop = ({ post }) => {
  const sitePath = "/community-case-studies/";

  return (
    <div>
      <div className="flex flex-row items-center space-x-2">
        <Link
          target="_blank"
          rel="noopener"
          to={`https://www.linkedin.com/shareArticle?mini=true&url=https://sdv.dev${sitePath}${post.slug}/`}
          className="w-6 h-6 flex justify-center duration-200 items-center hover:text-blue-600 text-midnight-950 inline-block rounded-full"
        >
          <FontAwesomeIcon size="xl" icon={faLinkedinIn} />
        </Link>
        <Link
          target="_blank"
          rel="noopener"
          to={`https://x.com/intent/tweet/?text=${encodeURIComponent(
            post.title
          )}&url=https://sdv.dev${sitePath}${
            post.slug
          }/&hashtags=syntheticdatavault`}
          className="w-6 h-6 flex justify-center duration-200 items-center hover:text-blue-600 text-midnight-950 inline-block rounded-full"
        >
          <FontAwesomeIcon size="xl" icon={faSquareXTwitter} />
        </Link>
      </div>
    </div>
  );
};

export default function BlogPostTemplate({ data }) {
  const post = {
    frontmatter: {
      ...data.ghostPost,
    },
    html: data.ghostPost.html,
  };

  const AnnouncementBody = () => {
    return <div dangerouslySetInnerHTML={{ __html: post.html }} />;
  };

  useEffect(() => {
    const figures = Array.from(document.querySelectorAll(".post-body figure"));
    const modal = document.querySelector(".modal");
    const modalImg = modal.querySelector("img");
    const modalCaption = modal.querySelector(".modal-caption");
    const modalBody = modal.querySelector(".modal-body");
    const modalWrap = modal.querySelector(".modal-wrap");

    const openModal = (figure) => {
      modal.style.display = "block";
      console.log(figure.querySelector("picture img"));
      modalImg.height = figure.querySelector("picture img").height;
      modalImg.width = figure.querySelector("picture img").width;
      modalImg.src = figure.querySelector("picture img").dataset.imageSrc;
      modalCaption.innerHTML =
        figure.querySelector("figcaption")?.innerHTML || "";
    };

    const closeModal = () => {
      modal.style.display = "none";
      modalImg.src = "";
      modalCaption.innerHTML = "";
      modalImg.height = 0;
      modalImg.width = 0;
    };

    const handleFigureClick = (figure) => {
      openModal(figure);
    };

    const handleModalWrapClick = (e) => {
      if (!modalBody.contains(e.target)) {
        closeModal();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    figures.forEach((figure) => {
      figure.classList.add(
        "cursor-pointer",
        "hover:opacity-80",
        "transition-opacity",
        "duration-300"
      );
      figure.addEventListener("click", () => {
        handleFigureClick(figure);
      });
    });

    modalWrap.addEventListener("click", handleModalWrapClick);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      figures.forEach((figure) => {
        figure.removeEventListener("click", () => {
          handleFigureClick(figure);
        });
      });

      modalWrap.removeEventListener("click", handleModalWrapClick);

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    Prism.highlightAll();
    // const postBody = document.querySelector(".post-body");
    // if (postBody) {
    //   Prism.highlightAllUnder(postBody);
    // }
  }, []);

  return (
    <LightLayout>
      <div className="pt-16 lg:pt-20 relative bg-white">
        <article className="container relative lg:pt-20 pt-10 pb-10 lg:pb-32">
          <div className="announcement-body space-y-6 lg:space-y-6">
            <div className="space-y-8 lg:space-y-10">
              <img
                src={post.frontmatter.feature_image}
                alt={post.frontmatter.title}
                className="rounded-[20px]"
              />
              <div className="lg:space-y-[36px] space-y-[26px]">
                <h1 className="heading-600-lg lg:max-w-[720px]">
                  {post.frontmatter.title}
                </h1>
                <div className="flex flew-row mb-6">
                  <div className="relative">
                    <AuthorImages frontmatter={post.frontmatter} />
                  </div>
                  <div className="pl-3 lg:px-4 flex flex-col justify-center">
                    <div className="flex flex-wrap text-sm lg:text-base">
                      {post.frontmatter.authors.map((author, idx) => (
                        <div key={author.name} className="flex items-center">
                          {idx > 0 && <span className="mx-1">and</span>}
                          {author.website ? (
                            <a href={author.website} className="link-label">
                              {author.name}
                            </a>
                          ) : (
                            <span className="text-midnight-600 border-midnight-600 leading-none pb-0 inline-block duration-200">
                              {author.name}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex text-xs lg:text-sm">
                      <div className="text-midnight-600">
                        {new Date(
                          post.frontmatter.published_at
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="mx-2 text-midnight-600">|</div>
                      <div className="text-blue-600">Not specified</div>
                    </div>
                  </div>
                </div>
              </div>

              <AnnouncementBody />
            </div>
            <SocialDesktop post={post.frontmatter} />
          </div>
        </article>
        <ImageModal />

        <div className="container max-w-7xl h-full z-0 mx-auto py-16 lg:py-24">
          <div className="relative py-24 lg:py-28 px-4">
            <div className="absolute inset-0 rounded-[20px] border border-teal-200">
              <GatsbyImage
                image={data.ctaBg.childImageSharp.gatsbyImageData}
                loading="eager"
                alt="The Synthetic Data Vault"
                className="h-full rounded-[20px] lg:block"
                imgClassName="w-full"
              />
            </div>
            <div className="text-center relative z-10 text-midnight-950 space-y-6">
              <h2 className="heading-500-md font-medium">
                Let’s put synthetic data to work
              </h2>

              <a
                href="/contact/"
                className="all-button inline-block bg-midnight-950 hover:bg-midnight-800 text-white"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </LightLayout>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      id
      title
      slug
      html
      excerpt
      published_at
      feature_image
      updated_at
      created_at
      meta_title
      meta_description
      og_image
      og_title
      og_description
      twitter_title
      twitter_description
      twitter_image
      tags {
        name
        slug
      }
      authors {
        name
        bio
        profile_image
        cover_image
        website
      }
      primary_author {
        name
        profile_image
      }
      primary_tag {
        name
        slug
      }
    }
    ctaBg: file(relativePath: { eq: "cta-image.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          quality: 100
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export function Head({ data }) {
  const post = data.ghostPost;

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Article",
    author: {
      "@type":
        post.authors?.[0]?.name !== "DataCebo Team" ? "Person" : "Organization",
      name: post.authors?.[0]?.name,
      image: post.authors?.[0]?.profile_image,
    },
    headline: post.title,
    url: `https://sdv.dev/community-case-studies/${post.slug}/`,
    datePublished: post.published_at,
    dateModified: post.updated_at || post.published_at,
    image: {
      "@type": "ImageObject",
      url: post.feature_image,
      width: "auto",
      height: "auto",
    },
    publisher: {
      "@type": "Organization",
      name: "Datacebo",
      logo: {
        "@type": "ImageObject",
        url: "https://datacebo.com/logo-white.png",
        width: 200,
        height: 35,
      },
    },
    description: post.meta_description || post.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sdv.dev/community-case-studies/${post.slug}/`,
    },
  };

  return (
    <>
      <meta
        httpEquiv="Cache-Control"
        content="no-cache, no-store, must-revalidate"
      />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />

      <title>{post.meta_title || post.title}</title>
      <meta
        name="description"
        content={post.meta_description || post.excerpt}
      />
      <link
        rel="canonical"
        href={`https://sdv.dev/community-case-studies/${post.slug}/`}
      />

      {/* Open Graph */}
      <meta property="og:site_name" content="Datacebo" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.meta_title || post.title} />
      <meta
        property="og:description"
        content={post.meta_description || post.excerpt}
      />
      <meta
        property="og:url"
        content={`https://sdv.dev/community-case-studies/${post.slug}/`}
      />
      <meta property="og:image" content={post.feature_image} />
      <meta property="article:published_time" content={post.published_at} />
      <meta
        property="article:modified_time"
        content={post.updated_at || post.published_at}
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.twitter_title || post.title} />
      <meta
        name="twitter:description"
        content={
          post.twitter_description || post.meta_description || post.excerpt
        }
      />
      <meta
        name="twitter:image"
        content={post.twitter_image || post.feature_image}
      />
      <meta name="twitter:site" content="https://twitter.com/datacebo/" />
      <meta name="twitter:creator" content="@datacebo" />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd, null, 2)}
      </script>
    </>
  );
}
