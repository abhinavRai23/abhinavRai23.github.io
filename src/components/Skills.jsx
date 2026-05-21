import React from 'react';

function Skills({
    skills: {
        categories = [],
        workflows = [],
    } = {},
}) {
    return (
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><i className="fab fa-html5" /></li>
                    <li className="list-inline-item"><i className="fab fa-css3-alt" /></li>
                    <li className="list-inline-item"><i className="fab fa-sass" /></li>
                    <li className="list-inline-item"><i className="fab fa-less" /></li>
                    <li className="list-inline-item"><i className="fab fa-js-square" /></li>
                    <li className="list-inline-item"><i className="fab fa-react" /></li>
                    <li className="list-inline-item"><i className="fab fa-node-js" /></li>
                    <li className="list-inline-item"><i className="fab fa-npm" /></li>
                    <li className="list-inline-item"><i className="fab fa-git" /></li>
                </ul>
                {categories.length > 0 && (
                    <>
                        <div className="subheading mb-3">Core Expertise</div>
                        <ul className="fa-ul mb-4">
                            {categories.map((category) => (
                                <li key={category.name} className="mb-2">
                                    <span className="fa-li">
                                        <i className="fas fa-cog text-primary" />
                                    </span>
                                    <strong>
                                        {category.name}
                                        {': '}
                                    </strong>
                                    {category.items.join(', ')}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                    {
                        workflows.map((workflow) => (
                            <li key={workflow}>
                                <span className="fa-li">
                                    <i className="fas fa-check" />
                                </span>
                                {workflow}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}

export default Skills;
