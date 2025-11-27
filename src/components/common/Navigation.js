import React, { useRef, useEffect, useState } from "react";
import { Link } from "gatsby";
import { Squash as Hamburger } from "hamburger-react";

const navItems = [
  { label: "Home", url: "/", internal: true },
  { label: "Publications", url: `/resources/`, internal: true },
  {
    label: "In numbers",
    url: `/community-stats/#numbers`,
    internal: true,
  },
  {
    label: "Case studies",
    url: `/community-stats/#case-studies`,
    internal: true,
  },
  { label: "Blog", url: "https://datacebo.com/blog", internal: false },
  { label: "Company", url: "https://datacebo.com", internal: false },
  { label: "GitHub", url: "https://github.com/sdv-dev/SDV", internal: false },
];

const Navigation = ({ navClass = "site-nav-item", children, isDark }) => {
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

  return (
    <nav
      className={`${
        isDark ? "tp-start" : "white-start"
      } h-20 flex flex-col justify-center items-center z-50 fixed w-full`}
      id="navbar"
      ref={ref}
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
                    if (!navItem.internal) {
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

                  {isDark ? (
                    <a
                      className={`${navClass} secondary-btn mb-3 lg:mb-0`}
                      href="https://datacebo.com/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact Us
                    </a>
                  ) : (
                    <li className="group block lg:border-none w-full lg:w-auto text-center lg:ml-4">
                      <a
                        className="text-midnight-900 text-center font-semibold inline-block w-full px-6 lg:px-5 py-4 lg:py-2 lg:border border-b border-midnight-50 lg:rounded-lg lg:bg-[rgba(30,30,105,0.04)] group-hover:bg-[#0505580f] group-active:bg-[#132e891c]"
                        href="https://datacebo.com/contact"
                      >
                        Contact Us
                      </a>
                    </li>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
