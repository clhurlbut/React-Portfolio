import React from "react"

function Navigation(props) {
    const {
        contactSelected,
        setContactSelected,
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    Cassandra Hurlbut
          </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About Me
              </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact Me</span>
                    </li>
                    <li className="mx-2">
                        <a data-testid="about" href="#projects" onClick={() => setContactSelected(false)}>
                            Projects
              </a>
                    </li>
                    <li className="mx-2">
                        <a data-testid="about" href="#resume" onClick={() => setContactSelected(false)}>
                            Resume
              </a>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Navigation;