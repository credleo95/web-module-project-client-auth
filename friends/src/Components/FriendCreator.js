import React, {useState} from 'react'; 
import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios';


const FriendCreator = () => { 

    const newFriendStandard= [ { 
        id: Date.now(),
       name: '',
       age: '',
       email: ''
     }
     ]
     
     const [newFriend, setNewFriend] = useState(newFriendStandard)
     const {name, age, email} = newFriend
     const handleChanges = (e) => {
         setNewFriend({...newFriend,[e.target.name]:e.target.value})
     }

     const friendSubmit = () => {
         axiosWithAuth().post('/friends', newFriend)
         .then(res => {
             console.log(res)
         })
         .catch(err => {
             console.log(err)
         })
     }

     return(
         <div>
             <form onSubmit={friendSubmit}>
             <input 
                type="text"
                name="name"
                placeholder='please enter name'
                value={name}
                onChange={handleChanges}
                 />
                 &nbsp;
                 &nbsp;
                <input 
                type="number"
                name="age" 
                placeholder='please enter your age'
                value={age}
                onChange={handleChanges}
                />
                &nbsp;
                &nbsp;
                <input 
                type="email"
                name="email" 
                placeholder='please enter your email'
                value={email}
                onChange={handleChanges}
                />
                &nbsp;
                &nbsp;

                 <button>Add Friend!</button>
             </form>
         </div>
     )

}

export default FriendCreator 