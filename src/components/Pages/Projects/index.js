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
        <div className="flex-row container" id='Projects'>
            {allProjects.map(project => {
                return (
                    <div style={{ width: "18rem" }}>
                        <div>
                            <div  >
                                <img src={require(`../../../assets/photos/${project.image}`).default} alt="screenshot of project" className="padding border" />
                                <div>
                                    <h4>{project.name}</h4>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                            <div >
                                <div>
                                    <p><a href={project.github} target="_blank" ><strong>Github </strong></a> </p>
                                    <a href={project.deployed} target="_blank" className="align-middle"><strong>Deployed App</strong></a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}



export default Projects;