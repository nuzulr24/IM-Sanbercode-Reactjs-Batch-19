import React, {useContext} from "react"
import {NavbarContext} from "./NavbarContext"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Form from '../Tugas-9/Form'
import List from '../Tugas-10/List'
import Timer from '../Tugas-11/Timer'
import Peserta from '../Tugas-12/Peserta'
import HooksWithAxios from '../Tugas-13/HooksWithAxios'
import Movie from "../Tugas-14/Movie"
import '../../App.css'

const NavbarList = () =>{
const [ tema, tombolTema ] = useContext(NavbarContext);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/materi-9">Materi 9</Link>
            </li>
            <li>
              <Link to="/materi-10">Materi 10</Link>
            </li>
            <li>
              <Link to="/materi-11">Materi 11</Link>
            </li>
            <li>
              <Link to="/materi-12">Materi 12</Link>
            </li>
            <li>
              <Link to="/materi-13">Materi 13</Link>
            </li>
            <li>
              <Link to="/materi-14">Materi 14</Link>
            </li>
            <li>
              <Link to="/materi-14">Materi 14</Link>
            </li>
            <li>
              <Link onClick={tombolTema}>{tema === 'light' ? 'dark' : 'light'} mode</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>  
          <Route exact path="/materi-11">
            <Timer start={4} />
          </Route>
          <Route exact path="/materi-9" component={Form}/>
          <Route exact path="/materi-10" component={List}/>
          <Route exact path="/materi-12" component={Peserta}/>
          <Route exact path="/materi-13" component={HooksWithAxios}/>
          <Route exact path="/materi-14" component={Movie}/>
        </Switch>
      </div>
    </Router>
  )
}

export default NavbarList
