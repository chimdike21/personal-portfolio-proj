// filepath: /src/components/Projects.tsx
import React from 'react';
import styles from '../styles/projects.module.css';

const Projects: React.FC = () => {
    return (
        <section id="projects" className={styles.projectsContainer}>
            <div className={styles.projectsHeader}>
                <h2>Here's what</h2>
                <h3>I've worked on</h3>
            </div>
            <div className={styles.projectsGrid}>
                <div className={styles.projectCard}>
                    <img
                        src="./assets/Screenshot 2024-12-26 at 17.52.41.png"
                        alt="To-Do Web App"
                        className={styles.projectImage}
                    />
                    <div className={styles.projectInfo}>
                        <h1>To-Do Web App</h1>
                        <p>
                            A simple web page where you can keep up with your tasks for the day.
                        </p>
                        <a
                            href="https://chimdike21.github.io/to-doApp/"
                            className={styles.projectLink}
                        >
                            View Project
                        </a>
                    </div>
                </div>
                {/* Repeat for other projects */}
            </div>
        </section>
    );
};

export default Projects;