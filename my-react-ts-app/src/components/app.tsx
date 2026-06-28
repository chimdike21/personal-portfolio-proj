import React from 'react';
import Navbar from './navbar';
import Intro from './intro';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';

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