// Example: Home.js
import React from 'react';
import Header from './Header';
import Search from './Search';
import ImageList from './ImageList';

const Home = () => {
  return (
    <div>
      <Header title="Unsplash" />
      <Search />
      <ImageList />
    </div>
  );
};

export default Home;
