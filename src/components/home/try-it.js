import React, { useEffect, useState } from "react";
import WhiteTopWave from "./wave-top-white"
import WhiteBottomWave from "./wave-bottom-white"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCopy } from "@fortawesome/free-solid-svg-icons";
import Prism from "prismjs";

import "prismjs/components/prism-python";
import "prismjs/themes/prism-twilight.css";
import "prismjs/themes/prism-okaidia.css";

const code = `from sdv.datasets.demo import download_demo
from sdv.lite import SingleTablePreset

real_data, metadata = download_demo(
    'single_table', 'fake_hotel_guests')

synthesizer = SingleTablePreset(metadata, name='FAST_ML')
synthesizer.fit(real_data)

synthetic_data = synthesizer.sample(num_rows=10)`;

export default function TryIt() {
  const [isCopied, setCopied] = useState(false);

  const copyCodeToClipboard = () => {
    const el = document.getElementById('text-area')
    el.select()
    document.execCommand("copy")
    document.getElementById('text-area').blur()
    setCopied(true)
  }
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    if (isCopied) {
      setTimeout(function(){
        setCopied(false)
      }, 1000)
    }
  }, [isCopied])

  return (
    <section className="relative bg-white py-20 lg:py-40">
      <div className="absolute -top-1 left-0 right-0">
        <WhiteTopWave color={`#FAFAFA`} />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="px-4 w-full sm:w-8/12 md:w-7/12 text-center ">
            <p className="grad-txt uppercase text-sm tracking-widest font-bold mt-8">QUICKSTART</p>
            <h2 className="text-sdv-dark my-8">Try it out now!</h2>
            <p className="text-sdv-dark mx-auto max-w-4xl text-lg">
              Quickly discover SDV with just a few lines of code!
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-8">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-auto px-4 relative ">
          <button 
            className="absolute right-6 bottom-3 text-white p-1 rounded z-10 focus:outline-none opacity-100 hover:opacity-80 font-light"
          type="button" onClick={() => copyCodeToClipboard()}>
            {isCopied && `Copied`}
            {` `}
             <FontAwesomeIcon width="16" icon={faCopy} />
          </button>
          <textarea value={code} readOnly={true} id="text-area" rows="1" className="opacity-0 absolute bottom-10 left-10 right-10 top-10 z-0">
            
          </textarea>
          <div className="code-container relative z-1" style={{
            filter: 'drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.1))'
          }}>
          <pre>
            <code className="language-py"
            
            data-prismjs-copy="Copy the Pyhon snippet"
            >{code}</code>
          </pre>
          
          </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 mb-20">
        <div className="flex flex-wrap justify-center">
          <a 
            target="_blank"
            className="font-bold text-sdv-secondary hover:underline"
            rel="noreferrer"
            href={`https://docs.sdv.dev/sdv/installation`}
          >Install SDV <FontAwesomeIcon width="16" icon={faArrowRight} /></a>
        </div>
      </div>


      <div className="absolute -bottom-1 left-0 right-0">
        <WhiteBottomWave color={`#000036`} />
      </div>
    </section>
  )
}