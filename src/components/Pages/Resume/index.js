import React from "react"
import resume from '../../../assets/resume/CLHurlbutResume.pdf';

function Resume() {
    return (
        <section>
            <div className="resume container" id='Resume'>
                <div className="flex-row">
                    <div className="card margin">
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
                    </div>
                    <div className="card margin">
                        <h2><strong>Additional Skills</strong></h2>
                        <ul>
                            <li>Managerial Skills</li>
                            <li>Constant Contact and DonorPerfect Database Management</li>
                            <li>Social Media Management</li>
                            <li>FinalCut Pro, full Adobe Creative Suite</li>

                        </ul>
                    </div>
                    <div className="card margin">
                        <h2><strong>Education</strong></h2>
                        <h4><strong>Columbia College Hollywood</strong></h4>
                        <span><b>Bachelors of Fine Arts in Cinema Screenwriting and Producing</b></span>
                        <p> Magna Cum Laude, 2012 </p>
                        <h4><strong>UCLA Extension</strong></h4>
                        <span><strong>Certificate in Full-Stack Web Development</strong></span>
                        <p> In Progress, estimated completion date April 2021</p>
                    </div>
                    <div className="card">
                        <h2><a href={resume} download="CLHurlbutResume.pdf"> Download Resume </a></h2>
                    </div>




                </div>
            </div>
        </section>
    )
}

export default Resume;