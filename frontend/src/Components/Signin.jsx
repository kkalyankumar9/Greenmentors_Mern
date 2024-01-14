import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../Redux/Auth/action";
import Navbar from "./Navbar";
const Signin = () => {
  const initialdata = {
    email: "",
    password: "",
  };
  const [signData, setSignData] = useState(initialdata);

  // const userData=useSelector((store)=>store.AuthReducer.userData)
  // const isLoading = useSelector((store) => store.AuthReducer.isLoading);
  // const isError = useSelector((store) => store.AuthReducer.isError);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setSignData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: signData.name,
      email: signData.email,
      password: signData.password,
    };
    dispatch(signIn(user))
      .then((response) => {
        // Handle success
        console.log("Signin successful:", response);
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
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
  </>

  );
};

export default Signin;
