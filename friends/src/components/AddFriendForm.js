import React, { useState } from 'react';
import axios from 'axios';

export const AddFriendForm = (props) => {
    console.log(props);

    const [addFrndForm, setAddFrndForm] = useState([{
        name: ""
    }]);

    const changeHandler = (e) => {
        console.log(e.target.value);
        e.persist();
        setAddFrndForm({ ...addFrndForm, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        props.addFrndAttr(addFrndForm);
        setAddFrndForm({
            name: ""
        });
        axios
            .post(`http://localhost:5000/api/friends`, {name: addFrndForm.name})
            .then((res) => {
                console.log(res);
                localStorage.getItem('token', res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }
 
    return (
        <div>
            <h2>Add Friend Form</h2>
            <form onSubmit = {submitHandler}>
                <label> Friend Name:
                    <input
                        type="text"
                        name="name"
                        value={addFrndForm.name}
                        onChange = {changeHandler}
                    />
                </label>
                <button type="submit">
                    Add New Friend
                </button>
            </form>
        </div>
    )
};
