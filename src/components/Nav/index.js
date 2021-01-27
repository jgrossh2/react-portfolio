import React, { useEffect } from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected 
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <header>
            <nav>
                <ul className="flex-row">
                    <li>
                        <a href="#about" className='about' onClick={() => setContactSelected(false)}>About me</a>
                    </li>
                    <li>
                        <a href='#contact' className='contact' onClick={() => setContactSelected(true)}>Contact</a>
                    </li>
                    {categories.map((category) => (
                         <li
                         className={`mx-1 ${
                             // if currentCategory.name === category.name is true, and contactSelected is false, then navActive will be returned
                             currentCategory.name === category.name && !contactSelected && 'navActive'
                             }`} 
                             key={category.name}>
                             {/* wrapped in function declaration to avoid function call when component renders */}
                             <span
                                 onClick={() => {
                                     setCurrentCategory(category);
                                     // gallery is rendered
                                     setContactSelected(false);
                                 }}
                             >
                                </span>
                                </li>
                    ))}
                    <li>
                        <a href='#portfolio' className='portfolio'>Portfolio</a>
                    </li>
                    <li>
                        <a href='#resume' className='resume'>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;