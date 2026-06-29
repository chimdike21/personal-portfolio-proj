import React from 'react';
import Navbar from './navbar/navbar';
import Intro from './intro/intro';
import About from './about/about';
import Skills from './skills/skills';
import Projects from './projects/projects';
import Contact from './contact/contact';

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;