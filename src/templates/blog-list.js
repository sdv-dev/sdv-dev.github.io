import React from "react"
import ProgressBar from "react-scroll-progress-bar";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import BlogMainHero from '../components/BlogMainHero'

export default function BlogList({ children }) {
  return (
    <div>
      <ProgressBar bgcolor="#000036" />
      <BlogMainHero />
      <Navbar />
      <div className="relative z-10">
      <div className="lg:py-48">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-6">
            <div className="w-full md:w-6/12 px-6">
              <h1>The Synthetic Data Vault Blog</h1>
            </div>
          </div>
        </div>
      </div>
        <div className="bg-sdv-placeholder mx-auto rounded-10 pt-20" style={{
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          maxWidth: '1300px'
        }}>

        <div className="container mx-auto pb-20">{children}</div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
