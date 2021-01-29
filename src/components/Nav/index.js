import React, { useState, useEffect } from 'react';
import About from '../About';
import Contact from '../Contact';
import Resume from '../Resume';
import Portfolio from '../Portfolio';
import NavTabs from '../NavTabs'

function Nav() {

    const [currentPage, handlePageChange] = useState("About");

    useEffect(() => {
        document.title = (currentPage); }, [currentPage]);

    const renderPage = () => {
        switch(currentPage) {
            case "About" :
                return <About />;
            case "Contact" :
                return <Contact />;
            case "Resume" :
                return <Resume />;
            case "Portfolio" :
                return <Portfolio />;
            default: 
                return
        }
    }
    return (
        <div>
            <header>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            <div>
            {renderPage(currentPage)}
            </div>
        </div>
    );
}

export default Nav;