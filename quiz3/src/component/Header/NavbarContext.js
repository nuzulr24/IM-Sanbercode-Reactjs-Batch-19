import React, { useState, createContext } from 'react'

export const NavbarContext = createContext();

export const NavbarProvider = props => {
  const [tema, setTema] = useState("light");
  const tombolTema = () => {
      setTema(tema === "light" ? "dark" : "light");
  };

  // const color = tema === "light" ? "#243133" : "#FFF";
  // const background = tema === "light" ? "#FFF" : "#243133";

  // const select = document.querySelector(".topnav");
  
  // if (tema === "dark") {
  //   select.style.backgroundColor = "#394867";
  //   document.body.style.backgroundColor = "#394867";

  //   const select1 = document.querySelector(".topnav a");
  //   select1.style.color = "#1b262c";
  // } else if(tema === "light") {
  //   select.style.backgroundColor = "#bbbfca";
  //   document.body.style.backgroundColor = "#f4f4f2";

  //   // const select1 = document.querySelector(".topnav a");
  // }

  return (
    <NavbarContext.Provider value={[tema, tombolTema]}>
      {props.children}
    </NavbarContext.Provider>
  );
};