import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [content] = useState(["about", "projects", "contactForm", "resume"]);
  const [contentSelected, setContentSelected] = useState(content[0])

  return (
    <div className="App">
      <header>
        <Navigation contentSelected={contentSelected}
          setContentSelected={setContentSelected}
          className="margin-bottom" />
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
        <Resume />
      </main>
      <Footer />

    </div>
  );
}

export default App;
