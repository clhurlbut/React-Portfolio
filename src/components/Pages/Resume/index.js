import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import resume from '../../../assets/resume/CLHurlbutResume.pdf';

function Resume() {
    return (
        <Container id='Resume' fluid="md">
            <Row >
                <Col className="tech-skills">

                    <h2><strong>Education</strong></h2>
                    <h4><strong>Columbia College Hollywood</strong></h4>
                    <span><b>BFA in Cinema Screenwriting and Producing</b></span>
                    <p> Magna Cum Laude, 2012 </p>
                    <h4><strong>UCLA Extension</strong></h4>
                    <span><b>Certificate in Full-Stack Web Development</b></span>
                    <p>Completed April 2021</p>

                </Col>
                <Col>
                    <h2><strong>Technical Skills</strong></h2>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQUERY</li>
                        <li>Bootstrap</li>
                        <li>Materialize</li>
                        <li>ReactJS</li>
                        <li>Handlebars</li>
                        <li>Restful APIs</li>
                        <li>Object Relational Mapping</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>SQL</li>
                        <li>NoSQL</li>
                        <li>Express.JS</li>
                        <li>Node.JS</li>
                        <li>Github</li>
                    </ul>
                </Col>
                <Col className="addl-skills">
                    <div className="download-resume-div"> <h2><a className="download-resume-a" href={resume} download="CLHurlbutResume.pdf"> Download Resume </a></h2></div>


                    <h2><strong>Additional Skills</strong></h2>
                    <ul>
                        <li>Constant Contact and DonorPerfect Database Management</li>
                        <li>Social Media Management</li>
                        <li>Microsoft Office, G-Suite, FinalCut Pro, Adobe Creative Suite</li>
                    </ul>
                </Col>





            </Row>
        </Container>
    )
}

export default Resume;