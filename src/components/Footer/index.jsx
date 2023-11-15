import React, { useState } from "react";
import Linkedin from "../SVG/Linkedin";
import Gmail from "../SVG/Gmail";
import Instagram from "../SVG/Instagram";
import { Link } from "react-router-dom";
import Whatsapp from "../SVG/Whatsapp";
const index = () => {
  const [isHovered, setIsHovered] = useState(false);

  const styleAmin = {
    background: isHovered
      ? "#FFFFFF"
      : "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,243,1) 100%)",

    color: isHovered ? "#000000" : "#FFFFFF",
    fontWeight: 500,
    marginLeft: ".5rem",
    padding: "0.5rem",
    transition: "background 1s ease",
  };
  return (
    <footer>
      <div className="social-media-container">
        <Link
          to={"https://api.whatsapp.com/send?phone=46760200726"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Whatsapp />
        </Link>
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
      </div>
      <p style={{ textAlign: "center", padding: "1rem" }}>
        Website created and developed by
        <Link
          style={styleAmin}
          to="mailto:aminhaghi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Amin Haghi
        </Link>
      </p>
    </footer>
  );
};

export default index;
