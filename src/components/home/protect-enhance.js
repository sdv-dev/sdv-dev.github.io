import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import WhiteTopWave from "./wave-top-white"
import WhiteBottomWave from "./wave-bottom-white"

import TestSoftware from "../../../assets/test-software.svg"
import ExpandAccess from "../../../assets/expand-access.svg"
import PilotProducts from "../../../assets/pilot-new-products.svg"
import AugmentData from "../../../assets/augment-data.svg"
import PlanScenarios from "../../../assets/plan-scenarios.svg"



export default function ProtectEnhance() {

  const useCases = [
    {
      svg: <TestSoftware />,
      name: "Test Software",
      url: "https://datacebo.com/blog/fake-to-synthetic-ml/"
    },
    {
      svg: <ExpandAccess />,
      name: "Expand Access",
      url: ""
    },
    {
      svg: <PilotProducts />,
      name: "Pilot New Products",
      url: ""
    },
    {
      svg: <AugmentData />,
      name: "Augment Data",
      url: "https://datacebo.com/blog/synthetic-label-balancing/"
    },
    {
      svg: <PlanScenarios />,
      name: "Plan Scenarios",
      url: "https://datacebo.com/blog/sdv-flights-synthesizer/"
    },
  ]

  return (
    <section className="bg-sdv-dark relative py-20 lg:py-40 -mt-20" id="sdv">
      <div className="absolute left-0 right-0 -top-1">
        <WhiteTopWave color="#fff" />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="px-4 w-full sm:w-8/12 md:w-7/12 text-center ">
            <p className="grad-txt uppercase text-sm tracking-widest font-bold mt-8">The Synthetic Data Vault</p>
            <h3 className="text-white my-8">What can you use synthetic data for?</h3>
            <p className="text-white mx-auto max-w-lg tracking-tight text-base font-light">
              Use a synthetic data in place of real data for added protection, or
            use it in addition to your real data as an enhancement.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-16">
        <div className="flex justify-center items-center flex-wrap -mx-4">
          {
            useCases.map((item, idx) => {

              if (item.url) {
                return (<div className="w-auto px-4 my-4" key={`usecase-${idx}`}>
                  <a href={item.url}
                rel="noreferrer" className=" text-white hover:text-sdv-secondary hover:border-sdv-secondary duration-200 w-44 h-44 border-white border text-center rounded-2xl flex flex-col items-center justify-center">
                    <div className="mt-2 mb-3 mx-auto w-28 h-28">{ item.svg }</div>
                    <p className="text-base text-center">{item.name}</p>
                  </a>
                </div>)
              }
              
              return (
                <div className="w-auto px-4 my-4" key={`usecase-${idx}`}>
                  <div className="w-44 h-44 border-white border text-center rounded-2xl flex flex-col items-center justify-center">
                    <div className="mt-2 mb-3 mx-auto w-28 h-28">{ item.svg }</div>
                    <p className="text-base text-center text-white">{item.name}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="px-4 w-auto mb-10">
          <a
                href="https://github.com/sdv-dev/SDV"
                className="px-10 py-3 block border-3 border-white rounded-full font-semibold leading-none text-lg text-white hover:opacity-70"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon width="16" icon={faGithub} className="mr-3" /> {' '} View on Github
              </a>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 -bottom-1">
        <WhiteBottomWave color="#FAFAFA" />
      </div>
    </section>
  )
}