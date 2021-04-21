import React, { useEffect } from "react";
import AOS from "aos";

const ImageModal = ({ onClose, currentPhoto }) => {
  const { name, description, part, Github, deployed, index } = currentPhoto;

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div data-aos="zoom-in">
      <div
        onClick={onClose}
        style={{
          backgroundColor: "lightgrey",
          maxWidth: "75%",
          padding: "25px",
        }}
      >
        <div>
          <img
            style={{ maxWidth: "80%", margin: "0 auto" }}
            src={require(`../../assets/Portfolio/${index}.png`).default}
            alt="image"
          />
          <h5 style={{ paddingTop: "12px" }}>{name}</h5>
          <h6>{description}</h6>
          <h6>{part}</h6>
          <h6>
            <a href={Github} target="_blank" rel="noreferrer">
              <span style={{ color: "black", overflowWrap: "anywhere" }}>
                {Github}
              </span>
            </a>
          </h6>
          <h6>
            <a href={deployed} target="_blank" rel="noreferrer">
              <span style={{ color: "black" }}>{deployed}</span>
            </a>
          </h6>
        </div>
        <button onClick={onClose} type="button" style={{ fontSize: "15px" }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
