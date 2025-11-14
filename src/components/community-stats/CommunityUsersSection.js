import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function CommunityUsersSection() {
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  const data = useStaticQuery(graphql`
    query {
      caseStudies: allContentfulCaseStudy(
        sort: { datePublished: DESC }
        filter: {
          publishLocation: {
            elemMatch: {
              urlLocation: { eq: "https://sdv.dev/community-case-studies/" }
            }
          }
        }
      ) {
        edges {
          node {
            url
            title
            featureImage {
              url
            }
            cardText
          }
        }
      }
    }
  `);

  const cards = data.caseStudies.edges.map(({ node }) => ({
    logo: node.featureImage.url,
    title: node.title,
    description: node.cardText,
    link: `${origin}/community-case-studies/${node.url}`,
  }));

  return (
    <div className="container w-full flex flex-col py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-0 lg:w-[876px]">
      <h2 className="heading-600-lg text-center pb-8 md:pb-12">
        SDV <span className="text-blue-600">case studies</span>
      </h2>
      <div id="case-studies" className="flex flex-col">
        {cards.map((c, idx) => {
          const isLast = idx === cards.length - 1;
          const isFirst = idx === 0;

          return (
            <div key={c.title}>
              <div
                className={`flex flex-col md:flex-row py-8 md:py-12 ${
                  (isLast && "!pb-0", isFirst && "!pt-0")
                }`}
              >
                <div className="flex items-center justify-center md:w-1/2">
                  <img
                    src={c.logo}
                    alt="Logo"
                    className="rounded-t-20 md:rounded-tr-none md:rounded-l-20 h-full"
                  />
                </div>
                <div
                  className="flex flex-col md:w-1/2 gap-6 md:gap-9 pb-8 px-6 pt-6 md:pt-[38px] md:px-12 md:pb-[46px] rounded-b-20 md:rounded-bl-none md:rounded-tr-20 bg-midnight-25"
                  style={{ boxShadow: "inset 0 0 0 1px #EFEFF5" }}
                >
                  <p className="text-midnight-950 text-[25px] font-medium leading-[30px] tracking-xs line-clamp-3 h-[96px] md:h-[108px] md:text-[26px] md:-tracking-[1.4px] md:leading-9">
                    {c.title}
                  </p>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg text-blue-600 hover:text-midnight-950 font-semibold duration-200 leading-none cursor-pointer"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              {!isLast && <hr className="bg-midnight-100 h-0.5" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
