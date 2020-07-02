import React from 'react';
import './App.module.css';
import {HashRouter, Route, Switch} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Monday from "./components/Monday/Monday";
import Tuesday from "./components/Tuesday/Tuesday";
import Wednesday from "./components/Wednesday/Wednesday";
import Thursday from "./components/Thursday/Thursday";
import Friday from "./components/Friday/Friday";

// class App extends React.Component{
//     state = {
//         isActive: false
//     }
//
//     isActiveLink = () => {
//         this.setState({
//                 isActive: true
//             }
//         )
//     }
//     render () {
//         let activeLink = this.state.isActive ? 'activeLink' : ''
//         return (
//             <div>
//                 <HashRouter>
//                                <Navbar/>
//                               <Switch>
//                                    <Route path='/monday'  ><Monday isActiveLink={this.isActiveLink}   /> </Route>
//                                   <Route path='/tuesday'><Tuesday/> </Route>
//                                  <Route path='/wednesday'><Wednesday/></Route>
//                                  <Route path='/thursday'><Thursday/></Route>
//                                  <Route path='/friday'><Friday/></Route>
//                                </Switch>
//
//                          </HashRouter>
//             </div>
//         )
//     }
// }
//
function App() {
  return (
      <HashRouter>
            <Navbar/>
            <Switch>
                <Route path='/monday'  ><Monday/> </Route>
                <Route path='/tuesday'><Tuesday/> </Route>
                <Route path='/wednesday'><Wednesday/></Route>
                <Route path='/thursday'><Thursday/></Route>
                <Route path='/friday'><Friday/></Route>
            </Switch>

      </HashRouter>

  );
}

export default App;
