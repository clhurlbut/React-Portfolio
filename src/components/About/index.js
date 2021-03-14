import React from "react"
import bgImage from '../../assets/photos/heroBG.jpg'
function AboutMe() {
    return (
        <section className="my-5">
            <h1 id="about">Who Am I?</h1>
            <img src={bgImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div className="my-2">
                <p>
                    I graduated from Columbia College Hollywood with a BFA in Cinema Producing and Screenwriting.
                    Immediately after graduation I worked for Warner Bros on a hit television show. After I left the show, I became certified as a
                    therapeutic riding instructor with the Professional Association of Therapeutic Horsemanship, INTL, and as an Equine Specialist with
                    the Equine Assisted Growth And Learning Association. I have worked with a non-profit for the last several years, and decided I needed to make another change. I have been
                    enjoying coding and will be updating this section as class progresses. I want to use my new skill set with web development
                    to help better the lives of those with different abilities.
          </p>
            </div>
        </section>
    );
}

export default AboutMe;