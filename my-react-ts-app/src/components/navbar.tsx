import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <h1 className="chimdi">CHIMDIKE'S PORTFOLIO</h1>
            <ul className="navlinks">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Link Me</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;