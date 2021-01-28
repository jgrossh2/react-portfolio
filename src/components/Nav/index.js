import React, { useState, useEffect } from 'react';
import About from '../About';
import Contact from '../Contact';
import Resume from '../Resume';
import Portfolio from '../Portfolio';
import NavTabs from '../NavTabs'

function Nav() {
    // const {
    //     categories = [],
    //     setCurrentCategory,
    //     currentCategory,
    //     contactSelected,
    //     setContactSelected 
    // } = props;

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
        // <header>
        //     <nav>
        //         <ul className="flex-row">
        //             <li>
        //                 <a href="#about" className='about' onClick={() => setContactSelected(false)}>About me</a>
        //             </li>
        //             <li>
        //                 <a href='#contact' className='contact' onClick={() => setContactSelected(true)}>Contact</a>
        //             </li>
        //             {categories.map((category) => (
        //                 <li
        //                  className={`mx-1 ${
        //                      // if currentCategory.name === category.name is true, and contactSelected is false, then navActive will be returned
        //                      currentCategory.name === category.name && !contactSelected && 'navActive'
        //                      }`} 
        //                      key={category.name}>
        //                      {/* wrapped in function declaration to avoid function call when component renders */}
        //                      <span
        //                          onClick={() => {
        //                              setCurrentCategory(category);
        //                              // gallery is rendered
        //                              setContactSelected(false);
        //                          }}
        //                         > 
        //                             <a href={category.name}>{category.name}</a>
        //                         </span>
        //                 </li>
        //             ))}
        //             <li>
        //                 <a href='#portfolio' className='portfolio'>Portfolio</a>
        //             </li>
        //             <li>
        //                 <a href='#resume' className='resume'>Resume</a>
        //             </li>
        //         </ul>
        //     </nav>
        // </header>
    )
}

export default Nav;