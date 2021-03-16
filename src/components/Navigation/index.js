import React from 'react';

function Navigation(props) {
    const tabs = ['About', 'Contact', 'Projects', 'Resume'];
    return (
        <header className="header">
            <h2>
                <a href="/">
                    <span >🐴</span> Cassandra Hurlbut
          </a>
            </h2>
            <nav >
                <ul className="flex-wrap">
                    {tabs.map(tab => (
                        <li key={tab}>
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
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
