import React from "react";

const ImageModal = ({ onClose, currentPhoto }) => {
  const { name, image } = currentPhoto;

  return (
    <div onClick={onClose}>
      <div>
        <img src={image} alt="image" />
        <h4>{name}</h4>
      </div>
      <button onClick={onClose} type="button">
          Close this Modal
      </button>
    </div>
  );
};

export default ImageModal;
