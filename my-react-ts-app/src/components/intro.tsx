import React from 'react';
import styles from './intro.module.css';

const Intro: React.FC = () => {
    return (
        <div className={styles.intro}>
            <h1>Hey, I'm a Frontend Developer</h1>
            <h2>...and here is my portfolio</h2>
        </div>
    );
};

export default Intro;