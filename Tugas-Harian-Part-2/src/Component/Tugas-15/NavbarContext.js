import React, { useState, createContext } from 'react'

export const NavbarContext = createContext();

export const NavbarProvider = props => {
  const [tema, setTema] = useState("light");
  const tombolTema = () => {
      setTema(tema === "light" ? "dark" : "light");
  };

  const color = tema === "light" ? "#333" : "#FFF";
  const background = tema === "light" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = background;

  return (
    <NavbarContext.Provider value={[tema, tombolTema]}>
      {props.children}
    </NavbarContext.Provider>
  );
};