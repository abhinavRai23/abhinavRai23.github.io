import React from 'react';

const AwardBlock = ({
    title,
    date = '',
    organiser = '',
    details = '',
}) => (
    <li>
        <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
        <b>{`${title} ${organiser}`}</b>
        <i>{date && `, ${date}`}</i>
        <p>{details}</p>
    </li>
);

const Awards = ({
    awards = [],
}) => (
    <section className="resume-section" id="awards">
        <div className="resume-section-content">
            <h2 className="mb-5">Awards</h2>
            <ul className="fa-ul mb-0">
                {
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    awards.map((award) => <AwardBlock {...award} />)
                }
            </ul>
        </div>
    </section>
);

export default Awards;
