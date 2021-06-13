import React from "react";
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
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
                                <br></br>
                                <h1 style={{ textAlign: "center" }}>Contact</h1>
                                <hr></hr>
                                <h4>Email: A.chisar00@gmail.com</h4>
                                <h4>Phone Number: 215-900-2374</h4>
                                <br></br>
                                <Form>
                                    <Form.Group controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Enter Message" />
                                    </Form.Group>
                                    <br></br>
                                    <Button variant="primary" className="btn btn-dark btn-lg" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>

    )
}