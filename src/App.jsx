import React from 'react';
import Navigation from './components/Navigation';
import Data from './data.json';
import About from './components/About';

function App() {
    const navigations = Object.keys(Data || {});
    const {
        about,
        // experience,
        // education,
        // skills,
        // projects,
        // awards,
    } = Data;
    return (
        <>
            <Navigation list={navigations} name={about.name} />
            <div className="container-fluid p-0">
                <About about={about} />
            </div>
        </>
    );
}

export default App;
