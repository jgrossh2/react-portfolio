import React from "react";

const ImageModal = ({ onClose, currentPhoto }) => {
  const { name, description, part, Github, deployed, index } = currentPhoto;

  return (
    <div onClick={onClose}>
      <div>
        <img
          src={require(`../../assets/Portfolio/${index}.png`).default}
          alt="image"
        />
        <h4>{name}</h4>
        <h5>{description}</h5>
        <h5>{part}</h5>
        <h5>
        <a href={Github} target="_blank" rel="noreferrer">
          <span style={{ color: "black" }}>{Github}</span>
        </a>
        </h5>
        <h5>
        <a href={deployed} target="_blank" rel="noreferrer">
          <span style={{ color: "black" }}>{deployed}</span>
        </a>
        </h5>
      </div>
      <button onClick={onClose} type="button">
        Close this Modal
      </button>
    </div>
  );
};

export default ImageModal;
