"use client"
import React from "react";
import { FaBars } from "react-icons/fa6";
import { TfiClose } from "react-icons/tfi";

export const NaveElements = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="NaveElements"  >
      <div className="Hamburger"  >
        {
          show
            ? <i className="fa-solid fa-xmark text-3xl z-50" onClick={() => setShow(!show)}><TfiClose /></i>
            : <i className="fa-solid fa-barsi text-3xl z-50" onClick={() => setShow(!show)}><FaBars /></i>
        }
      </div>
      <ul className={show ? "show" : ""}  >
        <li><a href='/'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='/blogs'>Blogs</a></li>
      </ul>
    </div>
  )
}
