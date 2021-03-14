import React from "react"

function Projects() {

    const sixProjects = [
        {
            name: "Meural",
            description: "A social drawing app made for creative people.",
            github: "https://github.com/stepheff1994/second-group-project",
            deployed: "http://meural.herokuapp.com/"
        },
        {
            name: "Virtual Fortune Cookie",
            description: "A virtual fortune cookie!",
            github: "https://github.com/clhurlbut/virtual_fortune_cookie",
            deployed: "https://clhurlbut.github.io/virtual_fortune_cookie/"
        },
        {
            name: "Calender App",
            description: "A work day scheduling app.",
            github: "https://github.com/clhurlbut/calendar-app/",
            deployed: "https://clhurlbut.github.io/calendar-app/"
        },
        {
            name: "Javascript Quiz",
            description: "A fun quiz to test your knowledge on Javascript.",
            github: "https://github.com/clhurlbut/Javascript_Quiz",
            deployed: "https://clhurlbut.github.io/Javascript_Quiz/"
        },
        {
            name: "Budget Tracker",
            description: "A simple PWA to help with managing a budget.",
            github: "https://github.com/clhurlbut/budget-tracker",
            deployed: "https://secure-eyrie-31260.herokuapp.com/"
        },
        {
            name: "NoteTaker",
            description: "A simple app to take notes!",
            github: "https://github.com/clhurlbut/noteTaker",
            deployed: "https://pacific-stream-27456.herokuapp.com/"
        }
    ];
    return (
        <div>
            <h1>Projects</h1>
        </div>
    )
}

export default Projects;