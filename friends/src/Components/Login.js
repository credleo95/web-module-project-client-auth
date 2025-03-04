import React, {useState} from 'react';
import {useHistory} from 'react-router';
import axios from 'axios'; 
import FriendsList from './FriendsList'; 


const Login = () => {
const history = useHistory()

const formCredentials = {
    username: '',
    password:''
}

const [credentials, setCredentials] = useState(formCredentials) 
const {username, password} = credentials

const handleChanges = (e) => {
setCredentials({...credentials,[e.target.name]:e.target.value})
}

const credentialsSubmit = (e) => {
   e.preventDefault();
   axios.post('http://localhost:5000/api/login', credentials) // username: Lambda School password: i<3Lambd4
   .then(res => {
       localStorage.setItem('token',res.data.payload)
       history.push('/friendslist')
   })
   .catch(err => {
       console.log(err)
   })
}
    return(
        <div>
            <form onSubmit={credentialsSubmit}>
                <input 
                type="text"
                name="username"
                placeholder='username'
                value={username}
                onChange={handleChanges}
                 />
                 &nbsp;
                 &nbsp;
                <input 
                type="password"
                name="password" 
                placeholder='password'
                value={password}
                onChange={handleChanges}
                />
                <button>Sign in</button>

            </form>

        </div>
    )
}

export default Login 