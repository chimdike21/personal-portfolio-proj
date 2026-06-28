import React from 'react';

const Skills: React.FC = () => {
    return (
        <section id="skills">
            <div className="skillset">
                <h2>Skills</h2>
                <p>I'm proficient in these programming skills</p>
            </div>
            <div className="skill-logo">
                <div className="logo-container" data-name="HTML5">
                    <img src="assets/html-5-logo-svgrepo-com.svg" height="200px" width="200px" alt="HTML5" />
                    <span className="logo-name">HTML5</span>
                </div>
                {/* Repeat for other skills */}
            </div>
        </section>
    );
};

export default Skills;