import React from "react";
import Nav from '../Nav';
import background from "../../assets/Background/white.png";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

function Header() {
  const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`};
  `;

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header>
        <div className="App" style={{ padding: "50px" }}>
          <Bounce>
            <h2>JOANNA GROSSHANS, WEB DEVELOPER</h2>
          </Bounce>
        </div>
        <Nav></Nav>
      </header>
    </div>
  );
}

export default Header;
