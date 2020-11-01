import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
// Components
import { FriendLogin } from './components/FriendLogin';
import { AddFriendForm } from './components/AddFriendForm';
import { FriendsList } from './components/FriendsList';


function App() {  

  return (
    <div >
    <Router className ="app-maindiv">
        <h1> Friends App</h1>
        <div className ="links">
          <Link to = "/" className = "link"> Home </Link>
          <Link to = "/friendlogin" className = "link"> Friend Login </Link>
          <Link to="/friendslist" className = "link"> Friends List </Link>
          <Link to = "/editingpage" className = "link"> Edit Page </Link>
          <Link to = "/addfriend" className = "link"> Add Friend </Link>
        </div>  
      
        <div >
          <Switch>
            <Route path="/friendlogin" component={FriendLogin}/>

            <PrivateRoute path="/friendslist" component={FriendsList} />
          
            <PrivateRoute path = "/addfriend" component = {AddFriendForm}/>
            
            <Route path = "/editingpage"/>    

          </Switch>
        </div>
      </Router>
      </div>
  );
}

export default App;
