import React from "react"

function Projects() {

    const allProjects = [
        {
            name: "Meural",
            description: "A social drawing app made for creative people.",
            github: "https://github.com/stepheff1994/second-group-project",
            deployed: "http://meural.herokuapp.com/",
            image: "meural.jpg"
        },
        {
            name: "Virtual Fortune Cookie",
            description: "A virtual fortune cookie!",
            github: "https://github.com/clhurlbut/virtual_fortune_cookie",
            deployed: "https://clhurlbut.github.io/virtual_fortune_cookie/",
            image: "virtualCookie.jpg"
        },
        {
            name: "Calender App",
            description: "A work day scheduling app.",
            github: "https://github.com/clhurlbut/calendar-app/",
            deployed: "https://clhurlbut.github.io/calendar-app/",
            image: "workdayScheduler.png"
        },
        {
            name: "Javascript Quiz",
            description: "A fun quiz to test your knowledge on Javascript.",
            github: "https://github.com/clhurlbut/Javascript_Quiz",
            deployed: "https://clhurlbut.github.io/Javascript_Quiz/",
            image: "javascriptQuiz.jpg"
        },
        {
            name: "Budget Tracker",
            description: "A simple PWA to help with managing a budget.",
            github: "https://github.com/clhurlbut/budget-tracker",
            deployed: "https://secure-eyrie-31260.herokuapp.com/",
            image: "budgetTracker.jpg"
        },
        {
            name: "NoteTaker",
            description: "A simple app to take notes!",
            github: "https://github.com/clhurlbut/noteTaker",
            deployed: "https://pacific-stream-27456.herokuapp.com/",
            image: "notetaker.jpg"
        }
    ];


    return (
        <div className="flex-wrap">
            {allProjects.map(project => {
                return (

                    <div id="flip-card">
                        <div id="flip-data">
                            <div id="flip-front">
                                <img src={require(`../../../assets/photos/${project.image}`).default} alt="screenshot of project" className="padding border" />
                                <div className="project-card">
                                    <h3 className="project-name">{project.name}</h3>
                                    <p className="project-description">{project.description}</p>
                                </div>
                            </div>
                            <div id="flip-back">
                                <div>
                                    <p><a href={project.github} target="_blank" rel="noreferrer" ><strong>Github </strong></a> </p>
                                    <p><a href={project.deployed} target="_blank" rel="noreferrer" className="align-middle"><strong>Deployed App</strong></a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div >
    );
}



export default Projects;