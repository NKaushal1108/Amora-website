import React from 'react';
import './ImageBanners.css';
import image03 from './weddingrings.jpg';
import image04 from './handsformingheart.jpg';
import image05 from './chalkboardmessage.jpg';
import image06 from './graduceleb.jpg';

const ImageBanners = () => {
  return (
    <section className="image-banners">
      <div className="banner banner-1">
        <div className="banner-placeholder">
          <img src={image03} alt="Wedding Rings" />
        </div>
      </div>
      <div className="banner banner-2">
        <div className="banner-placeholder">
          <img src={image04} alt="Hands Forming Heart" />
        </div>
      </div>
      <div className="banner banner-3">
        <div className="banner-placeholder">
          <img src={image05} alt="Chalkboard Message" />
        </div>
      </div>
      <div className="banner banner-4">
        <div className="banner-placeholder">
          <img src={image06} alt="Graduation Celebration" />
        </div>
      </div>
    </section>
  );
};

export default ImageBanners;
