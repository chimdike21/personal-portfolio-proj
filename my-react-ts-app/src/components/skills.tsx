// filepath: /src/components/skills.tsx
import React from 'react';
import styles from './skills.module.css';

const Skills: React.FC = () => {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.skillset}>
                <h2>Skills</h2>
                <p>I'm proficient in these programming skills</p>
            </div>
            <div className={styles.skillLogo}>
                <div className={styles.logoContainer} data-name="HTML5">
                    <img
                        src="assets/html-5-logo-svgrepo-com.svg"
                        height="200px"
                        width="200px"
                        alt="HTML5"
                    />
                    <span className={styles.logoName}>HTML5</span>
                </div>
                {/* Repeat for other skills */}
            </div>
        </section>
    );
};

export default Skills;