import React, {useEffect, useState} from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSlack, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import config from "../../utils/siteConfig"
import WhiteTopWave from "./wave-top-white"
import WhiteBottomWave from "./wave-bottom-white"


export default function Hero({downloads}) {

  return (
    <div className="pt-20 md:pt-0 relative">
      <div
        className="w-full relative"
        style={{
          background: "linear-gradient(90deg, #03B0F2 1.57%, #01E0C9 100%)"
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full lg:w-4/12 px-4 md:w-5/12 md:pt-40 pt-10 pb-10 md:pb-72 text-center md:text-left">
              <h1 className="leading-tight text-white mb-6 lg:mb-6">
                <span className="block hero-heading">SDV</span>
                <span className="block font-light text-lg tracking-tight">The Synthetic Data Vault</span>
              </h1>
              <div className="flex flex-row justify-center md:justify-start -mx-1 mt-4">
                    <div className="px-1">
                      <Link target="_blank" rel="noopener" 
                        to="https://github.com/sdv-dev/SDV" 
                        className="w-8 h-8 flex justify-center text-3xl items-center text-white bg-transparent rounded-full hover:opacity-80">
                        <FontAwesomeIcon icon={faGithub} />
                      </Link>
                    </div>
                    <div className="px-1">
                      <Link target="_blank" rel="noopener" 
                        to="https://bit.ly/sdv-slack-invite" 
                        className="w-8 h-8 flex justify-center text-3xl items-center text-white bg-transparent rounded-full hover:opacity-80">
                        <FontAwesomeIcon icon={faSlack} />
                      </Link>
                    </div>

                    <div className="px-1">
                      <Link target="_blank" rel="noopener" 
                        to="https://www.linkedin.com/company/datacebo" 
                        className="w-8 h-8 text-3xl flex justify-center items-center text-white bg-transparent rounded-full hover:opacity-80">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    </div>
                  </div>
            </div>
            <div className="w-full md:w-7/12 lg:w-6/12 px-4 md:mt-0 text-white flex flex-col justify-end">
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
