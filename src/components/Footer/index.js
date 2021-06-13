import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css'

export default function Navbar() {
    const icons = {
        fontSize: "35px",
        color: "white",
        textDecoration: "none",
    }

    return (
        <div >
            <footer className="fixed-bottom bg-dark">
                <Row className="justify-content-center">
                    <Col lg={1} style={icons}>
                        <a href="https://github.com/Arivas00"><i className="fab fa-github"></i></a>
                    </Col>
                    <Col lg={1} style={icons}>
                        <a href="https://www.linkedin.com/in/alex-chisar/"><i className="fab fa-linkedin"></i></a>
                    </Col>
                    <Col lg={1} style={icons}>
                        <a href="mailto:a.chisar00@gmail.com"><i className="far fa-envelope"></i></a>
                    </Col>
                    <Col lg={1} style={icons}>
                        <a href="https://drive.google.com/file/d/19QlZs6WRAUCi7K-xb_Dk7CIttAAR_E6l/view?usp=sharing"><i className="far fa-file"></i></a>
                    </Col>
                </Row>
            </footer>
        </div>

    )
};