import React from 'react'
import AboutMe from './components/AboutMe/AboutMe';
import Cover from "./components/Cover/Cover";
import Footer from './components/Footer/Footer';
import Slider from './components/Proyects/Slider';
import Skills from './components/Skills/Skills';

function App() {

  return (
    <>
    <Cover />
    <AboutMe />
    <Slider />
    <Skills />
    <Footer />
    </>
  );
}

export default App;
