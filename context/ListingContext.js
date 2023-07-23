import React, { useState, createContext } from 'react';

export const ListingContext = createContext({});

export const ListingProvider = ({ children }) => {
  const [listing, setListing] = useState({
    name: "property name",

  });

  return (
    <ListingContext.Provider value={{ listing, setListing }}>
      {children}
    </ListingContext.Provider>
  );
};
