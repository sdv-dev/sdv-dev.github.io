import React from 'react'
import { Link } from "gatsby"

import GithubLogo from "../../assets/github.svg"

export default function Cta() {
  return (
    <section className="md:py-14 py-10" style={{
      background: 'linear-gradient(90deg, #03B0F2 1.57%, #01E0C9 100%)'
    }}>
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="max-w-sm">
            <p className="text-white text-3xl font-bold leading-tight mb-6 lg:mb-0">Let’s put synthetic data to work.</p>
          </div>
          <div className="flex justify-center items-center">
            <Link to="https://github.com/sdv-dev" 
              className="px-6 py-3 inline-block bg-white text-sdv-heading rounded-full font-semibold leading-none"
            target="_blank">
              <GithubLogo className=" align-bottom"/> {' '}
              View on Github
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}