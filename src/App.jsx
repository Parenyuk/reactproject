import React from 'react';
import './App.module.css';
import Monday from "./components/Monday/Monday";
import Tuesday from "./components/Tuesday/Tuesday";
import ListElement from "./components/ListElement/ListElement";
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
      <HashRouter>
            <Navbar/>
            <Switch>
                <Route exact  path='/monday' ><Monday/> </Route>
                <Route path='/tuesday'><Tuesday/> </Route>
                <Route path='/wednesday'><ListElement title={'Wednesday'} /> </Route>
                <Route path='/thursday'><ListElement title={'Thursday'} /></Route>
                <Route path='/friday'><ListElement title={'Friday'} /></Route>
            </Switch>
      </HashRouter>

  );
}

export default App;

