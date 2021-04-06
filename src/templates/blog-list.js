import React from "react"
import ProgressBar from "react-scroll-progress-bar";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import BlogMainHero from '../components/BlogMainHero'

import BlogHeader from '../components/BlogHeader'

export default function BlogList({ children }) {
  return (
    <div>
      <ProgressBar bgcolor="#000036" />
      <BlogMainHero />
      <Navbar />
      <div className="relative z-10">
      <BlogHeader />
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
