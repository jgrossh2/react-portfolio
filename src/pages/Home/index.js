import React from "react";
import About from '../../pages/About';
import Portfolio from "../../pages/Portfolio";
import Resume from "../../pages/Resume";
 
function Home() {
    return (
        <section>
            <About />
            {/* <Resume /> */}
            <Portfolio />
        </section>
    )
};
export default Home;