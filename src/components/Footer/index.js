import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import GithubIcon from "../../assets/vectors/githubIcon.png";



function Footer() {
    return (


        <Navbar id="footer" fixed="bottom" >
            <Container>
                <a href="https://github.com/clhurlbut" target="_blank" rel="noreferrer" id="footerLink"> <img
                    id="footer-img"
                    src={GithubIcon}
                    width="50"
                    height="50"
                    alt="Github Icon" /></a>
                <a href="https://www.linkedin.com/in/cassandra-hurlbut-7165081b6/" target="_blank" rel="noreferrer" id="footerLink">LinkedIn</a>
                <a href="https://www.instagram.com/cassbut/" target="_blank" rel="noreferrer" id="footerLink">Instagram</a>
            </Container>
        </Navbar>

    )
}

export default Footer;