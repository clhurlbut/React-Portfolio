import React from "react"

function Navigation() {

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Cassandra Hurlbut
          </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2" >
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact">
                            Contact
                        </a>

                    </li>
                    <li className="mx-2">
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume">
                            Resume
                        </a>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Navigation;