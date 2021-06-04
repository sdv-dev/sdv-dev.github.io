import React from 'react'

export default function FooterSm() {
  return (
    <div className="-mt-20 bg-white z-10 relative pt-36">
    {/* The footer at the very bottom of the screen */}
    <footer className="site-foot">
        <div className="container mx-auto mb-20 md:mb-11">
            <div className="flex flex-col md:flex-row justify-center md:justify-start -mx-4">
                <div className="flex-shrink w-full md:w-3/12 px-4">
                    <Link to="/">
                        {site.logo ? (
                            <img
                                width="80"
                                height="44"
                                className="site-logo"
                                src={site.logo}
                                alt={site.title}
                            />
                        ) : (
                            <Img
                                fixed={
                                    data.file.childImageSharp
                                        .fixed
                                }
                                alt={site.title}
                            />
                        )}
                    </Link>
                    <div className="flex flex-row -mx-1 mt-4">
                        <div className="px-1">
                            <Link
                                to="#"
                                className="w-10 h-10 flex justify-center items-center bg-sdv-mute inline-block rounded-full"
                            >
                                <FontAwesomeIcon
                                    width="16"
                                    icon={faSlack}
                                />
                            </Link>
                        </div>
                        <div className="px-1">
                            <Link
                                to="#"
                                className="w-10 h-10 flex justify-center items-center bg-sdv-mute inline-block rounded-full"
                            >
                                <FontAwesomeIcon
                                    width="16"
                                    icon={faTwitter}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-grow md:w-9/12 mx-6 px-3">
                    <div className="flex flex-wrap -mx-4">
                        
                            {site.navigation.map(
                                (navItem, i) => {
                                    if (
                                        navItem.url.match(
                                            /^\s?http(s?)/gi
                                        )
                                    ) {
                                        return (
                                            <a
                                                className="px-4 py-3"
                                                href={
                                                    navItem.url
                                                }
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
                                                className="px-4 py-3"
                                                to={navItem.url}
                                                key={i}
                                            >
                                                {navItem.label}
                                            </Link>
                                        );
                                    }
                                }
                            )}
                        
                    </div>
                </div>
            </div>

            <div className="flex -mx-4 mt-4">
                <div className="w-full px-4">
                    <Link to="/">{site.title}</Link> © 2021
                    {/* &mdash;  */}
                    {/* Published with{" "} */}
                    {/* <a
                        className="site-foot-nav-item"
                        href="https://ghost.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ghost
                    </a> */}
                </div>
            </div>
        </div>
    </footer>
</div>

  )
}