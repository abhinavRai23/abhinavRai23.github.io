/* eslint-disable camelcase */
import React from 'react';

const About = ({
    about: {
        name, about, address, phone_number, email_id,
    } = {},
}) => (
    <section className="resume-section" id="about">
        <div className="resume-section-content">
            <h1 className="mb-0">
                <span className="text-primary">{name}</span>
            </h1>
            <div className="subheading mb-5">
                {address}
                {' · (+91) '}
                {phone_number}
                {' · '}
                <a href="mailto:name@email.com">{email_id}</a>
            </div>
            <p className="lead mb-5">{about}</p>
            <div className="social-icons">
                <a className="social-icon" href="#"><i className="fab fa-linkedin-in" /></a>
                <a className="social-icon" href="#"><i className="fab fa-github" /></a>
                <a className="social-icon" href="#"><i className="fab fa-twitter" /></a>
            </div>
        </div>
    </section>
);

export default About;
