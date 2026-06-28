import React from 'react';
import styles from './about.module.css';

const About: React.FC = () => {
    return (
        <section id="about">
            <div className={styles.aboutMe}>
                <h1>About Me</h1>
                <p>
                    My name is Chimdike Divine Nwachukwu. I am an innovative and detail-oriented individual...
                </p>
            </div>
        </section>
    );
};

export default About;