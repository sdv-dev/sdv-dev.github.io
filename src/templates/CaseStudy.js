import React, { useEffect } from "react";
import { Article } from "../components/common";
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
import { Helmet } from "react-helmet";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ImageModal = () => (
  <div
    className="relative z-40 modal"
    style={{ display: "none" }}
    role="dialog"
    aria-modal="true"
  >
    <div className="fixed modal-bg inset-x-0 bottom-0 top-16 lg:top-20 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-md"></div>
    <div className="modal-wrap fixed inset-x-0 bottom-0 top-16 lg:top-20 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full overflow-auto items-center justify-center p-4 text-center sm:items-center">
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
                className="w-8 h-8 flex items-center opacity-60 hover:opacity-100 justify-center bg-white hover:text-blue-400 text-gray-500 transition-colors rounded-full hover:border-blue-400 border-2 border-gray-500"
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

export const SocialDesktop = ({ post }) => {
  const sitePath = "/community-case-studies/";
  return (
    <div className="flex flex-row items-center space-x-2">
      <Link
        target="_blank"
        rel="noopener"
        to={`https://www.linkedin.com/shareArticle?mini=true&url=https://sdv.dev${sitePath}${post.slug}/`}
        className="w-6 h-6 duration-200 hover:text-blue-600 text-midnight-950 inline-block rounded-full"
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
        className="w-6 h-6 duration-200 hover:text-blue-600 text-midnight-950 inline-block rounded-full"
      >
        <FontAwesomeIcon size="xl" icon={faSquareXTwitter} />
      </Link>
    </div>
  );
};

export default function BlogPostTemplate({ data }) {
  const c = data.contentfulCaseStudy;

  const post = {
    frontmatter: {
      title: c.title,
      slug: c.url,
      excerpt: c.cardText,
      feature_image: c.featureImage.url,
      published_at: c.datePublished,
      takeaways:
        c.takeaways[0].caseStudyName === c.url
          ? documentToReactComponents(
              JSON.parse(c.takeaways[0].takeawaysList.raw)
            )
          : null,
      authors:
        c.authors?.map((a) => ({
          name: a.authorName,
          profile_image: a.authorImage?.file?.url || a.authorImage,
          website: a.website,
        })) || [],
      categories: c.categories?.map((cat) => ({
        name: cat.name,
      })),
    },
    html: documentToReactComponents(JSON.parse(c.articleText.raw)),
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

    const handleFigureClick = (figure) => openModal(figure);
    const handleModalWrapClick = (e) => {
      if (!modalBody.contains(e.target)) closeModal();
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    figures.forEach((figure) => {
      figure.classList.add(
        "cursor-pointer",
        "hover:opacity-80",
        "transition-opacity",
        "duration-300"
      );
      figure.addEventListener("click", () => handleFigureClick(figure));
    });

    modalWrap.addEventListener("click", handleModalWrapClick);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      figures.forEach((figure) =>
        figure.removeEventListener("click", () => handleFigureClick(figure))
      );
      modalWrap.removeEventListener("click", handleModalWrapClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>{post.frontmatter.meta_title || post.frontmatter.title}</title>
        <meta
          name="description"
          content={
            post.frontmatter.meta_description || post.frontmatter.excerpt
          }
        />
        <meta
          property="og:title"
          content={post.frontmatter.meta_title || post.frontmatter.title}
        />
        <meta
          property="og:description"
          content={
            post.frontmatter.meta_description || post.frontmatter.excerpt
          }
        />
        <meta
          property="og:url"
          content={`https://sdv.dev/community-case-studies/${post.frontmatter.slug}/`}
        />
        <meta
          property="og:image"
          content={post.frontmatter.og_image || post.frontmatter.feature_image}
        />
      </Helmet>

      <Article isDark={false}>
        <div className="pt-16 lg:pt-20 relative bg-white">
          <article className="container relative lg:pt-20 pt-10 pb-10 lg:pb-32">
            <div className="announcement-body space-y-8 lg:space-y-10">
              <img
                src={post.frontmatter.feature_image}
                alt={post.frontmatter.title}
                className="rounded-[20px]"
              />
              <h1 className="heading-600-lg lg:max-w-[720px]">
                {post.frontmatter.title}
              </h1>

              <div className="flex mb-6">
                <AuthorImages frontmatter={post.frontmatter} />
                <div className="pl-3 lg:px-4 flex flex-col justify-center">
                  <div className="flex flex-wrap text-sm lg:text-base">
                    {post.frontmatter.authors.map((a, idx) => (
                      <span key={a.name} className="mr-2">
                        {idx > 0 && "and "}
                        {a.website ? (
                          <a className="link-label" href={a.website}>
                            {a.name}
                          </a>
                        ) : (
                          a.name
                        )}
                      </span>
                    ))}
                  </div>
                  <div className="flex text-xs lg:text-sm text-midnight-600">
                    {new Date(post.frontmatter.published_at).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                    {post.frontmatter?.categories?.length ? (
                      <>
                        {" "}
                        <div className="mx-2 text-midnight-600">|</div>
                        <div className="text-blue-600">
                          {post.frontmatter.categories.map((c) => c.name)}
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div
                className="takeaways-list"
                style={{
                  boxShadow: "rgb(239, 239, 245) 0px 0px 0px 1px inset;",
                }}
              >
                <h3 className="">Quick Takeaways</h3>
                <div>{post.frontmatter.takeaways}</div>
              </div>
              <div>{post.html}</div>
              <SocialDesktop post={post.frontmatter} />
            </div>
          </article>

          <ImageModal />

          <div className="container max-w-7xl mx-auto py-16 lg:py-24">
            <div className="relative py-24 lg:py-28 px-4">
              <div className="absolute inset-0 rounded-[20px] border border-teal-200">
                <GatsbyImage
                  image={data.ctaBg.childImageSharp.gatsbyImageData}
                  loading="eager"
                  alt="The Synthetic Data Vault"
                  className="h-full rounded-[20px]"
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
      </Article>
    </>
  );
}

export const pageQuery = graphql`
  query ($url: String!) {
    contentfulCaseStudy(url: { eq: $url }) {
      title
      url
      featureImage {
        url
      }
      cardText
      takeaways {
        caseStudyName
        takeawaysList {
          raw
        }
      }
      datePublished
      categories {
        name
        slug
      }
      articleText {
        raw
      }
      authors {
        authorName
        authorImage {
          file {
            url
          }
        }
        website
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
  const c = data.contentfulCaseStudy;

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Article",
    author: {
      "@type":
        c.authors?.[0]?.authorName !== "DataCebo Team"
          ? "Person"
          : "Organization",
      name: c.authors?.[0]?.authorName,
      image: c.authors?.[0]?.authorImage?.file?.url,
    },
    headline: c.title,
    url: `https://sdv.dev/community-case-studies/${c.url}/`,
    datePublished: c.datePublished,
    dateModified: c.datePublished,
    image: {
      "@type": "ImageObject",
      url: c.featureImage.url,
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
    description: c.cardText,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sdv.dev/community-case-studies/${c.url}/`,
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

      <title>{c.title}</title>
      <meta name="description" content={c.cardText} />
      <link
        rel="canonical"
        href={`https://sdv.dev/community-case-studies/${c.url}/`}
      />

      {/* Open Graph */}
      <meta property="og:site_name" content="Datacebo" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={c.title} />
      <meta property="og:description" content={c.cardText} />
      <meta
        property="og:url"
        content={`https://sdv.dev/community-case-studies/${c.url}/`}
      />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd, null, 2)}
      </script>
    </>
  );
}
