import React from 'react';

export default function Navbar() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Alex Chisar</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>

    )
};