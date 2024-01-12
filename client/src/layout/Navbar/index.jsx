import React, { useState } from 'react'
import './navbar.scss'
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { RiMenuFill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
  const [isOpenRespnavbar, setIsOpenRespnavbar] = useState(false)
  function handleOpenRespNavbar() {
    setIsOpenRespnavbar(!isOpenRespnavbar)
  }
  return (
    <nav>
      <div className="navbarLeftBox">
        <img src="https://preview.colorlib.com/theme/aroma/img/logo.png" alt="" />
      </div>
      <div className="navbarMiddleBox">
        <Link className='link' to={"/"}>Home</Link>
        <Link className='link' to={"/shop"}>Shop</Link>
        <Link className='link' to={"/blog"}>Blog</Link>
        <Link className='link' to={"/pages"}>Pages</Link>
        <Link className='link' to={"/contact"}>Contact</Link>
        <Link className='link' to={"/add"}>Add</Link>
      </div>
      <div className="navbarRightBox">
        <button><IoIosSearch /></button>
        <button><IoCartOutline /></button>
        <button><GoHeart /></button>
        <button className='buyBtn'>Buy Now</button>
      </div>
      <div className="hiddenMenuBox" onClick={handleOpenRespNavbar}>
        {isOpenRespnavbar 
        ?
        <MdOutlineClose />
      :
      <RiMenuFill />

      }
      </div>
      <div className={`respNavbar ${isOpenRespnavbar ? "openNavbar" :""}`}>
        <ul>
          <li>
            <Link className='link' to={"/"}>Home</Link>
          </li>
          <li>
            <Link className='link' to={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link className='link' to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link className='link' to={"/pages"}>Pages</Link>
          </li>
          <li>
            <Link className='link' to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link className='link' to={"/add"}>Add</Link>
          </li>
        </ul>
        <div className="respBtnsBox">
        <button><IoIosSearch /></button>
        <button><IoCartOutline /></button>
        <button><GoHeart /></button>
        <button className='buyBtn'>Buy Now</button>
        </div>
      </div>
    </nav>


  )
}

export default Navbar