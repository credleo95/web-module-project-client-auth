import React, {useState} from 'react'; 
import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios';


const FriendCreator = () => { 

    const newFriendStandard= [ { 
        id: '',
       name: '',
       age: '',
       email: ''
     }
     ]
     
     const [newFriend, setNewFriend] = useState(newFriendStandard)
     
     

}
