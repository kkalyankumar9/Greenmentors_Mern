import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../Redux/Auth/action";
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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="name"
          name="name"
          placeholder="name"
          value={signData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={signData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={signData.password}
          onChange={handleChange}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
