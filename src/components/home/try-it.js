import React, { useEffect, useState } from "react";
import { Link } from 'gatsby'
import WhiteTopWave from "./wave-top-white"
import WhiteBottomWave from "./wave-bottom-white"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCopy } from "@fortawesome/free-solid-svg-icons";
import Prism from "prismjs";

import "prismjs/components/prism-python";
import "prismjs/themes/prism-twilight.css";
import "prismjs/themes/prism-okaidia.css";

const code = `from sdv import load_demo, SDV

# Use pre-loaded demo tables
metadata, tables = load_demo(metadata=True)

sdv = SDV()
sdv.fit(metadata, tables)

synthetic_data = sdv.sample()
print(synthetic_data)`;

export default function TryIt() {
  const [strCode, setStrCode] = useState('');
  const [isCopied, setCopied] = useState(false);

  // const printtheString = (str, code) => {
  //   for (var i = 0; i < code.length; i++) {

  //     setTimeout(function() {
  //       setStrCode(str + code[i])
  //     }, 500)
  //   }

  // }

  // useEffect(() => {
  //   // printtheString(strCode, code)
  // }, [strCode])

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

      <div className="container mt-8">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-auto px-4 relative ">
          <button 
            className="absolute right-6 bottom-3 text-white p-1 rounded z-10 focus:outline-none opacity-80 hover:opacity-100 font-light"
          type="button" onClick={() => copyCodeToClipboard()}>
            {isCopied && `Copied`}
            {/* 
            {!isCopied && `Copy`} */}
            {` `}
             <FontAwesomeIcon width="16" icon={faCopy} />
          </button>
          <textarea id="text-area" rows="1" className="opacity-0 absolute bottom-10 left-10 right-10 top-10 z-0">
            {code}
          </textarea>
          <div className="code-container relative z-1">
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