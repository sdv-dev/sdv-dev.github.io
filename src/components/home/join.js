import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

export default function Join({downloads}) {

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
            <p className="grad-txt uppercase text-sm tracking-widest font-bold mt-8">Join Us</p>
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
            <a 
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/sdv_dev"
             className="hover:border-sdv-offwhite border border-sdv-dark p-0.5 inline-block rounded-full font-semibold leading-none text-lg grad-bg">
            <span className="px-10 py-3 block rounded-full bg-sdv-dark"><span className="grad-txt">Twitter</span></span>
            </a>
          </div>
          <div className="w-auto px-2 mb-4">
            <a
              target="_blank"
              rel="noreferrer"
              className="hover:border-sdv-offwhite border border-sdv-dark p-0.5 inline-block rounded-full font-semibold leading-none text-lg grad-bg"
              href={`https://bit.ly/sdv-slack-invite`}
            ><span className="px-10 py-3 block rounded-full bg-sdv-dark"><span className=" grad-txt">Slack</span></span></a>
          </div>
          <div className="w-auto px-2 mb-4">
            <a 
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/datacebo"
              className="hover:border-sdv-offwhite border border-sdv-dark p-0.5 inline-block rounded-full font-semibold leading-none text-lg grad-bg">
              <span className="px-10 py-3 block rounded-full bg-sdv-dark"><span className="grad-txt">LinkedIn</span></span>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-2 mt-4 text-center">
          <div className="w-auto px-4">
          { downloads !== '' ? (
              <p className="px-4 text-white"><span className="font-bold">{downloads}K</span> Downloads</p>
            ) : ''}
          </div>
        </div>
      </div>

      <div className="container mx-auto overflow-hidden">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="px-4 w-full md:w-10/12 lg:w-9/12 mb-20 relative">
            <div data-sal="fade"
                data-sal-delay="0"
                data-sal-duration="1000"
                data-sal-easing="ease">
                <Img 
                  fluid={data.placeholderImage.childImageSharp.fluid} 
                  alt="join our community map" 
                  loading={`lazy`} 
                  />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}