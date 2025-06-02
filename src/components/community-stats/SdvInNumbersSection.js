import React, { useState } from "react";
import Tab from "../common/Tab";

export default function SdvInNumbersSection() {
  const [tabs, setTabs] = useState([
    { label: "Downloads", isActive: true },
    { label: "Users", isActive: false },
    { label: "Visualize", isActive: false },
  ]);

  const clickTab = (label) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        isActive: tab.label === label,
      }))
    );
  };

  return (
    <div className="flex justify-center bg-white">
      <div className="container w-full flex flex-col py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-0">
        <h1 className="heading-600-lg pb-6 text-center md:leading-lg">
          The Synthetic Data Vault in numbers
        </h1>
        <a
          href="https://docs.sdv.dev/sdv"
          target="_blank"
          rel="noreferrer"
          className="text-lg text-blue-600 hover:text-midnight-950 font-semibold duration-200 leading-none text-center cursor-pointer pt-1.5 pb-12"
        >
          Learn more
        </a>
        <div className="flex gap-2.5 lg:gap-9 border-b border-b-midnight-200 mb-6">
          {tabs.map((t) => (
            <Tab
              key={t.label}
              isActive={t.isActive}
              onClick={() => clickTab(t.label)}
            >
              {t.label}
            </Tab>
          ))}
        </div>
      </div>
    </div>
  );
}
