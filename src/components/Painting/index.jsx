import React, { useState } from "react";
import { paintingImages } from "../../utils/data";
import ImageModal from "../ImageModel";

const disableRightClick = (event) => {
  event.preventDefault();
};

const Painting = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="handicrafts-container">
      {paintingImages.map((item, id) => {
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

export default Painting;
