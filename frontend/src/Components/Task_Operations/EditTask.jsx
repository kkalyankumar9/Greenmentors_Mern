import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskdata, updateTask } from '../../Redux/Task/action';

const EditTask = () => {
  const dispatch = useDispatch();
  const { taskId } = useParams();
  console.log("Task ID from useParams:", taskId);
  const taskData = useSelector((store) => store.TaskReducer.taskData);
  console.log()

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

// ... (existing code)

useEffect(() => {
  const existingTask = taskData.data?.find((task) => task._id === taskId);

  if (existingTask) {
    setTitle(existingTask.title);
    setDescription(existingTask.description);
    console.log(existingTask.title);  // Corrected line
    console.log(existingTask.description);  // Corrected line
  }
}, [taskId, taskData]);


// ... (existing code)


  
  

  const handleUpdate = () => {
    const updatedTaskData = { title, description };
    dispatch(updateTask(taskId, updatedTaskData))
      .then(() => {
        // Redirect or handle successful update as needed
        alert('Data updated');
        dispatch(getTaskdata())
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
