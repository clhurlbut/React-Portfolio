import React from "react"
import resume from '../../assets/resume/CLHurlbutResume.pdf';

function Resume() {
    return (
        <div className="paper container" id='resume'>
            <div className="border">
                <h2>Resume</h2>
                <h3><a href={resume} download="CLHurlbutResume.pdf"> Download Resume </a></h3>
            </div>
            <div className="margin border">
                <h3>Technical Skills</h3>
                <ul className="container mx-3 flex-left">
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
                <h3>Additional Skills</h3>
                <ul>
                    <li>Managerial Skills</li>
                    <li>Constant Contact and DonorPerfect Database Management</li>
                    <li>Social Media Management</li>
                    <li>FinalCut Pro, full Adobe Creative Suite</li>

                </ul>
                <h3>Education</h3>
                <h4><strong>Columbia College Hollywood</strong></h4>
                <span><b>Bachelors of Fine Arts in Cinema Screenwriting and Producing</b></span>
                <p> Graudated Magna Cum Laude in 2012 </p>
                <h4><strong>UC Los Angeles</strong></h4>
                <span><strong>Certificate in Full-Stack Web Development</strong></span>
                <p> In Progress, estimated completion date April 2021</p>


            </div>

        </div>
    )
}

export default Resume;