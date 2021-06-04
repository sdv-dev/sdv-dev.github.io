import React, { lazy } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import config from "../../utils/siteConfig"




export default function Join() {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "join our community map.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <section className="bg-sdv-dark pb-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="px-4 w-full sm:w-8/12 md:w-7/12 text-center ">
            <p className="grad-txt uppercase text-sm tracking-widest font-bold my-8">Join Us</p>
            <h2 className="text-white my-8">Join Our Community</h2>
            <p className="text-white mx-auto max-w-lg text-lg">
              Chat with developers across the world. Stay up-to-date with the latest features, blogs, and news.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 mb-8">
        <div className="flex flex-wrap justify-center -mx-2">
          <div className="w-auto px-2 mb-4">
            <Link 
              to="https://twitter.com/sdv_dev"
             className="hover:border-sdv-offwhite border border-sdv-dark p-0.5 inline-block rounded-full font-semibold leading-none text-lg grad-bg">
            <span className="px-10 py-3 block rounded-full bg-sdv-dark"><span className="grad-txt">Twitter</span></span>
            </Link>
          </div>
          <div className="w-auto px-2 mb-4">
            <Link
              className="hover:border-sdv-offwhite border border-sdv-dark p-0.5 inline-block rounded-full font-semibold leading-none text-lg grad-bg"
              to={`https://sdv-space.slack.com/join/shared_invite/zt-gdsfcb5w-0QQpFMVoyB2Yd6SRiMplcw#/`}
            ><span className="px-10 py-3 block rounded-full bg-sdv-dark"><span className=" grad-txt">Slack</span></span></Link>
          </div>
          <div className="w-auto px-2 mb-4">
            <Link 
              to="https://www.linkedin.com/company/sdv-dev/"
              className="hover:border-sdv-offwhite border border-sdv-dark p-0.5 inline-block rounded-full font-semibold leading-none text-lg grad-bg">
              <span className="px-10 py-3 block rounded-full bg-sdv-dark"><span className="grad-txt">LinkedIn</span></span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="px-4 w-full md:w-10/12 lg:w-9/12 mb-20">
            <div data-sal="fade"
                data-sal-delay="200"
                data-sal-duration="1000"
                data-sal-easing="ease">
                <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="join our community map" loading={`lazy`} durationFadeIn={2000} fadeIn={true}/>
            </div>
          </div>
        </div>
        
      </div>

      

    </section>
  )
}