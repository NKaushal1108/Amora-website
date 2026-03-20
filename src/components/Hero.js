import React from 'react';
import './Hero.css';
import image01 from './brideinwhitedress.jpg';
import image02 from './womenkathak.jpg';
import image03 from './greenbridal.jpg';
import image04 from './redbridal.jpg';


const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-image hero-image-1">
          <div className="image-placeholder">
            <img src={image01} alt="Bride in White Dress" />
          </div>
        </div>
        <div className="hero-image hero-image-2">
          <div className="image-placeholder">
            <img src={image02} alt="Woman Kathak" />
          </div>
        </div>
        <div className="hero-image hero-image-3">
          <div className="image-placeholder">
            <img src={image03} alt="Green Bridal" />
          </div>
        </div>
        <div className="hero-image hero-image-4">
          <div className="image-placeholder">
            <img src={image04} alt="Red Bridal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
