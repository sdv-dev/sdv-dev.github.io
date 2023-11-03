import React from "react";


import Multitable from "../../../assets/multitable.svg";
import Sequential from "../../../assets/sequential.svg";
import SingleTable from "../../../assets/singletable.svg";



export default function Features() {

const features = [
  {
    svg: <SingleTable />,
    icon: "/single-table.svg",
    // image: data.signleTable.childImageSharp.fixed,
    name: "Single Table",
    text: "Learn a tabular model to synthesize rows in a table",
    github: "",
    docs: "",
    userguide:
      "https://colab.research.google.com/drive/1F3WWduNjcX4oKck6XkjlwZ9zIsWlTGEM?usp=sharing",
  },
  {
    svg: <Multitable />,
    icon: "/multi-table.svg",
    // image: data.multiTable.childImageSharp.fixed,
    name: "Multi Table",
    text: "Learn a relational data model to synthesize multiple, related tables",
    github: "",
    docs: "",
    userguide: "https://colab.research.google.com/drive/1L6i-JhJK9ROG-KFcyzT9G-8FC3L8y8Lc?usp=sharing",
  },
  {
    svg: <Sequential />,
    icon: "/time-series.svg",
    // image: data.sequental.childImageSharp.fixed,
    name: "Sequential",
    text: "Learn a sequential or time series model to synthesize new events",
    github: "",
    docs: "",
    userguide: "https://colab.research.google.com/drive/1YLk2uwn8yrSRPy0soEeJwu8Hdk_tGTlE?usp=sharing",
  },
];
  
  return (
    <section className="relative z-10">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-wrap -mx-4 -mt-40">
          {features.map((item, idx) => {
            return (
              <div className="w-full sm:w-4/12 px-4 mb-4">
                <div className="bg-white rounded-2xl">
                  <a
                    href={item.userguide}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-white p-4 lg:p-8 border border-offwhite h-full block transition-shadow hover:text-sdv-secondary"
                  >
                    <div className="my-3">{ item.svg }</div>
                    <p className="font-bold text-xl lg:text-2xl">{item.name}</p>
                    <p className="text-base lg:text-lg">{item.text}</p>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-16"></div>
      
      {/* <div className="container-2xl py-16">
        <div className="logo-stripe w-embed">
          
        </div>
      </div> */}
    </section>
  );
}
