import React from "react";
import { Link } from "react-router-dom";
import myCv from "/mycv.pdf";
const About = () => {
  return (
    <div className="about-page">
      <p className="content">
        For over 16 years, I've found my home in the realm of art education at
        Iranian universities, particularly at Najafabad Azad University in
        Isfahan. Alongside my academic journey, I've donned the hat of a
        decorator and art consultant, specializing in children's programs for
        television. This dual role has allowed me to breathe life into 18
        enchanting children's books and share my creations in 33 exhibitions
        worldwide. The art world has generously acknowledged my efforts with 21
        awards, underscoring my commitment to excellence and innovation. In the
        academic sphere, I've worn various hats, from teaching drawing and
        painting to delving into color theory and illustration. As the Head of
        the Department of Fabric and Clothing Design from 2019 to 2022, I played
        a key role in shaping the creative landscape. Beyond academia, I've
        shared my artistic insights through a part-time collaboration with
        Isfahan Television, contributing to logo and stage design, cloth design,
        and even teaching the nuances of painting. My dedication extends to
        fostering creativity development, as evidenced by lectures and workshops
        tailored for fellow art educators.
      </p>

      <div className="cv-container">
        <Link to={myCv} target="_blank" rel="noopener noreferrer">
          Download my Cv
        </Link>
      </div>
    </div>
  );
};

export default About;
