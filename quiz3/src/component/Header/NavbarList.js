import React from "react"
// import {NavbarContext} from "./NavbarContext"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../Pages/Home'
import About from '../Pages/About'
import Login from '../Pages/Login'
import Book from '../Book/Book'
import '../../App.css'

const NavbarList = () =>{
// const [ tema, tombolTema ] = useContext(NavbarContext);

  const auth = sessionStorage.getItem("loggedin")

  const Logout = () => {
    sessionStorage.removeItem("loggedin")
    window.location.href = '/login';
  }

  return (
    <Router>
      <div class="topnav" id="navbar">
            <Link to="/" style={{fontWeight: "bold"}}>Sanbercode</Link>
        <div class="topnav-right">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            { auth === "true" ? (
              <>
                <Link to="/book_list">Book List</Link>
                <Link to="/keluar">Logout</Link>
              </>
            ) : (
                <Link to="/login">Login</Link>
            )}
            {/* <Link to="/book_list">Book List</Link> */}
            {/* <Link onClick={tombolTema}>{tema === "light" ? "dark" : "light"}</Link> */}
        </div>
      </div>

        <Switch>  
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/book_list" component={Book}/>
          <Route exact path="/keluar" component={Logout}/>
        </Switch>
    </Router>
  )
}

export default NavbarList
