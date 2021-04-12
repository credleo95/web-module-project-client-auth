import './App.css';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';  
import Login from './Components/Login'; 
import ProtectedRoute from './Components/ProtectedRoute';
import FriendsList from './Components/FriendsList';


function App() {
  return (
    <div className="App">
      <h1> Testing for App Component.</h1>
      <h2> Please click below to login </h2>
      <Router>
        <Link to="/login">Login</Link>

        <Switch>
          <Route  exact path="/login" component={Login}/>
          <ProtectedRoute exact path="/protected" component={FriendsList}/>
          <Route component={Login}/>
          
        </Switch>


      </Router>
      
    </div>
  );
}

export default App;
