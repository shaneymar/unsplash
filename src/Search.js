// Example: Search.js
import React, { useState } from 'react';
import { useAppContext } from './context/AppContext';
import axios from 'axios';

const Search = () => {
  const { setImages, setLoading, setError } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=OvusT4PMppZDNHNumkyVB84vCKedU_Aj8n15hUkacWA`
      );
      setImages(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='search-box'>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default Search;
