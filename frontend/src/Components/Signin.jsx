import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../Redux/Auth/action";
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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          name={"email"}
          placeholder="email"
          value={signData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name={"password"}
          value={signData.password}
          onChange={handleChange}
        />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
