import axios from "axios";
import { ADD_ERROR, ADD_REQUEST, ADD_SUCCESS, DELETE_ERROR, DELETE_REQUEST, DELETE_SUCCESS, GET_ERROR, GET_REQUEST, GET_SUCCESS, UPDATE_ERROR, UPDATE_REQUEST, UPDATE_SUCCESS } from "./actionType";


export const getTaskdata=()=>async(dispatch)=>{
    
    dispatch({type:GET_REQUEST})
    try {
      const response = await axios.get("https://greenmentor-server.onrender.com/crud/get", {
        headers: { "Authorization": ` ${localStorage.getItem("token")}` }
    });
        dispatch({type:GET_SUCCESS,payload:response})
        
         console.log(response);
       
      } catch (error) {
        dispatch({type:GET_ERROR})
        console.error(error);
      }

}

export const createTask = (newTaskData) => async (dispatch) => {
  dispatch({ type: ADD_REQUEST });
  try {
      const response = await axios.post("https://greenmentor-server.onrender.com/crud/create", newTaskData, {
          headers: { "Authorization": ` ${localStorage.getItem("token")}` }
      });
      dispatch({ type: ADD_SUCCESS, payload: response.data });

      // After creating a new task, you might want to fetch the updated list of tasks
      dispatch(getTaskdata());

      console.log(response.data);
  } catch (error) {
      dispatch({ type: ADD_ERROR });
      console.error(error);
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  dispatch({ type: DELETE_REQUEST });
  try {
      await axios.delete(`https://greenmentor-server.onrender.com/crud/delete/${taskId}`, {
          headers: { "Authorization": ` ${localStorage.getItem("token")}` }
      });

    
      dispatch({ type: DELETE_SUCCESS, payload: taskId });
  } catch (error) {
      dispatch({ type: DELETE_ERROR });
      console.error(error);
  }
};

export const updateTask = (taskId, updatedTaskData) => async (dispatch) => {
  dispatch({ type: UPDATE_REQUEST });
  try {
      const response = await axios.put(`https://greenmentor-server.onrender.com/crud/update/${taskId}`, updatedTaskData, {
          headers: { "Authorization": ` ${localStorage.getItem("token")}` }
      });

      // After updating a task, you might want to fetch the updated list of tasks
      dispatch(getTaskdata());

      dispatch({ type: UPDATE_SUCCESS, payload: response.data });
  } catch (error) {
      dispatch({ type: UPDATE_ERROR });
      console.error(error);
  }
};