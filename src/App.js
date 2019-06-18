import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

//importing Components
import NavbarApp from "./Components/NavbarApp/NavbarApp";

class App extends Component{
    // routes=(
    //       <Switch>
    //     <Route path="" Component={}/>
    //   </Switch>
    // )
  render() {
    
  return (
    <div className="App">
     <NavbarApp /> 
    </div>
  );
}}

export default App;
