import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function Project(props) {
    return (
        <div >
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>{props.title}</Card.Title>
                    <Row>
                        <Col style={{ textAlign: "center" }}><a href={props.link}>Live Page</a></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: "center" }}><a href={props.repo}>Github Repository</a></Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>

    )
}