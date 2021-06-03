import React, {useEffect} from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import config from "../../utils/siteConfig"
import WhiteTopWave from "./wave-top-white"
import WhiteBottomWave from "./wave-bottom-white"

export default function Hero() {
  

  //Get the total number of downloads for a single release, using its tag name.

  function getDownloadsCount() {
        // Use LOOT as an example.
    var owner = 'sdv-dev';
    var repo = 'CTGAN';
    // var tag = 'v0.6.1';
    
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener('load', function(){
        var releases = JSON.parse(this.responseText);
        var count = 0;
        for (var i = 0; i < releases.length; ++i) {
          var count = 0;
          for (var j = 0; j < releases[i].assets.length; ++j) {
              count += releases[i].assets[j].download_count;
          }
          console.log(releases);
          console.log(count);
          break;
      }
        console.log(" - COUNT - ", count);
        return count
        
    });
    xhr.open('GET', 'https://api.github.com/repos/' + owner + '/' + repo + '/releases');
    xhr.setRequestHeader('accept', "application/vnd.github.v3+json")
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
          <div className="flex flex-wrap -mx-6">
            <div className="w-full lg:w-6/12 px-6 lg:pt-40 pt-10 pb-10 lg:pb-72 text-center lg:text-left">
              <h1 className="leading-tight text-white text-6xl lg:text-8xl mb-10">
                Let’s put synthetic data to work.
              </h1>
              <div className="flex lg:flex-row flex-col items-center">
                <Link
                  to="https://github.com/sdv-dev"
                  className="px-10 py-3 inline-block border-3 border-white rounded-full font-semibold leading-none text-lg text-white"
                  target="_blank"
                >
                  <FontAwesomeIcon width="16" icon={faGithub} className="mr-3" /> View on Github
                </Link>
                <div className="text-white flex-row flex text-sm ">
                  <p className="px-4">Copulas Downloads:</p>
                  <img src="https://static.pepy.tech/personalized-badge/ctgan?period=total&units=international_system&left_color=lightgrey&right_color=lightgrey&left_text="/></div>
              </div>
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
