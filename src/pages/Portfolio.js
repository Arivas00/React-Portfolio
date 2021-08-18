import React from "react";
import { Container, Card, Image, Row, Col } from 'react-bootstrap';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Project";
import jamchat from "../assets/images/jamchatdemo.gif";
import movie from "../assets/images/MovieSnapshot.png";
import note from "../assets/images/Note-Taker.png";
import password from "../assets/images/PasswordGenerator.png";
import workday from "../assets/images/WorkDay.png";
import empDirectory from "../assets/images/Employee-Directory.png";
import workout from "../assets/images/Workout-Tracker.png";
import matchboard from "../assets/images/MatchBoard.png";
import budget from "../assets/images/BudgetTracker.png";

export default function Portfolio() {
    return (
        <div >
            <Navbar />
            <br></br>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <Card style={{ width: '75rem' }}>
                            <Card.Body>
                                <h1 style={{ textAlign: "center" }}>Portfolio</h1>
                                <hr></hr>
                                <Row className="mx-auto">
                                <Col xs={4}>
                                        <Project
                                            img={matchboard}
                                            title="Match Board"
                                            link="https://boardmatch.herokuapp.com/"
                                            repo="https://github.com/Chinedu613/BoardMatch"
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <Project
                                            img={jamchat}
                                            title="Jam Chat"
                                            link="https://jam-chat.herokuapp.com"
                                            repo="https://github.com/Arivas00/JAMChat"
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <Project
                                            img={movie}
                                            title="Movie Snapshot"
                                            link="https://sa605935.github.io/Movie_Snapshot/"
                                            repo="https://github.com/Arivas00/Movie_Snapshot"
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <br></br>
                                <Row className="mx-auto">
                                <Col xs={4}>
                                        <Project
                                            img={password}
                                            title="Password Generator"
                                            link="https://arivas00.github.io/Password_Generator/"
                                            repo="https://github.com/Arivas00/Password_Generator"
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <Project
                                            img={workday}
                                            title="Work Day Scheduler"
                                            link="https://arivas00.github.io/Work_Day_Scheduler/"
                                            repo="https://github.com/Arivas00/Work_Day_Scheduler"
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <Project
                                            img={budget}
                                            title="Budget Tracker"
                                            link="https://arivas-budget-tracker.herokuapp.com/"
                                            repo="https://github.com/Arivas00/Budget-Trackers"
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <br></br>
                                <Row className="mx-auto">
                                <Col xs={4}>
                                        <Project
                                            img={note}
                                            title="Note Taker"
                                            link="https://notes-taker-1.herokuapp.com/"
                                            repo="https://github.com/Arivas00/Note-taker"
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <Project
                                            img={workout}
                                            title="Fitness Tracker"
                                            link="https://workout-tracker-00.herokuapp.com/"
                                            repo="https://github.com/Arivas00/Workout_tracker"
                                        />
                                    </Col>
                                    <Col xs={4}>
                                        <Project
                                            img={empDirectory}
                                            title="Employee Directory"
                                            link="https://arivas00.github.io/Employee-Directory/"
                                            repo="https://github.com/Arivas00/Employee-Directory"
                                        />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>

    )
}