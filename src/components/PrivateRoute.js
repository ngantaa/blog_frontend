import React, { useState, useEffect, useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import axios from 'axios';

const PrivateRoute = () => {
  const [loggedIn, setLoggedIn] = useState();

  async function getLoginStatus () {
    await axios.get("https://polar-bayou-46017.herokuapp.com/api/users",
    {headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")}}
    ).then(response => setLoggedIn(true)).catch(error => setLoggedIn(false));
  }
  
  getLoginStatus();

  if (loggedIn == undefined) {
    return <p>loading ...</p>
  }
    return loggedIn ? <Outlet/> : <Navigate to="/login"/>;
}
  
export default PrivateRoute
