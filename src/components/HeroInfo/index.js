import React from "react";
import background from "../../assets/Background/mke.jpg";

function HeroInfo() {
    return (
            <div style={{ backgroundImage: `url(${background})`, height: "830px", width: "90%", margin: "auto" }}>
                <p style={{ fontSize: "30px", paddingTop: "390px", paddingLeft: "15px", fontWeight: "bolder"}}> Welcome! Take a look around.</p>
            </div>
        )

}

export default HeroInfo;