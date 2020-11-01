import React, { useState } from 'react';
import axios from 'axios';

export const FriendLogin = (props) => {

    const [friendLogin, setFriendLogin] = useState([
        {
            username: "",
            password: ""
        }
    ]);

    const changeHandler = (e) => {
        e.persist();
        setFriendLogin({ ...friendLogin, [e.target.name]: e.target.value });
    };

    const submitChange = (e) => {
        e.preventDefault();
        // const welcomeFriend = {
        //     username: e.username,
        //     password: e.password
        // };
        // setFriendLogin({ ...friendLogin, welcomeFriend });

        axios
            .post(`http://localhost:5000/api/login`, {username: friendLogin.username, password: friendLogin.password})
            .then((res) => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/') //need clarification
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <h2> Friend Login Page </h2>
            <form onSubmit = {submitChange}>
                <label>User Name:
                    <input
                        type="text"
                        name="username"
                        value = {friendLogin.name}
                        onChange = {changeHandler}
                    />
                </label>
                <label>Password:
                    <input
                        type="password"
                        name="password"
                        value={friendLogin.password}
                        onChange = {changeHandler}
                    />
                </label>
                <button type= "submit">
                    Login
                </button>
            </form>
        </div>
        
    )
}