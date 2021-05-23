import React from 'react'
import { Link } from 'gatsby'

export default function Join() {
  return (
    <section className="bg-sdv-dark pb-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-6">
          <div className="px-6 w-full sm:w-8/12 md:w-7/12 text-center ">
            <p className="grad-txt uppercase text-sm tracking-widest font-bold my-8">Join Us</p>
            <h2 className="text-white my-8">Join Our Community</h2>
            <p className="text-white mx-auto max-w-lg text-lg">
              Chat with developers across the world. Stay up-to-date with the latest features, blogs, and news.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-6">
          <div className="px-6 w-full my-20">
            <img src={`${process.env.SITEPATH}/join our community map.png`} alt="join our community map"/>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 mb-20">
        <div className="flex flex-wrap justify-center">
          <Link 
            className="hover:border-sdv-offwhite border border-sdv-dark p-0.5 inline-block rounded-full font-semibold leading-none text-lg grad-bg"
            to={`https://sdv-space.slack.com/join/shared_invite/zt-gdsfcb5w-0QQpFMVoyB2Yd6SRiMplcw#/`}
          ><span className="px-10 py-3 block rounded-full bg-sdv-dark"><span className=" grad-txt">Join Slack</span></span></Link>
        </div>
      </div>

    </section>
  )
}