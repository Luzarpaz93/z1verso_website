import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Home, Gaming, Creative,Business } from './pages';
import Navbar from './Navbar/Navbar';
import Sidebar from './Navbar/Sidebar'

function App() {
  return (
 
    <Router>
    <div>

      <Navbar/>
 
      <Switch>
        <Route path="/creative">
         <Creative/>
        </Route>
        <Route path="/business">
         <Business/>
        </Route>
        <Route path="/gaming">
          <Gaming/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>



  );
}

export default App;
