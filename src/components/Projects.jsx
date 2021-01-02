import React from 'react';

const ProjectBlock = ({
    title, period, description, link,
}) => (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
            <h3 className="mb-0">{title}</h3>
            <p style={{ marginBottom: '8px' }}>{description}</p>
            {link && (
                <a href={link} target="_blank" rel="noreferrer">
                    {link}
                </a>
            )}
        </div>
        <div className="flex-shrink-0">
            <span className="text-primary">{period}</span>
        </div>
    </div>
);

const Projects = ({ projects = [] }) => (
    <section className="resume-section" id="projects">
        <div className="resume-section-content">
            <h2 className="mb-5">Projects</h2>
            {
                projects.map((project) => (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <ProjectBlock {...project} />
                ))
            }
        </div>
    </section>
);

export default Projects;
