import Navigation from './components/Navigation';
import Data from './data.json';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
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
        <div className="relative min-h-screen">
            {/* Sidebar Navigation */}
            <Navigation list={navigations} name={about.name} />

            {/* Main Content Area */}
            <main className="lg:pl-68 pt-16 lg:pt-0 min-h-screen">
                {/* About Section */}
                <About about={about} />
                
                {/* Visual Section Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent max-w-5xl mx-auto" />

                {/* Experience Section */}
                <Experience experiences={experience} />

                {/* Visual Section Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent max-w-5xl mx-auto" />

                {/* Education Section */}
                <Education educations={education} />

                {/* Visual Section Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent max-w-5xl mx-auto" />

                {/* Skills Section */}
                <Skills skills={skills} />

                {/* Visual Section Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent max-w-5xl mx-auto" />

                {/* Projects Section */}
                <Projects projects={projects} />

                {/* Visual Section Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent max-w-5xl mx-auto" />

                {/* Awards Section */}
                <Awards awards={awards} />
            </main>
        </div>
    );
}

export default App;

