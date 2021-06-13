import React from "react";
import { Container, Card, Image, Row, Col } from 'react-bootstrap';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../assets/styles/style.css';
import ProfilePic from "../assets/images/Prof_pic.jpg"

export default function About() {

   const imgStyle = {
        width: '250px',
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    }


    return (
        <div >
            <Navbar />
            <br></br>
            <br></br>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <Card style={{ width: '40rem' }}>
                            <Card.Body>
                                <Image src={ProfilePic} style={imgStyle} />
                                <br></br>
                                <h1 style={{ textAlign: "center" }}>About Me</h1>
                                <hr></hr>
                                <Card.Text>
                                    Hi my name is Alex Chisar and welcome to my portfolio website! A little about myself, I graduated from Temple University with a bachelors degree in neuroscience in 2010. The past 5 years I have been working at a non-profit called Bancroft NeuroRehab where I provide cognitive therapy to people with traumatic brain injuries. I enrolled in the UPenn Bootcamp looking for a career change in something I have always been interested in. CODING!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>

    )
}