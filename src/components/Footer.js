import React from "react";

import Logo from "../../assets/logo.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlack, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { Link } from "gatsby"

export default function Footer() {
  return (
    <section className="-mt-20 bg-white z-10 relative pt-36">
      <div className="container mx-auto mb-20 md:mb-11">
        <div className="flex flex-col md:flex-row justify-center md:justify-start -mx-6">
          <div className="flex-shrink w-full md:w-3/12 px-6">
            <Logo width="83" height="45" />
            <div className="flex flex-row -mx-1 mt-4">
              <div className="px-1">
                <Link to="#" className="w-10 h-10 flex justify-center items-center bg-sdv-mute inline-block rounded-full">
                  <FontAwesomeIcon width="16" icon={faSlack} />
                </Link>
              </div>
              <div className="px-1">
                <Link to="#" className="w-10 h-10 flex justify-center items-center bg-sdv-mute inline-block rounded-full">
                  <FontAwesomeIcon width="16" icon={faTwitter} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-grow md:w-9/12 text-center md:text-left mx-6 px-3">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 text-sdv-footer">
                <p className="font-bold mb-6">Site</p>
                <ul className="font-light">
                  <li className="mb-4">Blog</li>
                  <li className="mb-4">Docs</li>
                  <li className="mb-4"></li>
                </ul>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 text-sdv-footer">
                <p className="font-bold mb-6">Documenation</p>
                <ul className="font-light">
                  <li className="mb-4">Getting Started</li>
                  <li className="mb-4">User Guides</li>
                  <li className="mb-4">API</li>
                  <li className="mb-4">Developers</li>
                </ul>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 text-sdv-footer">
                <p className="font-bold mb-6">Github</p>
                <ul className="font-light">
                  <li className="mb-4">SDV</li>
                  <li className="mb-4">CTGAN</li>
                  <li className="mb-4">Copulas</li>
                  <li className="mb-4">All Libraries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
