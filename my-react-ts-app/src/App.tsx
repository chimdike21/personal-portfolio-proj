import React from 'react';
import './styles/index.css';
import ExampleComponent from './components/ExampleComponent';

const App: React.FC = () => {
    return (
        <div>
            <h1>Welcome to My React TypeScript App</h1>
            <ExampleComponent />
        </div>
    );
};

export default App;