import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../util/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';

export const FriendsList = () => {

    // Fetch friend component

    const [friendList, setFriendList] = useState([
        {
            name: "",
            age: "",
            email: ""
        }
    ]);

    const params = useParams();
    console.log("Params of Friend List", params);
    const history = useHistory();


    useEffect(() => { 
    axiosWithAuth()
        .get(`/friends`)
        .then((res) => {
            // console.log(res);
            setFriendList(res.data);
            console.log("Friends List Response", res);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);
    console.log("FRIENDS LIST",friendList);
    
    // Remove friend

    const removeFriend = (e) => {
        setFriendList(friendList.filter((item) => item.id !== e.id));
    }

    return (
        <div className ="list-div">
            <h2> List of Freinds </h2>
            {friendList.map((item) => {
                return (
                    <div key={item.id} className = "friend-list">
                        <p >Friend Name:  {item.name}</p>
                        <p >Friend Age:  {item.age}</p>
                        <p >Friend Email:  {item.email}</p>
                        <div>
                            <button className = "list-button" onClick = {() => history.push('/editingpage')}>Edit</button>
                            <button className="list-button" onClick={() => removeFriend(item)}>Remove</button>
                        </div>
                    </div>
                )
            })}          
        </div>
    )
}
