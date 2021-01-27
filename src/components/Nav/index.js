import React from 'react';

function Nav() {

    return (
        <header>
            <nav>
                <ul className="flex-row">
                    <li>
                        <a href="#about" className='about'>About me</a>
                    </li>
                    <li>
                        <a href='#contact' className='contact'>Contact</a>
                    </li>
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