import React from "react"
import { Link } from "gatsby"
import ProgressBar from "react-scroll-progress-bar";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
  <div className>
    
    <ProgressBar bgcolor="#000036"/>
    <Navbar />
   
    <div className="container mx-auto">
      <div className="p-10 bg-sdv-mute rounded-30 border border-stroke pb-40">
        <Link to="/blog" className="bg-sdv-link px-6 py-2 rounded-full text-xl font-light text-white cursor-pointer inline-block">Blog</Link>
      </div>
    </div>

   
    <Footer />
  </div>
  )
}