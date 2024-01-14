import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../Redux/Auth/action';
const Navbar = () => {
  const dispatch=useDispatch()
  const handleClick=()=>{
    dispatch(logoutUser())
  }
  return (
    <>
    
    <Link to="/signup">Signup</Link>
    <Link to="/signin">Signin</Link>
    <button onClick={handleClick}>Logout</button>

    </>
  )
}

export default Navbar