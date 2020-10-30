import React from 'react';

export const FriendsList = (props) => {

    console.log("Friends List Component", props);

    return (
        <div>
            <h2> List of Freinds </h2>
            {props.frndCompProps.map((item) => {
                return (
                        <p key ={item.id}>{item.name}</p>                    
                )
            })}          
        </div>
    )
}
