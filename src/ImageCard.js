// ImageCard.js
import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div className="imageBoxes">
      <img
        src={image.urls.small} 
        alt={image.alt_description}
      />
      <div style={{ marginTop: '10px' }}>
        <a href={image.urls.full}>View Full Resolution</a>
      </div>
    </div>
  );
};

export default ImageCard;
