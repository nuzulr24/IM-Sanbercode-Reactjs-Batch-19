import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movie, setMovie] = useState([
    { title: "Harry Potter", duration: 120},
    { title: "Sherlock Holmes", duration: 125},
    { title: "Avengers", duration: 130},
    { title: "Spiderman", duration: 124},
  ]);

  return (
    <MovieContext.Provider value={[movie, setMovie]}>
      {props.children}
    </MovieContext.Provider>
  );
};
