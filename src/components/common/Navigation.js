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
{label: 'Docs',
url: 'https://sdv.dev/SDV'},
{label: 'GitHub',
url: 'https://github.com/sdv-dev'},
{label: 'SDV',
url: 'https://sdv.dev/'}
]

const Navigation = ({ data, navClass, children }) => {
    const ref = useRef();

    const [isLarge, setNavbarLarge] = useState(true);

    const changeNavBackground = () => {
        const scrolledThrough = window.scrollY >= 30;
        if (scrolledThrough && isLarge) {
            document.body.classList.add("nav-bg-white");
            setNavbarLarge(false);
        } else if (!scrolledThrough) {
            document.body.classList.remove("nav-bg-white");
            setNavbarLarge(true);
        }
    };

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
        window.addEventListener("scroll", changeNavBackground);
        return () => {
            window.removeEventListener("scroll", changeNavBackground);
        };
    });

    useEffect(() => {
        window.addEventListener('load', changeNavBackground);
    })

    return (
        <nav
            className="h-20 flex flex-col justify-center items-center z-50 fixed w-full"
            id="navbar"
            ref={ref}
        >
            <div className="container mx-auto">
                <div className="relative flex md:flex-row flex-col items-center justify-between -mx-5">
                    <div className="absolute inset-y-0 px-2 left-0 flex items-center lg:hidden ">
                        <Hamburger
                            rounded
                            size={20}
                            toggled={isActive}
                            toggle={setNavActive}
                            onClick={handleNavCollapse}
                        />
                    </div>
                    <div className="flex md:flex-row flex-wrap flex-col items-center justify-between w-full px-5">
                        <div className="md:order-2 w-full lg:w-2/12 flex md:justify-center lg:justify-start justify-center">
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
                                        if (
                                            navItem.url.match(/^\s?http(s?)/gi)
                                        ) {
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
                                                <Link
                                                    className={navClass}
                                                    to={navItem.url}
                                                    key={i}
                                                >
                                                    {navItem.label}
                                                </Link>
                                            );
                                        }
                                    })}
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
