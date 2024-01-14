import { LOGOUT_REQUEST, LOGOUT_SUCCESS, SIGNIN_ERROR, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType"

const initialstate = {
  isLoading: false,
  isError: false,
  isAuth: false,
  email: "",
  password: "",
  token: localStorage.getItem("token") || ""
};

export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST:
    case SIGNIN_REQUEST:
    case LOGOUT_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case SIGNUP_ERROR:
    case SIGNIN_ERROR:
      return { ...state, isError: true, isLoading: false };

    case SIGNUP_SUCCESS:
      return { ...state, isError: false, isLoading: false /*, include additional data if needed*/ };

    case SIGNIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isError: false,
        isLoading: false,
        token: payload.token,
        isAuth: true,
        // Only store necessary user details in the state, not email and password
      };
      case LOGOUT_SUCCESS:
        localStorage.removeItem("token");
        return {
          ...state,
          token: "",
          isAuth: false,
          username: "",
          email: "",
          isError: false,
        };

    default:
      return state;
  }
};
