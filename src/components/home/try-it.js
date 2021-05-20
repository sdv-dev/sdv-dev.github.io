import React from 'react'
import { Link } from 'gatsby'
import WhiteTopWave from "./wave-top-white"
import WhiteBottomWave from "./wave-bottom-white"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const code = `
from sdv import load_demo, SDV

# Use pre-loaded demo tables
metadata, tables = load_demo(metadata=True)

sdv = SDV()
sdv.fit(metadata, tables)

synthetic_data = sdv.sample()
print(synthetic_data)`;

export default function TryIt() {
  return (
    <section className="relative bg-white py-40">
      <div className="absolute -top-1 left-0 right-0">
        <WhiteTopWave color={`#FAFAFA`} />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-6">
          <div className="px-6 w-full sm:w-8/12 md:w-7/12 text-center ">
            <p className="grad-txt uppercase text-sm tracking-widest font-bold my-8">QUICKSTART</p>
            <h2 className="text-sdv-dark my-8">Try it out Now!</h2>
            <p className="text-sdv-dark mx-auto max-w-4xl text-lg">
              Quickly discover SDV with just a few lines of code!
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-auto px-4">
          <button className="copy-to-clipboard-button" type="button" data-copy-state="copy">
              <span>Copy</span>
            </button>
          <div className="code-container bg-sdv-dark p-4 rounded-2xl">
       
            <pre>
            
              <code 
                data-copy-state="Copy"
                data-copy-state="copy-error"
                data-copy-state="copy-success"
               className="language-python">
            
               {code}
            
              </code>
            </pre>
          </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 mb-20">
        <div className="flex flex-wrap justify-center">
          <Link 
            className="font-bold text-sdv-secondary hover:underline"
            to={`https://sdv.dev/SDV/getting_started/install.html`}
          >Install SDV <FontAwesomeIcon width="16" icon={faArrowRight} /></Link>
        </div>
      </div>


      <div className="absolute -bottom-1 left-0 right-0">
        <WhiteBottomWave color={`#000036`} />
      </div>
    </section>
  )
}