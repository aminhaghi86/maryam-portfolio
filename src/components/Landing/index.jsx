import React from "react";
const Landing = () => {
  return (
    <>
      <div className="landing-container">
        <img className="maryam-image" src="./Maryam.png" alt="landing-image" />
        <p className="content-first">
          I'm Maryam
          <br /> Fadaei
        </p>
        <p className="content-second">
          Graphic Designer <br />
          <span style={{ paddingLeft: "3rem" }}>and</span> <br />
          Illustrator
        </p>
      </div>
    </>
  );
};

export default Landing;
