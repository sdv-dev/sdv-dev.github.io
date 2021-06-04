import React, {useEffect, useState} from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import config from "../../utils/siteConfig"
import WhiteTopWave from "./wave-top-white"
import WhiteBottomWave from "./wave-bottom-white"

export default function Hero() {
  const [downloads, setDownloads] = useState('')
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //Get the total number of downloads for a single release, using its tag name.

  function getDownloadsCount() {
    var project = 'ctgan';
    
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener('load', function(){
      var data = JSON.parse(this.responseText);
      var number = numberWithCommas(data.total_downloads)
      var numberK = number.split(',')[0]
        console.log(" - COUNT - ", number);
        setDownloads(numberK)
        return numberK
        
    });
    xhr.open('GET', 'https://api.pepy.tech/api/projects/' + project );
    xhr.send();
  }


  useEffect(() => {
    getDownloadsCount()
    return () => {
      
    }
  }, [])
  return (
    <div className="pt-20 relative">
      <div
        className="w-full relative"
        style={{
          background: "linear-gradient(90deg, #03B0F2 1.57%, #01E0C9 100%)"
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-6/12 px-4 lg:pt-40 pt-10 pb-10 lg:pb-72 text-center lg:text-left">
              <h1 className="leading-tight text-white text-6xl lg:text-8xl mb-6 lg:mb-10">
                Let’s put synthetic data to work.
              </h1>
              <div className="flex lg:flex-row flex-col items-center">
                <Link
                  to="https://github.com/sdv-dev"
                  className="px-10 py-3 block border-3 border-white rounded-full font-semibold leading-none text-lg text-white hover:opacity-70"
                  target="_blank"
                >
                  <FontAwesomeIcon width="16" icon={faGithub} className="mr-3" /> View on Github
                </Link>
                <div className="text-white flex-row flex text-sm mt-6 lg:mt-0">
                  { downloads != '' ? (
                    <p className="px-4"><span className="font-bold">{downloads}K</span> Downloads</p>
                  ) : ''}
              </div>    
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 md:mt-0 text-white flex flex-col justify-end">
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
