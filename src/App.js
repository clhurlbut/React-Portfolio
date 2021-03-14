import React from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {


  return (
    <div>
      <Navigation
      ></Navigation>
      <main>

        <About></About>
        <Projects></Projects>
        <Resume></Resume>
        <Contact></Contact>

      </main>
      <Footer></Footer>
    </div>

  );
}

export default App;
