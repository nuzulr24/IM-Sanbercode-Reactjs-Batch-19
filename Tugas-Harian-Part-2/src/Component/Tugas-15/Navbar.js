// project router with context

import React from "react"
import {NavbarProvider} from "./NavbarContext"
import NavbarList from "./NavbarList"

const Navbar = () =>{
  return(
    <div style={{width: "50%", margin: "0 auto"}}>
      <NavbarProvider>
        <NavbarList/>
      </NavbarProvider>
    </div>
  )
}

export default Navbar
