import React, { useState } from "react";
import { graphicImages } from "../../utils/data";
import ImageModal from "../ImageModel";

const disableRightClick = (event) => {
  event.preventDefault();
};

const Graphic = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="handicrafts-container">
      {graphicImages.map((item, id) => {
        return (
          <div key={id} className="handicrafts-container_image">
            <img
              src={item.url}
              alt={item.alt}
              onContextMenu={disableRightClick}
              onClick={() => openModal(item.url)}
            />
          </div>
        );
      })}
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          alt="Image Modal"
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Graphic;
