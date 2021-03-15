import React from "react";
import ProfilePhoto from '../../../assets/photos/biopic.jpg';

function AboutMe() {
    return (
        <section className="about" id='About'>
            <div className="flex-row container">
                <img className="bio-img" src={ProfilePhoto} alt="Cassie on the beach with a hat" />
                <div>
                    <p>
                        I graduated from Columbia College Hollywood with a BFA in Cinema Producing and Screenwriting.
                        Immediately after graduation I worked for Warner Bros on a hit television show. After I left the show, I became certified as a
                        therapeutic riding instructor with the Professional Association of Therapeutic Horsemanship, INTL, and as an Equine Specialist with
                        the Equine Assisted Growth And Learning Association.
                        <br></br>
                        <br></br>

                        I have worked with a non-profit for the last several years, and decided I needed to make another change. I have been
                        enjoying coding and will be updating this section as class progresses. I want to use my new skill set with web development
                        to help better the lives of those with different abilities.
          </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;