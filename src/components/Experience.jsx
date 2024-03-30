import React from 'react';

function ExpBlock({
    designation, organization, duration, description,
}) {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <h3 className="mb-0">{designation}</h3>
                <div className="subheading mb-3">{organization}</div>
                <p>
                    {description}
                </p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">{duration}</span></div>
        </div>
    );
}

function Experience({
    experiences = [],
}) {
    return (
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>
                {
                // eslint-disable-next-line react/jsx-props-no-spreading
                    experiences.map((exp) => <ExpBlock {...exp} />)
                }
            </div>
        </section>
    );
}

export default Experience;
