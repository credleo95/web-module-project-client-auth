import React from 'react'


const Friend = (props) => { 
 const name= props.friend.name
 const email= props.friend.email
 const age = props.friend.age
    return(
        <div>
            <p>name: {name} </p>
            <br />
            <p>email:{email} </p>
            <br />
            <p>age: {age} </p>
            <br />
        </div>
    )
}

export default Friend 