import React from 'react';

function Navigation(props) {
    const tabs = ['About', 'Contact', 'Projects', 'Resume'];
    return (
        <header className="header flex-row">
            <h2>
                <a href="/">
                    <span >🐴</span> Cassandra Hurlbut
          </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {tabs.map(tab => (
                        <li className="mx-1" key={tab}>
                            <a
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
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
