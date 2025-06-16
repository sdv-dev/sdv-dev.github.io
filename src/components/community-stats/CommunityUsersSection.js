import React from "react";
import DataceboLogo from "../common/DataceboLogo";
import KaggleLogo from "./KaggleLogo";
import MapfreeLogo from "./MapfreeLogo";
import JpmcLogo from "./JpmcLogo";
import SparNordLogo from "./SparNordLogo";

export default function CommunityUsersSection() {
  const cards = [
    {
      logo: <JpmcLogo />,
      bg: "#0079C1",
      title:
        "JP Morgan Chase lorem ipsum dolorem lorem ipsum dolor lorem ipsum dolor dolor dolor dolor",
      link: "/",
    },
    {
      logo: <MapfreeLogo />,
      bg: "#BE002F",
      title: "MAPFRE insurance improves fraud detection by xx% using SDV",
      link: "/",
    },
    {
      logo: <KaggleLogo />,
      bg: "#20BEFF",
      title: "Kaggle releases data for 11 competitions using SDV",
      link: "/",
    },
    {
      logo: <SparNordLogo />,
      bg: "#1D427D",
      title: "Spar Nord Bank is  using SDV",
      link: "/",
    },
  ];

  return (
    <div className="container w-full flex flex-col py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-0">
      <h2 className="heading-600-lg text-center pb-8 md:pb-12">
        Users of the Community
      </h2>
      <div className="flex flex-col">
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
                <div
                  className="flex items-center justify-center h-[200px] rounded-t-20 md:h-auto md:w-1/2 md:rounded-l-20 md:rounded-tr-none"
                  style={{ backgroundColor: c.bg }}
                >
                  {c.logo}
                </div>
                <div className="flex flex-col md:w-1/2 gap-6 md:gap-12 pb-8 px-6 pt-6 md:pt-[42px] md:px-12 md:pb-12 border-b border-r border-l md:border-l-none md:border-t border-midnight-50 rounded-b-20 md:rounded-bl-none md:rounded-tr-20 bg-midnight-25">
                  <p className="text-midnight-950 text-2xl font-medium leading-[30px] tracking-xs line-clamp-3 min-h-[90px] md:min-h-[120px] md:text-4xl md:-tracking-xl md:leading-10">
                    {c.title}
                  </p>
                  <div>
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg text-blue-600 hover:text-midnight-950 font-semibold duration-200 leading-none cursor-pointer"
                    >
                      Learn more
                    </a>
                  </div>
                  <DataceboLogo />
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
