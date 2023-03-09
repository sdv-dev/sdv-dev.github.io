import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Cta() {
  return (
    <section className="md:py-20 py-10 mx-auto" style={{
      background: 'linear-gradient(90deg, #03B0F2 1.57%, #01E0C9 100%)',
      maxWidth: "1680px"
    }}>
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="max-w-sm">
            <p className="text-white text-6xl font-bold leading-tight mb-6 lg:mb-0">Let's put synthetic data to work.</p>
          </div>
          <div className="flex justify-center items-center">
            <a href="https://github.com/sdv-dev/SDV" 
              className="px-6 py-4 inline-block bg-white text-sdv-dark rounded-full font-semibold leading-none text-lg"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon width="16" icon={faGithub} />
              {' '}
              View on Github
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}