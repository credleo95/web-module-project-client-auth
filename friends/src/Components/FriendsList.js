import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Friend from './Friend'; 


const FriendsList = () => {
    
const standardFriends = [];    

const [friends, setFriends] = useState(standardFriends)

useEffect(() => {
    axiosWithAuth().get('/friends')
    .then(res => {
        setFriends(res.data)
    })
    .catch(err => {
        console.log(err)
    })
},[])
    
    
    return(
        <div>
            <h1>Friends List Component</h1>
            {friends.map((friend) => (

                <Friend friend= {friend} key={friend.id}/>
    ))}
            
        </div>
    )
}

export default FriendsList