import React, { useState } from 'react'
import "./Navbar.css"
import { GiHamburger } from "react-icons/gi"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
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
              <Link to="/" className = "home">
                <li>
                    Home
                </li>
              </Link>
              <Link to="/register" className = "register">
                <li>
                    Register
                </li>
              </Link>  
              <Link to="/login" className = "login">
                <li>
                    Login
                </li>
              </Link>
            </ul>
        </div>
        <div className="mobile-view">
          {/* hamburget menu start  */}
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