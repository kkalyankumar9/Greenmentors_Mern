import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getTaskdata } from '../../Redux/Task/action';
const TaskBar = () => {
    const taskData=useSelector((store)=>store.TaskReducer.taskData)
  const isLoading = useSelector((store) => store.TaskReducer.isLoading);
  const isError = useSelector((store) => store.TaskReducer.isError);
  console.log(taskData)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTaskdata())
    console.log(taskData)
  },[])
  return (
    <div>



    </div>
  )
}

export default TaskBar