import React from 'react';

const EducationBlock = ({
    name,
    degree,
    duration,
    specilization,
}) => (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
            <h3 className="mb-0">{name}</h3>
            <div className="subheading mb-3">{degree}</div>
            <div>{specilization}</div>
        </div>
        <div className="flex-shrink-0"><span className="text-primary">{duration}</span></div>
    </div>
);

const Education = ({
    educations = [],
}) => (
    <section className="resume-section" id="education">
        <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            {
                // eslint-disable-next-line react/jsx-props-no-spreading
                educations.map((edu) => <EducationBlock {...edu} />)
            }
        </div>
    </section>
);

export default Education;
