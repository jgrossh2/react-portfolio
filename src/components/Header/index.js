import React from "react";
import Nav from "../Nav";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

function Header() {
  const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`};
  `;
  return (
    <div
      style={{
        backgroundColor: "#334d4d",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        width: "100%",
      }}
    >
      <header>
        <Nav></Nav>
        <div className="App">
          <Bounce>
            <h2
              className="name"
              style={{ padding: "30px", color: "white", fontSize: "48px" }}
            >
              JOANNA GROSSHANS, WEB DEVELOPER
            </h2>
          </Bounce>
        </div>
      </header>
    </div>
  );
}

export default Header;
