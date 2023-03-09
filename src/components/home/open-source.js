import React, { useState, useRef } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import config from "../../utils/siteConfig";
import Img from "gatsby-image";

import Copulas from "../../../assets/copulas.svg"
import CTGAN from "../../../assets/ctgan.svg"
import DeepEcho from "../../../assets/deepecho.svg"
import SDGym from "../../../assets/sdgym.svg"
import SDMetrics from "../../../assets/sdmetrics.svg"
import RDT from "../../../assets/rdt.svg"
import Vault from "../../../assets/sdv.svg"


const Card = ({ item, idx }) => {
  return (
    <div className="w-full sm:w-6/12 lg:w-4/12 px-4 mb-8 animate-slide-up opacity-0">
      <div className="rounded-2xl bg-white p-5 lg:p-8 border border-offwhite shadow-sm">
        <div className="h-8 w-20 my-2 flex justify-start items-start">
          { item.svg }
        </div>
        <p className="font-bold text-xl lg:text-2xl mb-2">{item.name}</p>
        <p className="text-base lg:text-lg h-auto lg:h-36 leading-normal lg:leading-relaxed">
          {item.text}
        </p>
        <div className="flex flex-row text-left -mx-4 mt-4">
          <div className="w-auto px-4">
            <a
              className="hover:text-sdv-secondary font-bold"
              href={item.github}
              target="_blank"
            >
              Github
            </a>
          </div>
          {item.url && (
            <div className="w-auto border-l-2 border-sdv-offwhite px-4">
              <a
                className="hover:text-sdv-secondary font-bold"
                href={item.url}
                target="_blank"
              >
                Docs
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function OpenSource() {
  const [filter, setFilter] = useState("modeling");
  const ref = useRef(null);

  const scrollToLibWrap = () => {
    const yVal = ref.current.getBoundingClientRect().y;
    if (yVal <= 80) {
      document.getElementById("lib-wrap").scrollIntoView();
    }
  };



  const modelingItems = [
    {
      name: "Copulas",
      svg: <Copulas />,
      // image: data.library_copulas.childImageSharp.fixed,
      icon: "/copulas.svg",
      text: "Models & generates tabular data with classic statistical methods. Uses multivariate copulas.",
      github: "https://github.com/sdv-dev/Copulas",
      url: "https://sdv.dev/Copulas/",
    },
    {
      name: "CTGAN",
      svg: <CTGAN />,
      // image: data.library_ctgan.childImageSharp.fixed,
      icon: "/ctgan.svg",
      text: "Models & generates tabular data with Deep Learning. Offers  CTGAN and TVAE models.",
      github: "https://github.com/sdv-dev/CTGAN",
    },
    {
      name: "DeepEcho",
      svg: <DeepEcho />,
      // image: data.library_deepecho.childImageSharp.fixed,
      icon: "/deepecho.svg",
      text: "Models & generates time series data with a mix of classic statistical models and Deep Learning.",
      github: "https://github.com/sdv-dev/DeepEcho",
    },
    {
      name: "RDT",
      svg: <RDT />,
      // image: data.library_rdt.childImageSharp.fixed,
      icon: "/rdt.svg",
      text: "Discovers properties & transforms data for data science use. Reverses the transforms to reproduce realistic data.",
      github: "https://github.com/sdv-dev/RDT",
      url: "https://docs.sdv.dev/rdt",
    },
    {
      name: "Synthetic Data Vault",
      svg: <Vault />,
      // image: data.library_sdv.childImageSharp.fixed,
      icon: "/sdv.svg",
      text: "Generates synthetic data across single table, relational, and time series data. Supports multiple models & evaluations.",
      github: "https://github.com/sdv-dev/SDV",
      url: "https://docs.sdv.dev/sdv",
    },
  ];

  const benchmarkingItems = [
    {
      name: "SDGym",
      svg: <SDGym />,
      // image: data.library_sdgym.childImageSharp.fixed,
      icon: "/sdgym.svg",
      text: "Benchmarks synthetic data generators, including SDV models. Evaluates the synthetic output of a given model on a dataset.",
      github: "https://github.com/sdv-dev/SDGym",
      url: "https://docs.sdv.dev/sdgym"
    },
    {
      name: "Synthetic Data Vault",
      svg: <Vault />,
      // image: data.library_sdv.childImageSharp.fixed,
      icon: "/sdv.svg",
      text: "Generates synthetic data across single table, relational, and time series data. Supports multiple models & evaluations.",
      github: "https://github.com/sdv-dev/SDV",
      url: "https://docs.sdv.dev/sdv",
    },
  ];

  const metricsItems = [
    {
      name: "SDMetrics",
      svg: <SDMetrics />,
      // image: data.library_sdmetrics.childImageSharp.fixed,
      icon: "/sdmetrics.svg",
      text: "Provides a set of model-agnostic tools for evaluating synthetic data. Defines metrics for statistics, efficiency, and privacy.",
      github: "https://github.com/sdv-dev/SDMetrics",
      url: "https://docs.sdv.dev/sdmetrics/",
    },
    {
      name: "Synthetic Data Vault",
      svg: <Vault />,
      // image: data.library_sdv.childImageSharp.fixed,
      icon: "/sdv.svg",
      text: "Generates synthetic data across single table, relational, and time series data. Supports multiple models & evaluations.",
      github: "https://github.com/sdv-dev/SDV",
      url: "https://docs.sdv.dev/sdv",
    },
  ];

  return (
    <section className="bg-sdv-offwhite">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="px-4 w-full sm:w-8/12 md:w-7/12 text-center ">
            <p className="grad-txt uppercase text-sm tracking-widest font-bold mt-8">
              The SDV Ecosystem
            </p>
            <h2 className="text-sdv-dark my-8">Public, Source-Available Libraries</h2>
            <p className="text-sdv-dark mx-auto max-w-4xl text-lg">
              The SDV is an overall ecosystem for synthetic data models, benchmarks, and metrics. Explore publicly available libraries supporting the SDV. Each can be used as standalone packages for particular needs.
            </p>
          </div>
        </div>
      </div>

      <div id="lib-wrap"></div>

      <div className="sticky top-20 z-10 bg-sdv-offwhite" ref={ref}>
        <div className="container mx-auto my-10 ">
          <div className="flex flex-wrap justify-center -mx-4">
            <button
              onClick={() => {
                scrollToLibWrap();
                setFilter("modeling");
              }}
              className={`${
                filter === "modeling" ? "text-sdv-dark" : `text-sdv-border`
              } focus:outline-none hover:text-sdv-dark opacity-80 hover:opacity-100 h-20 w-30 md:h-32 md:w-40 px-4 flex flex-col justify-center`}
            >
              <img
                className={`${
                  filter === "modeling" ? "" : `filter-gs`
                } mx-auto mb-2`}
                src={`${config.sitePath}/modeling.svg`}
              />
              <div
                className={`text-lg mx-auto ${
                  filter === "modeling" ? `` : ` filter-gs`
                } mt-1 font-bold`}
              >
                Modeling
              </div>
            </button>
            <button
              onClick={() => {
                scrollToLibWrap();
                setFilter("benchmarking");
              }}
              className={`${
                filter === "benchmarking" ? "text-sdv-dark" : `text-sdv-border`
              } focus:outline-none hover:text-sdv-dark opacity-80 hover:opacity-100 h-20 w-30 md:h-32 md:w-40 px-4 flex flex-col justify-center border-l border-r border-sdv-border`}
            >
              <img
                className={`${
                  filter === "benchmarking" ? "" : `filter-gs`
                } mx-auto mb-2`}
                src={`${config.sitePath}/benchmarking.svg`}
              />
              <div
                className={`text-lg mx-auto ${
                  filter === "benchmarking" ? `` : ` filter-gs`
                } mt-1 font-bold`}
              >
                Benchmarking
              </div>
            </button>
            <button
              onClick={() => {
                scrollToLibWrap();
                setFilter("metrics");
              }}
              className={`${
                filter === "metrics" ? "text-sdv-dark" : `text-sdv-border`
              } focus:outline-none hover:text-sdv-dark opacity-80 hover:opacity-100 h-20 w-30 md:h-32 md:w-40 px-4 flex flex-col justify-center`}
            >
              <img
                className={`${
                  filter === "metrics" ? "" : `filter-gs`
                } mx-auto mb-2`}
                src={`${config.sitePath}/metrics.svg`}
              />
              <div
                className={`text-lg mx-auto ${
                  filter === "metrics" ? `` : ` filter-gs`
                } mt-1 font-bold`}
              >
                Metrics
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div
          className={`${
            filter === "modeling" ? `flex` : `hidden`
          } flex-wrap -mx-4`}
        >
          {modelingItems.map((item, idx) => {
            return <Card item={item} idx={idx} />;
          })}
        </div>
        <div
          className={`${
            filter === "benchmarking" ? `flex` : `hidden`
          } flex-wrap -mx-4`}
        >
          {benchmarkingItems.map((item, idx) => {
            return <Card item={item} idx={idx} />;
          })}
        </div>
        <div
          className={`${
            filter === "metrics" ? `flex` : `hidden`
          } flex-wrap -mx-4`}
        >
          {metricsItems.map((item, idx) => {
            return <Card item={item} idx={idx} />;
          })}
        </div>
      </div>
    </section>
  );
}
