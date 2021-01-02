import React from 'react';
import Navigation from './components/Navigation';
import Data from './data.json';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';

function App() {
    const navigations = Object.keys(Data || {});
    const {
        about,
        experience,
        education,
        skills,
        projects,
        awards,
    } = Data;
    return (
        <>
            <Navigation list={navigations} name={about.name} />
            <div className="container-fluid p-0">
                <About about={about} />
                <hr className="m-0" />
                <Experience experiences={experience} />
                <hr className="m-0" />
                <Education educations={education} />
                <hr className="m-0" />
                <Skills skills={skills} />
                <hr className="m-0" />
                <Projects projects={projects} />
                <hr className="m-0" />
                <Awards awards={awards} />
            </div>
        </>
    );
}

export default App;
