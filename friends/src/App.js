import React from 'react'; 
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import axios from 'axios'; 
import login from './Components/Login'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/login'>Login</Link>
        <Switch>
          <Route path='/login' component={login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
