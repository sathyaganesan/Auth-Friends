import React, { useState } from 'react';
import { axiosWithAuth } from '../util/axiosWithAuth';

export const AddFriendForm = () => {

    const [newFriend, setNewFriend] = useState([
        {
            name: "",
            age: "",
            email: ""
        }
    ]);

    const addNewFriend = (newData) => {
        const newFriendData = {
            name: newData.name,
            age: newData.age,
            email: newData.email
        };
        setNewFriend([newFriendData ]);
      }

    const changeHandler = (e) => {
        console.log(e.target.value);
        e.persist();
        setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        addNewFriend(newFriend);
        setNewFriend({
            name: "",
            age: "",
            email: ""
        });
        axiosWithAuth()
            .post(`/friends`, {name: newFriend.name, age: newFriend.age, email: newFriend.email})
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }
 
    return (
        <div className = "addlist-div">
            <h2>Add Friend Form</h2>
            <form onSubmit={submitHandler} className = "add-form">
                <div>
                <label className = "add-element"> Friend Name:
                    <input
                        type="text"
                        name="name"
                        value={newFriend.name}
                        onChange = {changeHandler}
                    />
                </label>
                </div>
                <div>
                <label className = "add-element"> Friend Age:
                    <input
                        type="text"
                        name="age"
                        value={newFriend.age}
                        onChange = {changeHandler}
                    />
                </label>
                </div>
                <div>
                <label className = "add-element"> Friend Email:
                    <input
                        type="text"
                        name="email"
                        value={newFriend.email}
                        onChange = {changeHandler}
                    />
                </label>
                </div>

                <button type="submit" className = "list-button">
                    Add
                </button>
            </form>
        </div>
    )
};
