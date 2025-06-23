import React from "react";
import dataceboHorizontalLogo from "../../../static/datacebo-horizontal-logo.svg";
import { Navigation } from ".";
import Footer from "../../components/Footer";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const LightLayout = ({ children, hasInfoBar }) => {
  return (
    <>
      <div className="bg-fixed bg-cover bg-gray-1">
        <div className="viewport-top">
          <Navigation
            isDark={false}
            isTransparent={false}
            navclassName="block px-4 lg:px-5 py-4 md:py-2 rounded-md text-base hover:underline-none focus:outline-none transition duration-150 ease-in-out navbar-item"
            hasInfoBar={hasInfoBar}
          >
            <a href="https://datacebo.com">
              <div className="w-auto">
                <img
                  src={dataceboHorizontalLogo}
                  alt="DataCebo Logo"
                  className="dark-logo lg:pb-1"
                />
              </div>
            </a>
          </Navigation>

          <main className={`${hasInfoBar ? "pt-8" : ""}`}>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LightLayout;
