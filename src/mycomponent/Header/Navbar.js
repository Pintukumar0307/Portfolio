import React, { useState, useEffect } from "react";
import Hamburger from 'hamburger-react'
import './Navbar.css';


function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMenuActive, setMenuActive] = useState(false);
  const [isOpen, setOpen] = useState(false)



  const toggleNav = () => {
    setToggleMenu((prevState) => !prevState);
    setMenuActive(!isMenuActive);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
  window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      {(toggleMenu || screenWidth > 500) && ( 
        <ul className="list">

          <li>
            <a href="#home" style={{ color: "white", textDecoration: "none" }}>
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              style={{ color: "white", textDecoration: "none" }}
              activeStyle={{ color: "yellow", textDecoration: "none" }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#skill"
              style={{ color: "white", textDecoration: "none" }}
              activeStyle={{ color: "yellow", textDecoration: "none" }}
            >
              Skill
            </a>
          </li>
          <li>
            <a
              href="#work"
              style={{ color: "white", textDecoration: "none" }}
              activeStyle={{ color: "yellow", textDecoration: "none" }}
            >
              Work
            </a>
          </li>
          
          <li>
            <a
              href="#contact"
              style={{ color: "white", textDecoration: "none" }}
              activeStyle={{ color: "yellow", textDecoration: "none" }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      )}
      <div className="hamburger-menu" onClick={toggleNav}>
     
      <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
  );
}

export default Navbar;

