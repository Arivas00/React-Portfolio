import React from 'react';
import { Nav, Button } from 'react-bootstrap';

export default function Navbar() {
    return (
        <div >
            <Nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Alex Chisar</span>
                <Button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </Button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#/">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Nav>
        </div>

    )
};