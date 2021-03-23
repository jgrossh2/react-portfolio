import React from "react";
import background from "../../assets/Background/mke2.jpg";

function HeroInfo() {
    return (
            <div style={{ backgroundImage: `url(${background})`, height: "830px", width: "90%", margin: "auto" }}>
                <p style={{ fontSize: "30px", paddingTop: "390px", paddingLeft: "30px"}}> Welcome! Take a look around.</p>
            </div>
        )

}

export default HeroInfo;