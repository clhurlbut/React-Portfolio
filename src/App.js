import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {




  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Navigation
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navigation>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Projects currentCategory={currentCategory}></Projects>
            <Resume></Resume>
          </>
        ) : (
            <Contact></Contact>
          )}
      </main>
    </div>
  );
}

export default App;
