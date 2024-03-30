import React, { Suspense } from 'react';
import Navigation from './components/Navigation';
import Data from './data.json';

const About = React.lazy(() => import('./components/About'));
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Education = React.lazy(() => import('./components/Education'));
const Skills = React.lazy(() => import('./components/Skills'));
const Awards = React.lazy(() => import('./components/Awards'));

function Spinner() {
    return (
        <div
            className="d-flex justify-content-center"
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

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
                <Suspense fallback={<Spinner />}>
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
                </Suspense>
            </div>
        </>
    );
}

export default App;
