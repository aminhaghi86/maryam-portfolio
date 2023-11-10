import React, { useState } from "react";
import "./nav.scss";
import Hamburger from "../SVG/Hamburger";
import { Link } from "react-router-dom";
// import Logo from "../SVG/Logo";
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

    </nav>
  );
};

export default Nav;
