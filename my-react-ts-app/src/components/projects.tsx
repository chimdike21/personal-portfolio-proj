import React from 'react';

const Projects: React.FC = () => {
    return (
        <section id="projects">
            <div className="project-h">
                <h2>Here's what</h2>
                <h3>I've worked on</h3>
            </div>
            <div className="container">
                <div className="project">
                    <h1>To-Do Web App</h1>
                    <img src="./assets/Screenshot 2024-12-26 at 17.52.41.png" height="169px" width="300px" alt="To-Do Web App" />
                    <div className="project-info">
                        <p>A simple web page where you can keep up with your tasks for the day.</p>
                    </div>
                    <a href="https://chimdike21.github.io/to-doApp/">View Project</a>
                </div>
                {/* Repeat for other projects */}
            </div>
        </section>
    );
};

export default Projects;