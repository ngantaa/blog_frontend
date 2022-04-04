import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';


function LoginForm(props) {
    const url = "https://polar-bayou-46017.herokuapp.com/api/authenticate";
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    function login(event) {
        event.preventDefault();
        axios.post(url, {
            username: data.username,
            password: data.password
        }
           )
           .then(
               response => {
                   localStorage.setItem("token", response.data);
                   console.log(response.data);
                   window.location.replace("https://cryptic-everglades-41257.herokuapp.com/");
                }
           )
           .catch(error =>{
               console.log(error.response);
   
           });
    }
    function handleChange(event) {
        const newData = {...data};
        newData[event.target.id] = event.target.value;
        setData(newData);
    }
    return (
            <form onSubmit={(event) => login(event)}>
                <div>
                    username : <input className="m-1" id="username" onChange={(event) => handleChange(event)} value={data.username} placeholder='username' type='text'></input>
                </div>
                <div>
                    password : <input className="m-1" id="password" onChange={(event) => handleChange(event)} value={data.password} placeholder='password' type='password'></input>
                </div>
                <button>Submit</button>
            </form>
    )
}

export default LoginForm;