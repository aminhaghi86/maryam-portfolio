import React from "react";
import "./handycrafts.scss";
import { handyImages } from "../../utils/data";

const disableRightClick = (event) => {
  event.preventDefault();
};

const HandyCrafts = () => {
  return (
    <div className="handicrafts-container">
      {handyImages.map((item, id) => {
        return (
          <div key={id} className="handicrafts-container_image">
            <img
              src={item.url}
              alt={item.alt}
              onContextMenu={disableRightClick}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HandyCrafts;
