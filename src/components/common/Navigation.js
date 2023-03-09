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

const navItems = [
  { label: "Blog", url: "https://datacebo.com/blog" },
  { label: "Company", url: "https://datacebo.com" },
  { label: "GitHub", url: "https://github.com/sdv-dev/SDV" },
];

const Navigation = ({ data, navClass, children, isDark }) => {
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
