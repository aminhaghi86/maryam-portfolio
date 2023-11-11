import React from "react";
import Linkedin from "../SVG/Linkedin";
import Gmail from "../SVG/Gmail";
import Instagram from "../SVG/Instagram";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <footer>
      <Link
        to={"https://www.instagram.com/art.maryam.fadaei"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </Link>
      <Link
        to={"mailto:art.maryam.fadaei@gmail.com"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Gmail />
      </Link>
      <Link
        to={"https://www.linkedin.com/in/maryam-fadaei77"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </Link>
    </footer>
  );
};

export default index;
