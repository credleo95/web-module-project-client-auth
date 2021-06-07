import React from 'react'; 
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import axios from 'axios'; 
import Login from './Components/Login'; 
import FriendsList from './Components/FriendsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/login'>Login</Link>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route exact path='/friendslist'component={FriendsList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
