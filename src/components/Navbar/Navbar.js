import React, { useState } from 'react'
import "./Navbar.css"
import { GiHamburger } from "react-icons/gi"
import { Link } from 'react-router-dom'

const Navbar = ({cookies}) => {
  const [isMobile, setIsMobile] = useState(false);
  let buttons;

  if(cookies.get("Authorization")){
      buttons = (
        <ul>
          <Link to="/home" className = "home">
                <li>
                    Home
                </li>
          </Link>
          <Link to="/" className = "logout" onClick={() => {cookies.remove("Authorization");
          window.location.href = "/"}} >
            <li>
                Logout
            </li>
          </Link>
        </ul>
      )
  } else {
    buttons = ( <ul>
        <Link to="/register" className = "register">
            <li>
                Register
            </li>
            </Link>  
            <Link to="/" className = "login">
              <li>
                Login
              </li>
            </Link>
        </ul>)
  }

  return (
      <nav className="main-nav">
        <div className="logo">
            <h2>
              <span>R</span>eci
              <span>B</span>ook
            </h2>
        </div>
        <div className={isMobile ? "mobile-menu-link" : "menu-link"}
          onClick={() => setIsMobile(false)}>
            <ul>
                {buttons}
            </ul>
        </div>
        <div className="mobile-view">
          <div className="hamburger-menu">
            <button className="hamburger-btn" onClick={() => setIsMobile(!isMobile)}>
              <GiHamburger />
            </button>
          </div>
        </div>
      </nav>
  )
}

export default Navbar