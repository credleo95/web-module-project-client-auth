import React from 'react'; 
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import axios from 'axios'; 
import Login from './Components/Login'; 
import FriendsList from './Components/FriendsList';
import PrivateRoute from './Components/PrivateRoute'; 
import './App.css';

function App() {

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href='/login'; 
  }

  return (
    <div className="App">
      <Router>
        <Link to='/login'>Log-in</Link>
        &nbsp;
        &nbsp;
        <Link onClick={logout}>Log out</Link>
        <Switch>
          <Route path='/login' component={Login}/>
          <PrivateRoute exact path='/friendslist'component={FriendsList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
