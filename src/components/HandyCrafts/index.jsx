import React from "react";
import "./handycrafts.scss";
import { handyImages } from "../../utils/data";

const HandyCrafts = () => {
  return (
    <div className="handicrafts-container">
      {handyImages.map((item, id) => {
        return (
          <div key={id} className="handicrafts-container_image">
            <img src={item.url} alt={item.alt} />
          </div>
        );
      })}
    </div>
  );
};

export default HandyCrafts;
