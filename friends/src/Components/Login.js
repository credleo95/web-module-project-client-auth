import React from 'react'; 




class Login extends React.Component {

state={
    credentials: {
        username: '',
        password: ''
    }
};

login = event => {
event.preventDefault();

}
handleChange = event => {
    this.setState({credentials:{
        ...this.state.credentials,[event.target.name]:event.target.value
    }});
}

render(){
    return(
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

    )
}
    
}

export default Login 