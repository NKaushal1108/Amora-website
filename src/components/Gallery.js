import React from 'react';
import './Gallery.css';
import womanKathak from './g01.jpg';
import couplePier from './g02.jpg';
import greenBridal from './couplepier.jpg';
import chalkboardMessage from './g04.jpg';
import handsFormingHeart from './g05.jpg';
import weddingRings from './g03.jpg';

const Gallery = () => {
  const galleryImages = [
    { id: 1, title: 'DJ at Event', imageSrc: womanKathak, alt: 'DJ at event' },
    { id: 2, title: 'Couple on Pier', imageSrc: couplePier, alt: 'Couple on pier' },
    { id: 3, title: 'Couple on Stairs', imageSrc: greenBridal, alt: 'Couple on stairs' },
    { id: 4, title: 'Graduation Portrait', imageSrc: chalkboardMessage, alt: 'Graduation portrait' },
    { id: 5, title: 'Couple Embrace', imageSrc: handsFormingHeart, alt: 'Couple embrace' },
    { id: 6, title: 'Hands with Tattoo', imageSrc: weddingRings, alt: 'Hands with tattoo' },
  ];

  return (
    <section id="gallery" className="gallery">
      <h2 className="gallery-heading">STORIES TOLD THROUGH FRAMES.</h2>
      <p className="gallery-subtitle">
        Every portrait and every wedding photo reflects a chapter of their unique journey.
      </p>
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <div className="gallery-placeholder">
              <img src={image.imageSrc} alt={image.alt} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
