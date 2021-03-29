import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Navigation(props) {
    const tabs = ['About', 'Contact', 'Projects', 'Resume'];
    return (
        <Navbar className="header">
            <Navbar.Brand href="#about">🐴 Cassandra Hurlbut</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    {tabs.map(tab => (
                        <Nav.Link key={tab}>
                            <a
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                                activeClassName="navActive"
                                className={
                                    props.currentPage === tab ? 'nav-link active' : 'nav-link'
                                }
                            >
                                {tab}
                            </a>
                        </Nav.Link>
                    ))}


                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
