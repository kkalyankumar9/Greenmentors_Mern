import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../Redux/Auth/action";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
const Addtask = () => {
  const initialdata = {
    title: "",
    description: "",
  };
  const [taskAdd, setTaskAdd] = useState(initialdata);

  // const isAuth=useSelector((store)=>store.AuthReducer.isAuth)
  // const isLoading = useSelector((store) => store.AuthReducer.isLoading);
  // const isError = useSelector((store) => store.AuthReducer.isError);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setTaskAdd((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      title: taskAdd.title,
      description: taskAdd.description,
      
    };
    dispatch(signIn(user))
      .then((response) => {
        // Handle success
    
      })
      .catch((error) => {
        // Handle error
        console.error("Signin error:", error);
      });
  };
  return (
    <>
    <Navbar/>
  
    <div className="flex items-center justify-center h-screen">
    <div className="bg-white shadow-md rounded-md p-8 w-96">
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            id="text"
            placeholder="Title"
            name="title"
            value={taskAdd.title}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">
          Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="description"
            name="description"
            value={taskAdd.description}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
         Add
          </button>
        </div>
      </form>
    </div>
  </div>
  </>

  );
};

export default Addtask;
