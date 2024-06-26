import React from 'react';
import Profile from '../images/profile.png';

// eslint-disable-next-line no-undef
const isMob = () => (window.innerWidth < 600);

function Navigation({ list, name }) {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
            id="sideNav"
        >
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">{name}</span>
                {!isMob() && (
                    <span className="d-none d-lg-block">
                        <img
                            className="img-fluid img-profile rounded-circle mx-auto mb-2"
                            src={Profile}
                            alt="profic-pic"
                            loading="lazy"
                            width="156"
                            height="156"
                        />
                    </span>
                )}
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    {list.map((l) => (
                        <li className="nav-item" key={l}>
                            <a className="nav-link js-scroll-trigger" href={`#${l}`}>
                                {l}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
