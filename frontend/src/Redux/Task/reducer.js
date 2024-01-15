import { ADD_ERROR, ADD_REQUEST, ADD_SUCCESS, DELETE_ERROR, DELETE_REQUEST, DELETE_SUCCESS, GET_ERROR, GET_REQUEST, GET_SUCCESS, UPDATE_ERROR, UPDATE_REQUEST, UPDATE_SUCCESS } from "./actionType";

const initialState = {
    taskData: [],
    isLoading: false,
    isError: false,
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      // Get actions
      case GET_REQUEST:
        return { ...state, isLoading: true, isError: false };
      case GET_SUCCESS:
        return { ...state, taskData: payload, isLoading: false, isError: false };
      case GET_ERROR:
        return { ...state, isLoading: false, isError: true };
  
      // Add actions
      case ADD_REQUEST:
        return { ...state, isLoading: true, isError: false };
      case ADD_SUCCESS:
        return { ...state, taskData: [...state.taskData, payload], isLoading: false, isError: false };
      case ADD_ERROR:
        return { ...state, isLoading: false, isError: true };
  
      // Delete actions
      case DELETE_REQUEST:
        return { ...state, isLoading: true, isError: false };
      case DELETE_SUCCESS:
        return {
          ...state,
          taskData: state.taskData.filter(task => task.id !== payload),
          isLoading: false,
          isError: false,
        };
      case DELETE_ERROR:
        return { ...state, isLoading: false, isError: true };
  
      // Update actions
      case UPDATE_REQUEST:
        return { ...state, isLoading: true, isError: false };
      case UPDATE_SUCCESS:
        // Implement logic to update taskData based on payload
        return { ...state, isLoading: false, isError: false };
      case UPDATE_ERROR:
        return { ...state, isLoading: false, isError: true };
  
      default:
        return state;
    }
  };
  