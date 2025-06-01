import React from "react";

export default function SdvInNumbersSection() {
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
          className="text-lg text-blue-600 hover:text-midnight-950 font-semibold duration-200 leading-none text-center cursor-pointer pt-1.5"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
