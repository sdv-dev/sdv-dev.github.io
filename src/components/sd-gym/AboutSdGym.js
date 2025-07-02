import React from "react";
import aboutSdGym from "../../../static/about-sd-gym.png";

const AboutSdGym = () => {
  const faqItems = [
    {
      title: "What is SDGym?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      linkLabel: "Link Button",
      linkHref: "#",
    },
    {
      title: "Can I run SDGym myself?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      linkLabel: "Link Button",
      linkHref: "#",
    },
    {
      title: "Why do you need it every month or so?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      linkLabel: "Link Button",
      linkHref: "#",
    },
    {
      title: "How do I get across the results?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      linkLabel: "Link Button",
      linkHref: "#",
    },
    {
      title:
        "How can I submit my own synthesizer to be part of the leaderboard?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      linkLabel: "Link Button",
      linkHref: "#",
    },
    {
      title: "How can I help to keep this going?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      linkLabel: "Link Button",
      linkHref: "#",
    },
  ];

  return (
    <div className="flex justify-center bg-white">
      <div className="container w-full flex flex-col py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-0">
        <h1 className="heading-600-lg text-[36px] md:text-5xl text-center">
          About SDGym
        </h1>
        <img src={aboutSdGym} alt="About SdGym" className="my-8 md:my-12" />
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {faqItems.map((fi) => (
            <div
              key={fi.title}
              className="flex flex-col gap-5 p-6 md:pt-7 md:px-9 md:pb-9 border border-midnight-50 rounded-20 bg-midnight-25 cursor-pointer hover:shadow-[0px_7px_24px_-10px_rgba(0,0,54,0.10),_0px_7px_24px_-10px_rgba(0,0,54,0.10)]"
            >
              <h2 className="heading-500-md font-normal -tracking-[0.4px] md:-tracking-[0.6px] md:text-2xl md:leading-[36px] md:h-[72px]">
                {fi.title}
              </h2>
              <p className="text-midnight-800 text-base md:text-lg font-normal tracking-lg">
                {fi.description}
              </p>
              <a
                className="text-lg text-blue-600 hover:text-midnight-950 font-semibold duration-200 leading-none cursor-pointer"
                href={fi.linkHref}
                target="_blank"
                rel="noreferrer"
              >
                {fi.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSdGym;
