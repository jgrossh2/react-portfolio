import React, { useState } from "react";

function ContactInfo() {
  return (
    <div
      style={{
        border: "solid darkgrey 2px",
        margin: " 50px 50px 50px 175px",
        width: "50%",
      }}
    >
      <h1 data-testid="h1tag" style={{ paddingLeft: "40%" }}>
        CONTACT ME
      </h1>
      <div>
        <a
          style={{
            color: "darkslategrey",
            fontWeight: "bold",
            fontSize: "20px",
            textDecoration: "underline",
            paddingLeft: "40%",
          }}
          href="mailto:joannagrosshans2@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          @Joanna Grosshans
        </a>
      </div>
      <div
        style={{
          color: "darkslategrey",
          fontWeight: "bold",
          fontSize: "20px",
          paddingLeft: "40%",
        }}
      >
        <label for="phone">PHONE: #847.347.7356</label>
      </div>
    </div>
  );
}

export default ContactInfo;
