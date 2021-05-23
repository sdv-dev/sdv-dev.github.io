import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import config from "../../utils/siteConfig"

import WhiteTopWave from "./wave-top-white"
import WhiteBottomWave from "./wave-bottom-white"

export default function ProtectEnhance() {
  return (
    <section className="bg-sdv-dark relative py-40 -mt-20" id="sdv">
      <div className="absolute left-0 right-0 -top-1">
        <WhiteTopWave color="#fff" />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-6">
          <div className="px-6 w-full sm:w-8/12 md:w-7/12 text-center ">
            <p className="grad-txt uppercase text-sm tracking-widest font-bold my-8">Synthetic Data Vault</p>
            <h2 className="text-white my-8">Protect and Enhance Your Data</h2>
            <p className="text-white mx-auto w-96 text-lg">
            Use a synthetic data in place of real data for added protection, or use it in addition to your real data as an enhancement.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full sm:w-1/2 px-6 flex flex-col items-stretch">
            <div className="text-center">
              <h3 className="text-white">PROTECT</h3>
              <p className="text-white">Create a clone to protect Real data</p>
            </div>
            <div className="flex flex-col justify-center h-full my-16"><img className="mx-auto block" width="364" src={`${config.sitePath}/protect.png`} /></div>
          </div>
          <div className="w-full sm:w-1/2 px-6 flex flex-col items-stretch">
            <div className="text-center">
              <h3 className="text-white">ENHANCE</h3>
              <p className="text-white">Add synthetic values to real data</p>
            </div>
            <div className="flex flex-col justify-center h-full my-16"><img className="mx-auto block" width="424" src={`${config.sitePath}/enhance.png`} /></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-16">
        <div className="flex flex-wrap justify-center -mx-6">
          <div className="px-6 w-auto text-white text-center">
            <p>
              <span className="mx-1">Test Software</span> {' '}· 
                {' '}
              <span className="mx-1">Scale Data Science</span> {' '}· 
                {' '}
              <span className="mx-1">Create Demos</span> {' '}· 
                {' '}
              <span className="mx-1">Augmented ML</span> {' '}· 
                {' '}
              <span className="mx-1">Plan Scenarios</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-6">
          <div className="px-6 w-auto mb-10">
          <Link
                to="https://github.com/sdv-dev"
                className="px-10 py-3 inline-block border-3 border-white rounded-full font-semibold leading-none text-lg text-white"
                target="_blank"
              >
                <FontAwesomeIcon width="16" icon={faGithub} className="mr-3" /> {' '} View on Github
              </Link>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 -bottom-1">
        <WhiteBottomWave color="#FAFAFA" />
      </div>
    </section>
  )
}