import React from 'react';
import styles from './navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.chimdi}>CHIMDIKE'S PORTFOLIO</h1>
            <ul className={styles.navlinks}>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Link Me</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;