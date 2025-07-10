import React from "react";
import SingleTableIcon from "../SingleTableIcon";
import MultiTableIcon from "../MultiTableIcon";
import SequentialTableIcon from "../SequentialTableIcon";

export default function SynthesizeCardsSection() {
  const cards = [
    {
      title: "Single Table",
      desc: "Learn a tabular model to synthesize rows in a table",
      icon: <SingleTableIcon />,
      link: "https://colab.research.google.com/drive/1F3WWduNjcX4oKck6XkjlwZ9zIsWlTGEM?usp=sharing",
    },
    {
      title: "Multi Table",
      desc: "Learn a relational data model to synthesize multiple, related tables",
      icon: <MultiTableIcon />,
      link: "https://colab.research.google.com/drive/1L6i-JhJK9ROG-KFcyzT9G-8FC3L8y8Lc?usp=sharing",
    },
    {
      title: "Sequential Table",
      desc: "Learn a sequential or time series model to synthesize new events",
      icon: <SequentialTableIcon />,
      link: "https://colab.research.google.com/drive/1YLk2uwn8yrSRPy0soEeJwu8Hdk_tGTlE?usp=sharing",
    },
  ];

  const onCardClick = (link) => {
    window.open(link, "_blank", "noopener");
  };

  return (
    <div className="container w-full flex flex-col py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-0">
      <h2 className="heading-600-lg text-center pb-8 md:pb-12">
        Learn how to synthesize
      </h2>
      <div className="block md:hidden lg:block">
        <div className="flex flex-col gap-8 lg:flex-row">
          {cards.map((c) => (
            <div
              key={c.title}
              onClick={() => onCardClick(c.link)}
              className="flex flex-col flex-1 cursor-pointer pt-[30px] px-6 pb-6 md:pt-6 md:px-9 md:pb-9 bg-midnight-25 border border-midnight-50 rounded-20 transition-all duration-500 hover:shadow-[0px_20px_30px_-15px_rgba(0,0,54,0.08),_0px_1px_2px_0px_rgba(0,0,54,0.04)]"
            >
              <div className="mb-5">{c.icon}</div>
              <h2 className="text-midnight-950 text-2xl font-medium leading-[36px] tracking-xs pb-2 md:pb-1.5 lg:pb-2">
                {c.title}
              </h2>
              <p className="text-midnight-800 text-base md:text-lg font-normal tracking-lg">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block lg:hidden overflow-x-auto md:-mx-4">
        <div className="flex flex-row gap-8 md:pl-4 md:pr-4 md:snap-x md:snap-mandatory">
          {cards.map((c) => (
            <div
              key={c.title}
              onClick={() => onCardClick(c.link)}
              className="min-w-[395px] snap-start flex flex-col cursor-pointer pt-[30px] px-6 pb-6 md:pt-6 md:px-9 md:pb-9 bg-midnight-25 border border-midnight-50 rounded-20 transition-all duration-500 hover:shadow-[0px_20px_30px_-15px_rgba(0,0,54,0.08),_0px_1px_2px_0px_rgba(0,0,54,0.04)]"
            >
              <div className="mb-5">{c.icon}</div>
              <h2 className="text-midnight-950 text-2xl font-medium leading-[36px] tracking-xs pb-2 md:pb-1.5">
                {c.title}
              </h2>
              <p className="text-midnight-800 text-base md:text-lg font-normal tracking-lg">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
