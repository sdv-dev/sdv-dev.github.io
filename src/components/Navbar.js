import React, {useRef,useEffect,useState} from 'react'
import { Link } from "gatsby"
import { Squash as Hamburger } from 'hamburger-react'

import Logo from '../../assets/logo.svg'

import NavbarItem from './NavbarItem'

export default function Nav () {

  const ref = useRef();


  const [isLarge, setNavbarLarge] = useState(true)

  const changeNavBackground = () => {
    const scrolledThrough = window.scrollY >= 30;
    if (scrolledThrough && isLarge) {
      document.body.classList.add("nav-bg-white");
      setNavbarLarge(false)
    } else if(!scrolledThrough) {
      document.body.classList.remove("nav-bg-white");
      setNavbarLarge(true)
    }
  }

  const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
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
      setNavActive(!isActive)
    }
  });

  const [isActive, setNavActive] = useState(false)

  const handleNavCollapse = () => setNavActive(!isActive);

  useEffect(() => {
    window.addEventListener('scroll', changeNavBackground)
    return () => {
      window.removeEventListener('scroll', changeNavBackground)
    }
  })

  return (
   
    <nav className="h-20 flex flex-col justify-center items-center z-50 fixed w-full" id="navbar" ref={ref}>
      
      <div className="container mx-auto">
        <div className="relative flex md:flex-row flex-col items-center justify-between -mx-5">
          <div className="absolute inset-y-0 px-2 left-0 flex items-center lg:hidden ">
            <Hamburger toggled={isActive} toggle={setNavActive} onClick={handleNavCollapse} />
          </div>
          <div className="flex md:flex-row flex-wrap flex-col items-center justify-between w-full px-5">
            <div className="md:order-2 w-full lg:w-2/12 flex md:justify-center lg:justify-start justify-center">
              <Link to="/" className="">
                <Logo widht="83" height="45" />
              </Link>
            </div>
            <div className="md:order-1 w-auto lg:order-2">
              <div className={`${isActive ? 'flex' : 'hidden'} lg:block absolute lg:relative top-14 lg:top-auto inset-x-0 bg-white lg:bg-transparent`}>
                <div className=" flex lg:flex-row flex-col justify-center items-center w-full">
                  <NavbarItem href="#doc" name="Docs"></NavbarItem>
                  <NavbarItem href="#github" name="Github"></NavbarItem>
                  <NavbarItem href="#sdv" name="SDV"></NavbarItem>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}