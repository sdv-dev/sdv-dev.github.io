import React, { lazy } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import config from "../../utils/siteConfig"

export default function Join({downloads}) {

  function imageLoaded() {

  }

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

      <div className="container mx-auto mt-8 mb-8">
        <div className="flex flex-wrap justify-center -mx-2">
          <div className="w-auto px-2 mb-4">
            <Link 
              target="_blank"
              to="https://twitter.com/sdv_dev"
             className="hover:border-sdv-offwhite border border-sdv-dark p-0.5 inline-block rounded-full font-semibold leading-none text-lg grad-bg">
            <span className="px-10 py-3 block rounded-full bg-sdv-dark"><span className="grad-txt">Twitter</span></span>
            </Link>
          </div>
          <div className="w-auto px-2 mb-4">
            <Link
              target="_blank"
              className="hover:border-sdv-offwhite border border-sdv-dark p-0.5 inline-block rounded-full font-semibold leading-none text-lg grad-bg"
              to={`https://sdv-space.slack.com/join/shared_invite/zt-gdsfcb5w-0QQpFMVoyB2Yd6SRiMplcw#/`}
            ><span className="px-10 py-3 block rounded-full bg-sdv-dark"><span className=" grad-txt">Slack</span></span></Link>
          </div>
          <div className="w-auto px-2 mb-4">
            <Link 
              target="_blank"
              to="https://www.linkedin.com/company/sdv-dev/"
              className="hover:border-sdv-offwhite border border-sdv-dark p-0.5 inline-block rounded-full font-semibold leading-none text-lg grad-bg">
              <span className="px-10 py-3 block rounded-full bg-sdv-dark"><span className="grad-txt">LinkedIn</span></span>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-2 mt-4">
          <div className="w-auto px-4">
          { downloads != '' ? (
              <p className="px-4 text-white"><span className="font-bold">{downloads}K</span> Downloads</p>
            ) : ''}
          </div>
        </div>
      </div>

      <div className="container mx-auto overflow-hidden">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="px-4 w-full md:w-10/12 lg:w-9/12 mb-20 relative">
            <div data-sal="fade"
                data-sal-delay="200"
                data-sal-duration="1000"
                data-sal-easing="ease">
                <Img 
                  fluid={data.placeholderImage.childImageSharp.fluid} 
                  alt="join our community map" 
                  loading={`lazy`} 
                  />
                <div className="absolute inset-0">
                  <div className="flex flex-wrap h-full" id="loaded">
                    { [1,2,3,4,5,6,7,8,9,10,11,12].map((i, idx) => {

                      if (idx % 2 === 0) {
                        return (
                          <div className="transform duration-1000 delay-500 w-1/12 bg-sdv-dark img-cover"></div>
                        )
                      }
                      
                      return (
                        <div className="transform duration-1000 delay-500 w-1/12 bg-sdv-dark img-cover"></div>
                      )
                    })}
                  </div>
                </div>
            </div>
          </div>
        </div>
        
        
      </div>

      

    </section>
  )
}