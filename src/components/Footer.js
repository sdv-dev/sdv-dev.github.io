import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSlack,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";
import dataceboHorizontalLogo from "../../static/datacebo-horizontal-logo.svg";

const ListItem = ({ i }) => {
  return (
    <li className="group">
      <a
        className="text-midnight-600 relative hover:text-blue-600 group py-3.5 md:py-3 lg:py-2 inline-block leading-none"
        href={i.url}
        rel={i.url?.startsWith("/") ? "" : "noreferrer"}
        target={i.url?.startsWith("/") ? "" : "_blank"}
      >
        <span className="inline-flex justify-center items-center gap-2.5 md:gap-4">
          {i.name}
          {i.tag && (
            <span className="bg-blue-200 rounded text-midnight-950 font-medium text-xs py-1 px-[5px] leading-[12px]">
              {i.tag.name}
            </span>
          )}
        </span>
      </a>
    </li>
  );
};

const SocialLink = ({ url, icon }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={url}
      className="w-10 h-10 flex justify-center items-center border bg-midnight-25 text-midnight-950 hover:text-blue-600 border-midnight-50 rounded-lg"
    >
      <FontAwesomeIcon size="lg" icon={icon} />
    </a>
  );
};

export default function Footer() {
  return (
    <section className="z-10 relative py-12 lg:pt-24 lg:pb-48 bg-midnight-0">
      <div className="container mx-auto mb-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-center md:justify-between lg:justify-start -mx-4">
          <div className="w-full md:w-auto px-4 mb-[50px] flex justify-center md:justify-start lg:px-0 lg:pr-[150px]">
            <div className="w-auto shrink flex flex-col items-center md:items-start space-y-8">
              <Link to={`/`} className="inline-block">
                <img src={dataceboHorizontalLogo} alt="Datacebo logo" />
              </Link>
              <p className="text-midnight-800 text-[21px] font-normal tracking-lg leading-sm">
                Make synthetic data a reality
              </p>
            </div>
          </div>
          <div className="flex-grow w-auto max-w-4xl px-4 lg:px-0">
            <div className="flex flex-wrap md:flex-nowrap md:justify-between">
              <div className="text-center md:text-left w-full md:w-auto mb-[46px]">
                <p className="font-bold mb-3.5 md:mb-3 text-midnight-950">
                  Product
                </p>
                <ul>
                  {[
                    {
                      name: "SDV Community",
                      url: "https://sdv.dev/",
                    },
                    {
                      name: "SDV Enterprise",
                      url: "/sdv-enterprise/",
                    },
                    {
                      name: "SDMetrics",
                      url: "https://docs.sdv.dev/sdmetrics/",
                    },
                    {
                      name: "Pricing",
                      url: "/pricing/",
                    },
                  ].map((i, idx) => (
                    <ListItem i={i} key={`product-${idx}`} />
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-left w-full md:w-auto mb-[46px]">
                <p className="font-bold mb-3.5 md:mb-3 text-midnight-950">
                  Use cases
                </p>
                <ul>
                  {[
                    {
                      name: "Testing software applications",
                      url: "https://datacebo.com/blog/fake-to-synthetic-ml/",
                    },
                    {
                      name: "Simulating Scenarios",
                      url: "https://datacebo.com/blog/sdv-flights-synthesizer/",
                    },
                    {
                      name: "Training AI models",
                      url: "https://datacebo.com/blog/synthetic-clones-for-ml/",
                    },
                    {
                      name: "Sharing data",
                      url: "https://datacebo.com/blog/synthetic-label-balancing/",
                    },
                  ].map((i, idx) => (
                    <ListItem i={i} key={`product-${idx}`} />
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-left w-full md:w-auto mb-[46px]">
                <p className="font-bold mb-3.5 md:mb-3 text-midnight-950">
                  Resources
                </p>
                <ul>
                  {[
                    {
                      name: "Blog",
                      url: "https://datacebo.com/blog/",
                    },
                    {
                      name: "Newsroom",
                      url: "https://datacebo.com/newsroom/",
                    },
                    {
                      name: "Announcements",
                      url: "https://datacebo.com/announcements/",
                    },
                    {
                      name: "SDV Docs",
                      url: "https://docs.sdv.dev/sdv/",
                    },
                  ].map((i, idx) => (
                    <ListItem i={i} key={`resources-${idx}`} />
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-left w-full md:w-auto">
                <p className="font-bold mb-3.5 md:mb-3 text-midnight-950">
                  Company
                </p>
                <ul>
                  {[
                    {
                      name: "Our Team",
                      url: "/team/",
                    },

                    {
                      name: "Careers",
                      url: "/careers/",
                      tag: {
                        name: "We're hiring",
                      },
                    },
                    {
                      name: "Support",
                      url: "/support/",
                    },
                  ].map((i, idx) => (
                    <ListItem i={i} key={`company-${idx}`} />
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 mb-4 hidden">
                <p className="font-bold mb-4 uppercase text-white">Connect</p>
                <div className="flex flex-row -mx-1 mt-4">
                  <div className="px-1">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/company/datacebo"
                      className="w-10 h-10 flex justify-center items-center border text-white hover:bg-gradient-to-b from-blue-500 to-teal-400 border-white hover:border-none hover:bg-opacity-100 bg-opacity-0 inline-block rounded-full"
                    >
                      <FontAwesomeIcon width="16" icon={faLinkedin} />
                    </a>
                  </div>
                  <div className="px-1">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/datacebo"
                      className="w-10 h-10 flex justify-center items-center border text-white hover:bg-gradient-to-b from-blue-500 to-teal-400 border-white hover:border-none hover:bg-opacity-100 bg-opacity-0 inline-block rounded-full"
                    >
                      <FontAwesomeIcon width="16" icon={faTwitter} />
                    </a>
                  </div>
                  <div className="px-1">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://bit.ly/sdv-slack-invite"
                      className="w-10 h-10 flex justify-center items-center border text-white hover:bg-gradient-to-b from-blue-500 to-teal-400 border-white hover:border-none hover:bg-opacity-100 bg-opacity-0 inline-block rounded-full"
                    >
                      <FontAwesomeIcon width="16" icon={faSlack} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col-reverse md:flex-row justify-between items-center relative z-10 lg:px-0">
        <p className="text-base text-midnight-600 pt-16 md:pt-0">
          © {new Date().getFullYear()}, DataCebo, Inc.
        </p>
        <div className="flex justify-center md:justify-end space-x-[18px]">
          <SocialLink
            url="https://www.linkedin.com/company/datacebo"
            icon={faLinkedin}
          />
          <SocialLink url="https://github.com/sdv-dev/SDV" icon={faGithub} />
          <SocialLink url="https://bit.ly/sdv-slack-invite" icon={faSlack} />
        </div>
      </div>
    </section>
  );
}
