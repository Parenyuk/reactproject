import React from 'react';
import './App.module.css';
import Monday from "./components/Monday/Monday";
import Tuesday from "./components/Tuesday/Tuesday";
import ListElement from "./components/ListElement/ListElement";
import {HashRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/Preloader/Preloader";

class App extends React.Component {

    state = {
        loading: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
        },3000)

    }

    render() {
        // if (   this.state.loading ) {
        //     return <Preloader/>
        // }
        return (
             <HashRouter>
                 <Navbar/>
                 <Switch>
                     <Route path='/monday'><Monday/> </Route>
                     <Route path='/tuesday'><Tuesday/> </Route>
                     <Route path='/wednesday'><ListElement title={'Wednesday'}/> </Route>
                     <Route path='/thursday'><ListElement title={'Thursday'}/></Route>
                     <Route path='/friday'><ListElement title={'Friday'}/></Route>
                 </Switch>
             </HashRouter>
        );
    }
}

export default App;

// render() {
//     return (
//         <HashRouter>
//             <Navbar/>
//             <Switch>
//                 <Route path='/monday'><Monday/> </Route>
//                 <Route path='/tuesday'><Tuesday/> </Route>
//                 <Route path='/wednesday'><ListElement title={'Wednesday'}/> </Route>
//                 <Route path='/thursday'><ListElement title={'Thursday'}/></Route>
//                 <Route path='/friday'><ListElement title={'Friday'}/></Route>
//             </Switch>
//         </HashRouter>
//
//     );
// }