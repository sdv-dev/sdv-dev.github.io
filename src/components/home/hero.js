import React from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import config from "../../utils/siteConfig"
import WhiteTopWave from "./wave-top-white"
import WhiteBottomWave from "./wave-bottom-white"

export default function Hero() {
  return (
    <div className="pt-20 relative">
      <div
        className="w-full relative"
        style={{
          background: "linear-gradient(90deg, #03B0F2 1.57%, #01E0C9 100%)"
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-6">
            <div className="w-full lg:w-6/12 px-6 pt-40 pb-10 lg:pb-72 text-center lg:text-left">
              <h1 className="leading-tight text-white text-6xl lg:text-8xl mb-4">
                Let’s put synthetic data to work.
              </h1>
              <Link
                to="https://github.com/sdv-dev"
                className="px-10 py-3 inline-block border-3 border-white rounded-full font-semibold leading-none text-lg text-white"
                target="_blank"
              >
                <FontAwesomeIcon width="16" icon={faGithub} className="mr-3" /> View on Github
              </Link>
            </div>
            <div className="w-full lg:w-6/12 px-6 md:mt-0 text-white flex flex-col justify-end">
              <div className="pb-40"><img width="445" src={`${config.sitePath}/homehero.png`} className="mx-auto" /></div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 right-0 -bottom-4">
          <WhiteBottomWave color="#fff" />
        </div>
      </div>
      
    </div>
  );
}
