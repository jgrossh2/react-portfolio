import React, { useState, useEffect } from 'react';
import Home from '../../pages/Home';
import ContactInfo from '../ContactInfo';
import ResumeInfo from '../ResumeInfo';
import PortfolioInfo from '../PortfolioInfo';
import NavTabs from '../NavTabs';
import About from '../AboutInfo';

function Nav() {

    const [currentPage, handlePageChange] = useState("About");

    useEffect(() => {
        document.title = (currentPage); }, [currentPage]);

    const renderPage = () => {
        switch(currentPage) {
            case "Home" :
                return <Home />;
            // case "About" :
            //     return <About />;
            // case "Contact" :
            //     return <ContactInfo />;
            case "Resume" :
                return <ResumeInfo />;
            case "Portfolio" :
                return <PortfolioInfo />;
            // default: 
            //     return <Home />;
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