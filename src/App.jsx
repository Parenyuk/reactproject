import React from 'react';
import './App.module.css';
import {HashRouter, Route, Switch} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Monday from "./components/Monday/Monday";
import Tuesday from "./components/Tuesday/Tuesday";
import Wednesday from "./components/Wednesday/Wednesday";
import Thursday from "./components/Thursday/Thursday";
import Friday from "./components/Friday/Friday";

function App() {
  return (
      <HashRouter>
            <Navbar/>
            <Switch>
                <Route path='/monday'><Monday/> </Route>
                <Route path='/tuesday'><Tuesday/> </Route>
                <Route path='/wednesday'><Wednesday/></Route>
                <Route path='/thursday'><Thursday/></Route>
                <Route path='/friday'><Friday/></Route>
            </Switch>

      </HashRouter>

  );
}

export default App;
