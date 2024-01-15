import { DELETE_ERROR, DELETE_REQUEST, DELETE_SUCCESS, GET_ERROR, GET_REQUEST, GET_SUCCESS } from "./actionType"

const initialState={
  taskData:[],
  isLoading:false,
  isError:false,

  
}

export  const  taskReducer=(state=initialState,action)=>{
switch(action.type){
  case GET_REQUEST:return{...state,  isLoading:true,
    isError:false}
  case GET_ERROR:return{...state,  isLoading:false,isError:true}
  case GET_SUCCESS:return{...state,taskData:action.payload,isLoading:false,isError:false}
  case DELETE_REQUEST:
    return { ...state, isLoading: true, isError: false };
  case DELETE_ERROR:
    return { ...state, isLoading: false, isError: true };
  case DELETE_SUCCESS:
    // Update taskData after deleting a task
    const updatedTaskData = state.taskData.filter(task => task._id !== action.payload);
    return { ...state, taskData: [...updatedTaskData], isLoading: false, isError: false };
  
  default:return state

}
}