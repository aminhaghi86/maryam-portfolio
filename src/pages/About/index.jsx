import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";
import myCv from "/mycv.pdf";
const About = () => {
  return (
    <div className="cv-container" >
      <Link  to={myCv} target="_blank" rel="noopener noreferrer">
        Download my Cv
      </Link>
    </div>
  );
};

export default About;
