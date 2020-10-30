import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { AddFriendForm } from './components/AddFriendForm';
import { FriendsList } from './components/FriendsList';
import { Route, link, Switch, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

function App() {

// Fetch friend component

  const [friend, setFriend] = useState([{
      name: ""
  }]);

  useEffect(() => { 
      axios
          .get(`http://localhost:5000/api/friends`)
          .then((res) => {
              setFriend(res.data);
              console.log(res);
          })
          .catch((err) => {
              console.log(err);
          });
  }, []);
  console.log(friend);
  

// Add New friend
  
  const [newFriend, setNewFriend] = useState([{
    name: "",
  }]);

  const addNewFriend = (newData) => {
    const newFriendData = {
      name: newData.name
    };
    setNewFriend([ ...newFriend, newFriendData ]);
  }


  return (
    <Router>
      <h1> Friends App</h1>
      <Link to = "/"> Home </Link>
      <Link to = "/friendslist"> Friends List </Link>
      <Link to = "/addfriend"> Add Friend </Link>
      <div className="App">
        <Switch>
          <PrivateRoute path="/friendslist" component={FriendsList} frndCompProps={friend} />
        
          <Route path = "/addfriend">
            <AddFriendForm addFrndAttr = {addNewFriend} />
          </Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
