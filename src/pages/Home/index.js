import React from "react";
import About from '../../pages/About';
import Portfolio from "../../pages/Portfolio";
import Resume from "../../pages/Resume";
import Hero from "../../pages/Hero"
 
function Home() {
    return (
        <section>
            <Hero />
            <About />
            {/* <Resume /> */}
            <Portfolio />
        </section>
    )
};
export default Home;