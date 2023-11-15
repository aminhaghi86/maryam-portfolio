// Skills.jsx
import React, { useState } from "react";
import Art from "../SVG/Art";
import ColorTheory from "../SVG/ColorTheory";
import Adobe from "../SVG/Adobe";
import Artpc from "../SVG/Artpc";
import Calligraphy from "../SVG/Calligraphy";
import Figma from "../SVG/Figma";
import HandPainting from "../SVG/HandPainting";
import Photoshop from "../SVG/Photoshop";
import Textile from "../SVG/Textile";
import AdobeIconIllustrator from "../SVG/AdobeIconIllustrator";
const skillsData = [
  { id: 1, name: "Art", icon: <Art /> },
  { id: 2, name: "Color Theory", icon: <ColorTheory /> },
  { id: 3, name: "Adobe", icon: <Adobe /> },
  { id: 4, name: "Logo Design", icon: <Artpc /> },
  { id: 5, name: "Abode illustrator", icon: <AdobeIconIllustrator /> },
  { id: 6, name: "Calligraphy", icon: <Calligraphy /> },
  { id: 7, name: "Figma", icon: <Figma /> },
  { id: 8, name: "Hand Painting", icon: <HandPainting /> },
  { id: 9, name: "Photoshop", icon: <Photoshop /> },
  { id: 10, name: "Textile", icon: <Textile /> },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="skills-container">
      <p>Tech | Tools</p>
      <div className="skills-icons">
        {skillsData.map(({ id, name, icon }) => (
          <div
            key={id}
            className="skill-icon"
            onMouseEnter={() => setHoveredSkill(name)}
            onMouseLeave={() => setHoveredSkill(null)}
            data-name={hoveredSkill === name ? name : ""}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
