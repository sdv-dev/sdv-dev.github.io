import React from 'react'
import { Link } from "gatsby"

export default function NavbarItem(props) {
  return (
    <>
      <Link 
        tabIndex="0" 
        to={props.href} 
        className="block px-3 py-4 mb:py-2 rounded-md text-base hover:underline-none focus:outline-none transition duration-150 ease-in-out navbar-item">
          {props.name}
      </Link>
    </>
  )
}