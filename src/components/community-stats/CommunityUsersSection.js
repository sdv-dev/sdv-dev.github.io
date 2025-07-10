import React from "react";
// import KaggleLogo from "./KaggleLogo";
import MapfreeLogo from "./MapfreeLogo";
// import JpmcLogo from "./JpmcLogo";
// import SparNordLogo from "./SparNordLogo";

export default function CommunityUsersSection() {
  const cards = [
    // {
    //   logo: <JpmcLogo />,
    //   title:
    //     "JP Morgan Chase lorem ipsum dolorem lorem ipsum dolor lorem ipsum dolor dolor dolor dolor",
    //   link: "/",
    // },
    {
      logo: <MapfreeLogo />,
      title:
        "MAPFRE: better detection of homeowner insurance fraud with synthetic data",
      link: "https://sdv.dev/community-case-studies/mapfre-better-detection-of-homeowner-insurance-fraud-with-synthetic-data",
    },
    // {
    //   logo: <KaggleLogo />,
    //   title: "Kaggle releases data for 11 competitions using SDV",
    //   link: "/",
    // },
    // {
    //   logo: <SparNordLogo />,
    //   title:
    //     "Spar Nord Bank uses SDV’s multitable synthesizer to generate synthetic anti money laundering data",
    //   link: "/",
    // },
  ];

  return (
    <div className="container w-full flex flex-col py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-0 lg:w-[876px]">
      <h2 className="heading-600-lg text-center pb-8 md:pb-12 lg:text-[47px]">
        SDV <span className="text-blue-600">users stories</span>
      </h2>
      <div id="user-stories" className="flex flex-col">
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
                  {c.logo}
                </div>
                <div className="flex flex-col md:w-1/2 gap-6 md:gap-9 pb-8 px-6 pt-6 md:pt-[38px] md:px-12 md:pb-[46px] border-b border-r border-l md:border-l-none md:border-t border-midnight-50 rounded-b-20 md:rounded-bl-none md:rounded-tr-20 bg-midnight-25">
                  <p className="text-midnight-950 text-2xl font-medium leading-[30px] tracking-xs line-clamp-3 h-[90px] md:h-[108px] md:text-[28px] md:-tracking-[1.4px] md:leading-9">
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
