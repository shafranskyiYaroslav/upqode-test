import React from 'react';
import './App.css';
import Banner from './components/Banner';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import About from './components/About';
import GetInTouch from './components/GetInTouch'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Banner />
      <WhyChooseUs />
      <Products />
      <About />
      <GetInTouch />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
