import React, { useRef, useState } from "react";
import ChevronMobile from "../common/chevron-mobile";
import chevronDown from "../../../static/chevron-down.svg";
import chevronUp from "../../../static/chevron-up.svg";
import resourcesBlog from "../../../static/resources-blog.png";
import useOutsideClick from "../../utils/outside-click";

const NavbarItemVertical = ({ data }) => {
  const [isActive, setActive] = useState(false);
  const subItems = data.subItems || null;
  const currentEl = useRef(null);
  const onClick = (e) => {
    // console.log('isActive && window.innerWidth < 1024', isActive && window.innerWidth < 1024);
    if (window.innerWidth < 1024) {
      if (e.target === currentEl.current) {
        setActive(!isActive);
      }
    }
  };
  const onHover = () => {
    // console.log('hover', e.target, currentEl.current.contains(e.target));
    if (window.innerWidth >= 1024) {
      setActive(true);
    }
  };
  const onFocus = () => {
    // console.log('focus', e.target, currentEl.current.contains(e.target));
    setActive(true);
  };
  const onBlur = (e) => {
    // console.log('blur', e.target, currentEl.current.contains(e.target));
    if (!currentEl.current.contains(e.target)) {
      setActive(false);
    }
  };

  const onLeave = (e) => {
    // console.log('leave', e.target, e.target != currentEl.current, currentEl.current.contains(e.target));

    if (window.innerWidth >= 1024) {
      if (
        e.target !== currentEl.current &&
        currentEl.current.contains(e.target)
      ) {
        setActive(false);
      }
    }
  };

  useOutsideClick(currentEl, () => {
    // if (window.innerWidth >= 1024) {
    if (isActive) {
      setActive(false);
    }
    // }
  });

  if (subItems === null) {
    if (data.url === "/contact/" || data.url === "/support/") {
      return (
        <li className="group block lg:border-none w-full lg:w-auto text-center lg:ml-4">
          <a
            className="text-midnight-900 font-semibold inline-block w-full px-6 lg:px-5 py-4 lg:py-2 text-left lg:border border-b border-midnight-50 lg:rounded-lg lg:bg-[rgba(30,30,105,0.04)] group-hover:bg-[#0505580f] group-active:bg-[#132e891c]"
            href={data.url}
          >
            {data.name}
          </a>
        </li>
      );
    }
    return (
      <li className="block lg:border-none w-full lg:w-auto text-center">
        <a
          className="bg-white text-midnight-950 hover:text-midnight-600 inline-block hover:bg-[#0505580f] w-full px-6 lg:py-2 lg:pl-6 lg:pr-5 lg:rounded-[7px] lg:border lg:border-transparent lg:hover:border lg:hover:border-midnight-50 lg:px-4 xl:px-6 py-4 text-left border-b border-midnight-50"
          href={data.url}
        >
          {data.name}
        </a>
      </li>
    );
  }

  let items = data.subItems;

  return (
    <li
      className={`${
        isActive ? `is-active` : ``
      } block lg:border-none w-full lg:w-auto text-center lg:relative`}
      ref={currentEl}
      onMouseOver={onHover}
      onMouseLeave={onLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
    >
      <button
        className={`${
          isActive &&
          "lg:text-midnight-600 lg:bg-midnight-25 lg:border lg:border-midnight-50 lg:rounded-[7px]"
        } px-6 lg:py-2 lg:pl-6 lg:pr-3 flex items-center justify-between bg-white text-midnight-950 text-left lg:border lg:border-transparent hover:text-midnight-600 hover:bg-midnight-25 hover:border hover:border-midnight-50 hover:rounded-[7px] w-full lg:w-auto focus:outline-none py-4 border-b border-midnight-50 pointer-events-none lg:pointer-events-auto`}
      >
        {data.name}{" "}
        <span className="hidden lg:inline lg:pl-1">
          <img src={isActive ? chevronUp : chevronDown} alt="Chevron down" />
        </span>
        <span className="mr-2">
          <ChevronMobile isActive={isActive} />
        </span>
      </button>
      {/* add trianglular  */}

      <div
        className={`lg:absolute z-[70] ${
          items.length === 4
            ? "lg:left-[-121px] lg:w-[624px]"
            : items.length === 5
            ? "lg:left-[-362px] lg:w-[860px]"
            : "lg:left-0 lg:w-[312px]"
        } right-0 text-left dr-dwn lg:top-[px]`}
      >
        <div
          className={`bg-white lg:rounded-2xl relative lg:shadow-xl ${
            items.length === 4
              ? "lg:w-[624px]"
              : items.length === 5
              ? "lg:w-[860px]"
              : "lg:w-[312px]"
          }`}
        >
          <div className="w-0 h-0 absolute -top-2 left-6 hidden border-l-[6px] border-l-transparent border-b-[8px] border-b-white border-r-[6px] border-r-transparent"></div>
          <div className="p-3 lg:p-4 lg:mt-4">
            {data.text && (
              <div
                className="text-midnight-950 mx-auto max-w-3xl pb-3 text-center leading-tight text-lg"
                dangerouslySetInnerHTML={{ __html: data.text }}
              />
            )}
            <div className="container lg:flex lg:px-0">
              {data.name === "Resources" && (
                <div className="hidden -my-4 -ml-4 mr-4 rounded-l-2xl lg:flex lg:flex-shrink-0 flex-col justify-between w-[272px] px-9 pt-8 pb-9 bg-[linear-gradient(0deg,_rgba(255,255,255,0.80)_0%,_rgba(249,249,251,0.94)_37.88%,_rgba(247,247,250,0.98)_69.99%,_#F6F6F9_100%),_linear-gradient(90deg,_#03B0F2_0%,_#01E0C9_100%)]">
                  <div>
                    <span className="font-semibold text-blue-600 text-xs leading-[12px]">
                      Blog
                    </span>
                    <div className="font-medium text-midnight-950 leading-[22px] tracking-md mt-1.5 line-clamp-3">
                      Introducing AI Connectors: Database Integration for
                      Synthetic Data
                    </div>
                  </div>
                  <div className="shadow-[0px_8.35px_20.04px_-8.35px_rgba(0,0,54,0.14)]">
                    <img
                      src={resourcesBlog}
                      alt="Blog image"
                      className="w-[200px] h-[96px] rounded-t-xl border-t border-r border-l border-midnight-100"
                    />
                    <div className="bg-white py-[13px] pl-3.5 rounded-b-xl border-b border-r border-l font-semibold text-blue-600 text-xs">
                      <a
                        href="https://datacebo.com/blog/introducing-ai-connectors/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read the article
                      </a>
                    </div>
                  </div>
                </div>
              )}
              <div
                className={
                  items.length > 3
                    ? "columns-1 lg:columns-2 lg:gap-0"
                    : "flex flex-col"
                }
              >
                {data.name === "Use cases" && (
                  <span className="w-full block [column-span:all] uppercase text-blue-600 font-medium text-xs pl-4 pt-2.5 pb-1.5 leading-[12px] tracking-[0.6px]">
                    Use AI-generated synthetic data for
                  </span>
                )}
                {Array.from(items).map((item, idx) => (
                  <div key={`nav-${idx}`} className="break-inside-avoid group">
                    <a
                      className="bg-white hover:bg-midnight-25 text-midnight-950 w-full block rounded-[14px] px-3 py-3 lg:p-4 text-left"
                      target={
                        item.url.includes("datacebo.com") ||
                        item.url.startsWith("/")
                          ? `_self`
                          : `_blank`
                      }
                      href={item.url || undefined}
                    >
                      <div className="flex gap-2.5">
                        {item.icon && (
                          <div className="flex-shrink-0">{item.icon}</div>
                        )}
                        <div>
                          <div className="flex items-center gap-2.5">
                            <div className="font-medium text-midnight-950 leading-[24px]">
                              {item.title}
                            </div>
                            {item.tag && (
                              <div className="flex items-center font-medium text-[10px] leading-[10px] -tracking-lg bg-blue-200 rounded px-1 h-[18px]">
                                {item.tag}
                              </div>
                            )}
                          </div>
                          <div
                            className="opacity-70 text-xs lg:mt-1"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default NavbarItemVertical;
