import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';

function Projects() {

    const allProjects = [
        {
            id: 0,
            name: "Meural",
            description: "A social drawing app made for creative people.",
            github: "https://github.com/stepheff1994/second-group-project",
            deployed: "http://meural.herokuapp.com/",
            image: "meural.jpg"
        },
        {
            id: 1,
            name: "Virtual Fortune Cookie",
            description: "A virtual fortune cookie!",
            github: "https://github.com/clhurlbut/virtual_fortune_cookie",
            deployed: "https://clhurlbut.github.io/virtual_fortune_cookie/",
            image: "virtualCookie.jpg"
        },
        {
            id: 2,
            name: "Calender App",
            description: "A work day scheduling app.",
            github: "https://github.com/clhurlbut/calendar-app/",
            deployed: "https://clhurlbut.github.io/calendar-app/",
            image: "workdayScheduler.png"
        },
        {
            id: 3,
            name: "Budget Tracker",
            description: "A simple PWA to help with managing a budget.",
            github: "https://github.com/clhurlbut/budget-tracker",
            deployed: "https://secure-eyrie-31260.herokuapp.com/",
            image: "budgetTracker.jpg"
        },
        {
            id: 4,
            name: "NoteTaker",
            description: "A simple app to take notes!",
            github: "https://github.com/clhurlbut/noteTaker",
            deployed: "https://pacific-stream-27456.herokuapp.com/",
            image: "notetaker.jpg"
        },
        {
            id: 5,
            name: "NoFT",
            description: "An application to share NoFTs with the world, visit the market listing, and even download the actual asset!",
            github: "https://github.com/Siphon880gh/reprint",
            deployed: "http://reprint-media.herokuapp.com/",
            image: "noftScreenshot.jpg"
        }
    ];


    return (
        <Container id="Projects">
            <CardColumns>
                {allProjects.map(project => {
                    return (

                        <Card id="flip-card" key={project.id}>
                            <div id="flip-data">

                                <div id="flip-front">
                                    <Card.Title className="project-name">{project.name}</Card.Title>
                                    <Card.Img id="flip-img" src={require(`../../../assets/photos/${project.image}`).default} alt="screenshot of project" />
                                    <div className="project-card">
                                        <Card.Text className="project-description">{project.description}</Card.Text>
                                    </div>
                                </div>
                                <div id="flip-back">
                                    <div>
                                        <Card.Text><Card.Link href={project.github} target="_blank" rel="noreferrer" ><strong>Github </strong></Card.Link> </Card.Text>
                                        <Card.Text><Card.Link href={project.deployed} target="_blank" rel="noreferrer" className="align-middle"><strong>Deployed App</strong></Card.Link></Card.Text>
                                    </div>
                                </div>
                            </div>

                        </Card>

                    )
                })}
            </CardColumns>
        </Container >
    );
}



export default Projects;