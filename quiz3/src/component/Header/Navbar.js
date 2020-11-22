import React from "react"
import {NavbarProvider} from "./NavbarContext"
import NavbarList from "./NavbarList"

const Navbar = () =>{
  return(
    <div>
      <NavbarProvider>
        <NavbarList/>
      </NavbarProvider>
    </div>
  )
}

export default Navbar