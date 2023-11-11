import React from "react";

const ImageModal = ({ imageUrl, alt, onClose }) => {
  return (
    <div className="image-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={imageUrl} alt={alt} />
      </div>
    </div>
  );
};

export default ImageModal;
