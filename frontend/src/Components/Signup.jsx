import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../Redux/Auth/action";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Signup = () => {
  const initialdata = {
    name: "",
    email: "",
    password: "",
  };
  const [signData, setSignData] = useState(initialdata);

  // const userData=useSelector((store)=>store.AuthReducer.userData)
  // const isLoading=useSelector((store)=>store.AuthReducer.isLoading)
  // const isError=useSelector((store)=>store.AuthReducer.isError)
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setSignData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: signData.name,
      email: signData.email,
      password: signData.password,
    };

    try {
      // Dispatch the signUp action and await the response
      const response = await dispatch(signUp(user));
      console.log(user);

      // Handle success
      console.log("Signup successful:", response);
    } catch (error) {
      // Handle error
      console.error("Signup error:", error);
    }
  };
  return (
    <>
      <Navbar/>

      <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-md rounded-md p-8">
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              value={signData.name}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              value={signData.email}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={signData.password}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="flex items-center justify-center">
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Sign Up
  </button>
</div>
        </form>
        <p className="mb-2">Already signed up?</p>
        <Link to="/signin" className="text-blue-500 hover:underline">
          Sign in
        </Link>
      </div>
    </div>
    </>
  );
};

export default Signup;
