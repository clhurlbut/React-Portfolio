import React, { useState } from 'react';

import Navigation from '../components/Navigation';
import Resume from '../components/Pages/Resume';
import About from '../components/Pages/About';
import Projects from '../components/Pages/Projects';
import Contact from '../components/Pages/Contact';
import Footer from '../components/Footer'



function Portfolio() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        // Add a switch statement that will return the appropriate component of the 'currentPage'
        switch (currentPage) {

            case 'About':
                return <About />;
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;

            default:
                return <About />;
        }
        //
    };

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

            {
                // Render the component returned by 'renderPage()'
                renderPage(currentPage)
                //
            }

            <Footer />
        </div>
    );
}

export default Portfolio;
