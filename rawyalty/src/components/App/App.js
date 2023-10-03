import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import About from '../About/About';
import Contact from '../Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;
