import React from "react";
import "./landing.scss";
// import Logo from "../SVG/Logo";
const Landing = () => {
  return (
    <>
      <div className="landing-container">
        <img className="maryam-image" src="./Maryam.png" alt="landing-image" />
        <p className="content-first">I'm Maryam Fadaei</p>
        <p className="content-second">Senior Graphic Designer</p>
        <img
        className="logo-image"
          src="./IMG_0493.png"
          alt="maryadm"
          style={{ background: "none" }}
        />
      </div>
    </>
  );
};

export default Landing;
