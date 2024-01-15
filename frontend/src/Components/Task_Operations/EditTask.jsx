import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../../Redux/Task/action';

const EditTask = () => {
  const dispatch = useDispatch();
  const { taskId } = useParams();
  const taskData = useSelector((store) => store.TaskReducer.taskData);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // useEffect(() => {
  //   // Find the task with the specified taskId in the taskData
  //   const existingTask = taskData.data?.find((task) => task._id === taskId);

  //   // Initialize the input fields with the existing task data
  //   if (existingTask) {
  //     setTitle(existingTask.title);
  //     setDescription(existingTask.description);
  //   }
  // }, [taskId, taskData]);
  useEffect(() => {
    console.log("Task ID:", taskId);
    console.log("Task Data:", taskData);
  
    const existingTask = taskData.data?.find((task) => task._id === taskId);
    console.log("Existing Task:", existingTask);
  
    if (existingTask) {
      setTitle(existingTask.title);
      setDescription(existingTask.description);
    }
  }, [taskId, taskData]);
  
  

  const handleUpdate = () => {
    const updatedTaskData = { title, description };
    dispatch(updateTask(taskId, updatedTaskData))
      .then(() => {
        // Redirect or handle successful update as needed
        alert('Data updated');
      })
      .catch((error) => {
        console.error(error);
        // Handle error during update
        alert('Error updating data');
      });
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleUpdate}>
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTask;
