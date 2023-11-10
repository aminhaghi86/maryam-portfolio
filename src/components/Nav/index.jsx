import React, { useState } from "react";
import "./nav.scss";
import Hamburger from "../SVG/Hamburger";
import { Link } from "react-router-dom";
import Logo from "../SVG/Logo";
const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <Hamburger />
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link onClick={toggleMenu} to={"/"}>
            home
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to={"/about"}>
            About
          </Link>
        </li>
      </ul>
      {/* <img width={100} height={100} src="./IMG_0493.png" alt="maryam" style={{background:'none'}} /> */}
    </nav>
  );
};

export default Nav;
