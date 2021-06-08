import React from 'react'
import { Link } from 'gatsby'
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
    <section className="relative z-10 pb-10">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-wrap -mx-4 -mt-40">
          {
            features.map((item, idx) => {
              return (
                <div className="w-full sm:w-4/12 px-4 mb-4">
                  <div className="bg-white rounded-2xl">
                    <Link to={item.userguide} className="rounded-2xl bg-white p-4 lg:p-8 border border-offwhite h-full block transition-shadow hover:opacity-60">
                      <img src={`${config.sitePath}${item.icon}`} className="my-3"/>
                      <p className="font-bold text-xl lg:text-2xl">{item.name}</p>
                      <p className="text-base lg:text-lg">
                        {item.text}
                      </p>
                    </Link>
                  </div>
                </div>
              )
            })
          }
          
        </div>
      </div>
    </section>
  )
}