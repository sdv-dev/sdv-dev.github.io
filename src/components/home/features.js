import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import config from "../../utils/siteConfig"


const features = [
  {
    icon: '/single-table.svg',
    name: 'Single Table',
    text: 'Learn a tabular model to synthesize rows in a table',
    github: '',
    docs: '',
    userguide: "https://sdv.dev/SDV/user_guides/single_table/gaussian_copula.html"
  },
  {
    icon: '/multi-table.svg',
    name: 'Multi Table',
    text: 'Learn a relational data model to synthesize multiple, related tables',
    github: '',
    docs: '',
    userguide: "https://sdv.dev/SDV/user_guides/relational/hma1.html"
  },
  {
    icon: '/time-series.svg',
    name: 'Time Series',
    text: 'Learn a time series model to synthesize new events',
    github: '',
    docs: '',
    userguide: "https://sdv.dev/SDV/user_guides/timeseries/par.html"
  }
]

export default function Features() {
  return (
    <section className="relative z-10">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-wrap -mx-4 -mt-40">
          {
            features.map((item, idx) => {
              return (
                <div className="w-full sm:w-4/12 px-4">
                  <div className="rounded-2xl bg-white p-8 border border-offwhite shadow-sm">
                    <img src={`${config.sitePath}${item.icon}`} className="my-3"/>
                    <p className="font-bold text-2xl">{item.name}</p>
                    <p className="text-lg">
                      {item.text}
                    </p>

                    <p className="mt-4 mb-3">
                      <Link to={item.userguide}
                        className="hover:text-sdv-secondary font-bold "
                      >User Guide</Link>
                    </p>

                      { item.docs !== '' && (
                        <>
                        <div className="flex flex-row text-center my-6">
                        <div className="w-1/2">
                        <Link className="text-sdv-highlight" to={item.github}>Github</Link>
                        </div>
                        <div className="w-1/2 border-l-2 border-sdv-offwhite">
                          <Link className="text-sdv-highlight" to={item.docs}>Docs</Link>
                        </div>
                        </div>
                        </>
                      )}
                      
                  </div>
                </div>
              )
            })
          }
          
        </div>

        <div className="flex flex-wrap justify-center -mx-6 my-10">
          <div className="px-6 w-auto">
            <AnchorLink to="#sdv" title="scroll">
              <img src={'/chevron-bottom.svg'} />
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  )
}