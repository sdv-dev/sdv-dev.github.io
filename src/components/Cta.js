import React from 'react'
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Cta() {
  return (
    <section className="md:py-20 py-10" style={{
      background: 'linear-gradient(90deg, #03B0F2 1.57%, #01E0C9 100%)'
    }}>
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="max-w-sm">
            <p className="text-white text-6xl font-bold leading-tight mb-6 lg:mb-0">Let's put synthetic data to work.</p>
          </div>
          <div className="flex justify-center items-center">
            <Link to="https://github.com/sdv-dev" 
              className="px-6 py-4 inline-block bg-white text-sdv-dark rounded-full font-semibold leading-none text-lg"
            target="_blank">
              <FontAwesomeIcon width="16" icon={faGithub} />
              {' '}
              View on Github
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}