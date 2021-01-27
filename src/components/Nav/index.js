import React from 'react';

function Nav() {

    return (
        <header>
            <h2>
                portfolio
            </h2>
            <nav>
                <ul className="flex-row">
                    <li>
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    <li>
                        <span>Projects</span>
                    </li>
                    <li>
                        <span>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;