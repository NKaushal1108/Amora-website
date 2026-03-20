import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroText from './components/IntroText';
import ImageBanners from './components/ImageBanners';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <IntroText />
      <ImageBanners />
      <Gallery />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
