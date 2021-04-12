import React from 'react'; 
import {axiosWithAuth} from '../Utils/axiosWithAuth'; 


class Login extends React.Component {

state={
    credentials: {
        username: '',
        password: ''
    }
};

login = event => {
event.preventDefault();
axiosWithAuth().post("/login", this.state.credentials)
.then(response => {
localStorage.getItem('token', response.data.payload); 
})
.catch(error => {
console.log('something went wrong: ', error )
})
}
handleChange = event => {
    this.setState({credentials:{
        ...this.state.credentials,[event.target.name]:event.target.value
    }});
}

render(){
    return(
        <div>
            <form onSubmit={this.login}>
            <input
            type="text"
            name="username"
            value= {this.username}
            onChange={this.handleChange}
            />

            <input 
            type="password"
            name="password"
            value={this.password}
            onChange={this.handleChange}
            />

            <button>Log in!</button>
            </form> 
        </div>
    )
}
    
}

export default Login 