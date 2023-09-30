// Example: ImageList.js
import React from 'react';
import { useAppContext } from './context/AppContext';
import ImageCard from './ImageCard';

const ImageList = () => {
  const { images, loading, error } = useAppContext();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error('Error:', error);
    return <p>Error loading images.</p>;
  }

  if (images.length === 0) {
    return <p className='alignCenter'>No images found.</p>;
  }

  return (
    <div className='imagesArea'>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
