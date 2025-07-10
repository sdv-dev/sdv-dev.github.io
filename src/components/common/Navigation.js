import React, { useRef, useEffect, useState } from "react";
import { Link } from "gatsby";
import { Squash as Hamburger } from "hamburger-react";
import PropTypes from "prop-types";

// import Logo from "../../../assets/logo.svg";

/**
 * Navigation component
 *
 * The Navigation component takes an array of your Ghost
 * navigation property that is fetched from the settings.
 * It differentiates between absolute (external) and relative link (internal).
 * You can pass it a custom class for your own styles, but it will always fallback
 * to a `site-nav-item` class.
 *
 */

const origin = typeof window !== "undefined" ? window.location.origin : "";

const navItems = [
  { label: "Home", url: "/" },
  { label: "Publications", url: `${origin}/resources/` },
  {
    label: "In numbers",
    url: `${origin}/community-stats/#numbers`,
  },
  {
    label: "User stories",
    url: `${origin}/community-stats/#user-stories`,
  },
  { label: "Blog", url: "https://datacebo.com/blog" },
  { label: "Company", url: "https://datacebo.com" },
  { label: "GitHub", url: "https://github.com/sdv-dev/SDV" },
];

const Navigation = ({ navClass, children, isDark }) => {
  const ref = useRef();

  const navbarClassName = isDark ? "nav-bg-dark" : "nav-bg-white";

  // const [isWhite, setNavbarColor] = useState(false);

  const changeNavBackground = () => {
    const scrolledThrough = window.scrollY >= 30;
    if (scrolledThrough) {
      document.body.classList.add(navbarClassName);
      // setNavbarColor(false);
    } else {
      document.body.classList.remove(navbarClassName);
      // setNavbarColor(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBackground);
    return () => {
      window.removeEventListener("scroll", changeNavBackground);
    };
  });

  useEffect(() => {
    if (
      window.location.hash === "#core-contributors" &&
      window.location.hash !== "#guest-authors"
    ) {
      window.scrollTo(0, 0);
    }
  }, []);

  const useOutsideClick = (ref, callback) => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    useEffect(() => {
      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  };

  useOutsideClick(ref, () => {
    if (isActive) {
      setNavActive(!isActive);
    }
  });

  const [isActive, setNavActive] = useState(false);

  const handleNavCollapse = () => setNavActive(!isActive);

  useEffect(() => {
    setTimeout(changeNavBackground, 50);
  });

  const path = typeof window !== "undefined" ? window.location.pathname : "";

  const addGradientHeader =
    path.includes("/community-stats") ||
    path.includes("/sd-gym") ||
    path.includes("/404");

  return (
    <nav
      className={`${
        isDark ? "tp-start" : "white-start"
      } h-20 flex flex-col justify-center items-center z-50 fixed w-full`}
      id="navbar"
      ref={ref}
      style={{
        background:
          addGradientHeader &&
          "linear-gradient(90deg, #03B0F2 1.57%, #01E0C9 100%)",
      }}
    >
      <div className="container mx-auto">
        <div className="relative flex md:flex-row flex-col items-center justify-between -mx-5">
          <div className="absolute nav-toggler inset-y-0 px-4 left-0 flex items-center lg:hidden ">
            <Hamburger
              rounded
              size={20}
              toggled={isActive}
              toggle={setNavActive}
              onClick={handleNavCollapse}
            />
          </div>
          <div className="flex md:flex-row flex-wrap flex-col items-center justify-between w-full px-5">
            <div className="md:order-2 w-full lg:w-auto flex md:justify-center lg:justify-start justify-center">
              {children}
            </div>
            <div className="md:order-1 w-auto lg:order-2">
              <div
                className={`${
                  isActive ? "flex" : "hidden"
                } lg:block absolute lg:relative top-14 lg:top-auto inset-x-0 bg-white lg:bg-transparent`}
              >
                <div className=" flex lg:flex-row flex-col justify-center items-center w-full">
                  {navItems.map((navItem, i) => {
                    if (navItem.url.match(/^\s?http(s?)/gi)) {
                      return (
                        <a
                          className={navClass}
                          href={navItem.url}
                          key={i}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {navItem.label}
                        </a>
                      );
                    } else {
                      return (
                        <Link className={navClass} to={navItem.url} key={i}>
                          {navItem.label}
                        </Link>
                      );
                    }
                  })}

                  <a
                    className={`${navClass} bordered`}
                    href="https://datacebo.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navigation.defaultProps = {
  navClass: `site-nav-item`,
};

Navigation.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  navClass: PropTypes.string,
};

export default Navigation;

// import React, { useRef, useEffect, useState } from "react";
// import { Squash as Hamburger } from "hamburger-react";
// import NavbarItemVertical from "./NavbarItem-vertical";
// import InfoBar from "./InfoBar";
// import SdvEntIcon from "./SdvEntIcon";
// import PublicSdvIcon from "./PublicSdvIcon";
// import SdMetricsIcon from "./SdMetricsIcon";
// import SoftwareTestingIcon from "./SoftwareTestingIcon";
// import SimulatingScenariosIcon from "./SimulatingScenariosIcon";
// import MlModelIcon from "./MlModelIcon";
// import LabelBalancingIcon from "./LabelBalancingIcon";
// import BlogIcon from "./BlogIcon";
// import NewsroomIcon from "./NewsroomIcon";
// import SdvDocsIcon from "./SdvDocsIcon";
// import SdvAcademyIcon from "./SdvAcademyIcon";
// import SdvGuideIcon from "./SdvGuideIcon";
// import OurTeamIcon from "./OurTeamIcon";
// import CareersIcon from "./CareersIcon";

// const navbarItems = [
//   {
//     name: "Product",
//     subItems: [
//       {
//         title: "SDV Community",
//         icon: <PublicSdvIcon />,
//         url: "https://sdv.dev/",
//         text: "Founded at MIT, SDV is the most used source-available library",
//       },
//       {
//         title: "SDV Enterprise",
//         icon: <SdvEntIcon />,
//         url: "/sdv-enterprise/",
//         text: "Built on the open core, SDV Enterprise offers scalability, business logic, and more",
//       },
//       {
//         title: "SDMetrics",
//         icon: <SdMetricsIcon />,
//         url: "https://docs.sdv.dev/sdmetrics/",
//         text: "Our vendor-agnostic library to evaluate the synthetic data",
//       },
//     ],
//   },

//   {
//     name: "Use cases",
//     subItems: [
//       {
//         title: "Testing software applications",
//         icon: <SoftwareTestingIcon />,
//         url: "https://datacebo.com/blog/fake-to-synthetic-ml/",
//         text: "Unlock developer productivity by providing timely access to realistic test data",
//       },
//       {
//         title: "Simulating Scenarios",
//         icon: <SimulatingScenariosIcon />,
//         url: "https://datacebo.com/blog/sdv-flights-synthesizer/",
//         text: "Use generative AI models to create scenarios and test outcomes",
//       },
//       {
//         title: "Training AI models",
//         icon: <MlModelIcon />,
//         url: "https://datacebo.com/blog/synthetic-clones-for-ml/",
//         text: `Overcome the shortage of data to train your AI models<span class="invisible-space">placeholder placeholder placeholder</span>`,
//       },
//       {
//         title: "Sharing data",
//         icon: <LabelBalancingIcon />,
//         url: "https://datacebo.com/blog/synthetic-label-balancing/",
//         text: "Share data with external parties to improve collaboration outcomes",
//       },
//     ],
//   },
//   { name: "Announcements", url: "/announcements/" },
//   {
//     name: "Resources",
//     subItems: [
//       {
//         title: "Blog",
//         icon: <BlogIcon />,
//         url: "https://datacebo.com/blog/",
//         text: "Insights on synthetic data, our product and successful use cases",
//       },
//       {
//         title: "Newsroom",
//         icon: <NewsroomIcon />,
//         url: "/newsroom/",
//         text: "Our latest media coverage and expert industry insights",
//       },
//       {
//         title: "SDV Docs",
//         icon: <SdvDocsIcon />,
//         url: "https://docs.sdv.dev/sdv",
//         text: "Documentation and demos to learn more about SDV",
//       },
//       {
//         title: "SDV Academy",
//         icon: <SdvAcademyIcon />,
//         url: "",
//         text: "Course catalogue with the latest SDV tips and tricks",
//         tag: "Coming soon",
//       },
//       {
//         title: "SDV Guides",
//         icon: <SdvGuideIcon />,
//         url: "",
//         text: "Practical guidance on deploying synthetic data effectively",
//         tag: "Coming soon",
//       },
//     ],
//   },

//   {
//     name: "Company",
//     subItems: [
//       {
//         title: "Our Team",
//         icon: <OurTeamIcon />,
//         url: "/team/",
//         text: "Meet our team and discover our inspiring mission",
//       },
//       {
//         title: "Careers",
//         icon: <CareersIcon />,
//         url: "/careers/",
//         text: "Join us to create the future of Generative AI",
//       },
//     ],
//   },
//   { name: "Pricing", url: "/pricing/" },
//   { name: "Support", url: "/support/" },
// ];

// const secondRowNavbarItems = [
//   {
//     name: "SDV Community",
//     subItems: [
//       {
//         title: "SDV Community stats",
//         icon: <PublicSdvIcon />,
//         url: "/community-stats",
//         text: "Founded at MIT, SDV is the most used source-available library",
//       },
//     ],
//   },
//   { name: "Publications", url: "/resources" },
//   { name: "Blog", url: "https://datacebo.com/blog/" },
//   { name: "Github", url: "https://github.com/sdv-dev" },
// ];

// /**
//  * Navigation component
//  *
//  * The Navigation component takes an array of your Ghost
//  * navigation property that is fetched from the settings.
//  * It differentiates between absolute (external) and relative link (internal).
//  * You can pass it a custom class for your own styles, but it will always fallback
//  * to a `site-nav-item` class.
//  *
//  */

// const Navigation = ({ children, isDark, isTransparent, hasInfoBar }) => {
//   const ref = useRef();

//   const navbarClassName = isDark
//     ? "nav-bg-dark"
//     : isTransparent
//     ? "nav-bg-tp"
//     : "nav-bg-white";

//   // const [isWhite, setNavbarColor] = useState(false);

//   const changeNavBackground = () => {
//     const scrolledThrough = window.scrollY >= 30;
//     if (scrolledThrough) {
//       document.body.classList.add(navbarClassName);
//       // setNavbarColor(false);
//     } else {
//       document.body.classList.remove(navbarClassName);
//       // setNavbarColor(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeNavBackground);
//     return () => {
//       window.removeEventListener("scroll", changeNavBackground);
//     };
//   });

//   useEffect(() => {
//     if (
//       window.location.hash === "#core-contributors" &&
//       window.location.hash !== "#guest-authors"
//     ) {
//       window.scrollTo(0, 0);
//     }
//   }, []);

//   const useOutsideClick = (ref, callback) => {
//     const handleClick = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) {
//         callback();
//       }
//     };

//     useEffect(() => {
//       document.addEventListener("click", handleClick);

//       return () => {
//         document.removeEventListener("click", handleClick);
//       };
//     });
//   };

//   useOutsideClick(ref, () => {
//     if (isActive) {
//       setNavActive(!isActive);
//     }
//   });

//   const [isActive, setNavActive] = useState(false);
//   const [isSecondActive, setIsSecondActive] = useState(false);

//   const handleNavCollapse = () => setNavActive(!isActive);
//   const handleSecondNavCollapse = () => setIsSecondActive(!isSecondActive);

//   useEffect(() => {
//     setTimeout(changeNavBackground, 50);
//   });

//   return (
//     <>
//       {hasInfoBar && <InfoBar />}
//       <nav
//         className={`${isTransparent ? "tp-start" : ""}
//       ${isDark ? "" : "white-start"}
//       ${hasInfoBar ? "top-[42px]" : "top-0"}
//       bg-white h-16 flex flex-col justify-center items-center z-[60] fixed w-full border-b border-midnight-200`}
//         id="navbar"
//         ref={ref}
//       >
//         <div className="max-w-7xl w-full px-4 mx-auto">
//           <div className=" flex md:flex-row flex-col items-center justify-between -mx-5">
//             <div className="absolute inset-y-0 px-4 right-0 flex items-center lg:hidden">
//               <Hamburger
//                 color="#000036"
//                 rounded
//                 size={20}
//                 toggled={isActive}
//                 toggle={handleNavCollapse}
//                 onClick={handleNavCollapse}
//               />
//             </div>
//             <div className="flex md:flex-row flex-wrap flex-col items-center justify-between w-full px-5">
//               <div className="md:order-2 w-full lg:w-2/12 flex md:justify-center lg:justify-start justify-center">
//                 {children}
//               </div>
//               <div className="md:order-1 w-auto lg:order-2">
//                 <div
//                   className={`${
//                     isActive ? "flex" : "hidden"
//                   } lg:block nav-collapse absolute lg:static top-16 lg:top-auto inset-x-0 bg-midnight-0 lg:bg-transparent z-30`}
//                 >
//                   <div className=" flex lg:flex-row flex-col lg:justify-center items-center w-full h-full relative lg:static z-50">
//                     {navbarItems.map((item, idx) => {
//                       return <NavbarItemVertical data={item} key={idx} />;
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <nav
//         style={{
//           boxShadow:
//             "0px 4px 6px -2px rgba(0, 0, 54, 0.06), 0px 10px 15px -3px rgba(0, 0, 54, 0.10)",
//         }}
//         className={`${isTransparent ? "tp-start" : ""}
//       ${isDark ? "" : "white-start"}
//       ${hasInfoBar ? "top-[106px]" : "top-64px"}
//       bg-white h-16 flex flex-col justify-center items-center z-50 fixed w-full`}
//       >
//         <div className="max-w-7xl w-full px-4 mx-auto">
//           <div className=" flex md:flex-row flex-col items-center justify-between -mx-5">
//             <div className="absolute inset-y-0 px-4 right-0 flex items-center lg:hidden">
//               <Hamburger
//                 color="#000036"
//                 rounded
//                 size={20}
//                 toggled={isSecondActive}
//                 toggle={handleSecondNavCollapse}
//                 onClick={handleSecondNavCollapse}
//               />
//             </div>
//             <div className="flex md:flex-row flex-wrap flex-col items-center justify-end w-full px-5">
//               <div className="md:order-1 w-auto lg:order-2">
//                 <div
//                   className={`${
//                     isSecondActive ? "flex" : "hidden"
//                   } lg:block nav-collapse absolute lg:static top-16 lg:top-auto inset-x-0 bg-midnight-0 lg:bg-transparent z-30`}
//                 >
//                   <div className="flex lg:flex-row flex-col lg:justify-center items-center w-full h-full relative lg:static z-50">
//                     {secondRowNavbarItems.map((item, idx) => {
//                       return <NavbarItemVertical data={item} key={idx} />;
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// Navigation.defaultProps = {
//   navClass: `site-nav-item`,
// };

// export default Navigation;
