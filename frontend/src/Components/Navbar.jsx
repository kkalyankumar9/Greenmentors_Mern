import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../Redux/Auth/action';
const Navbar = () => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const dispatch=useDispatch()
  const handleClick=()=>{
    dispatch(logoutUser())
  }
  return (
    <>
    
    <nav className="bg-blue-500 p-4 text-white">
  <div className="flex items-center justify-between">
    <Link to="/" className="text-2xl font-bold">
      <Link to="/" className="flex items-center text-2xl font-bold">
        <img
          src=""
          alt="Profile Avatar"
          className="rounded-full h-10 w-10 mr-2"
        />
        Task Bar
      </Link>
    </Link>
    <div className="flex space-x-4">
  <Link to="/signup" className="text-lg hover:underline bg-yellow-500 text-white px-3 py-1 rounded">
    Sign up
  </Link>
  {isAuth ? (
    <button onClick={handleClick} className="text-lg hover:underline bg-yellow-500 text-white px-3 py-1 rounded">
      Logout
    </button>
  ) : (
    <Link to="/signin" className="text-lg hover:underline bg-yellow-500 text-white px-3 py-1 rounded">
      Sign in
    </Link>
  )}
</div>



  </div>
</nav>

  
    </>
  )
}

export default Navbar