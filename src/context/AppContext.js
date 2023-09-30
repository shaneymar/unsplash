import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const contextValue = {
    images,
    setImages,
    loading,
    setLoading,
    error,
    setError,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
