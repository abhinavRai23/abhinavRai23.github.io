/* eslint-disable camelcase */
import React from 'react';

const About = ({
    about: {
        name, about, address, phone_number, email_id, socials: {
            linkedin,
            github,
            twitter,
        } = {},
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
                <a href={`mailto:${email_id}`}>{email_id}</a>
            </div>
            <p className="lead mb-5">{about}</p>
            <div className="social-icons">
                <a className="social-icon" href={linkedin}>
                    <i className="fab fa-linkedin-in" />
                </a>
                <a className="social-icon" href={github}>
                    <i className="fab fa-github" />
                </a>
                <a className="social-icon" href={twitter}>
                    <i className="fab fa-twitter" />
                </a>
            </div>
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <a
                    href="/Abhinav-Rai(FrontEnd-Developer).pdf"
                    className="btn border-primary text-primary"
                >
                    Download Resume
                    <i className="fa fa-download" style={{ marginLeft: '5px' }} />
                </a>
            </div>
        </div>
    </section>
);

export default About;
