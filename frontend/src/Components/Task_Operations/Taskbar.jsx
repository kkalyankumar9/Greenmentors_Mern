import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, getTaskdata } from '../../Redux/Task/action';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

const TaskBar = () => {
  const taskData = useSelector((store) => store.TaskReducer.taskData);
  const isLoading = useSelector((store) => store.TaskReducer.isLoading);
  const isError = useSelector((store) => store.TaskReducer.isError);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTaskdata());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
      .then(() => {
        alert('Task Deleted');
        dispatch(getTaskdata());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (id) => {
    navigate(`/taskedit/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-4">
        {isLoading && <p className="text-center">Loading...</p>}

        {isError && <p className="text-center text-red-500">Error fetching data</p>}

        {taskData && (
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400 py-2">Title</th>
                <th className="border border-gray-400 py-2">Description</th>
                <th className="border border-gray-400 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {taskData.data?.map((task) => (
                <tr key={task._id}>
                  <td className="border border-gray-400 py-2">{task.title}</td>
                  <td className="border border-gray-400 py-2">{task.description}</td>
                  <td className="border border-gray-400 py-2">
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Delete
                    </button>
                    <Link to={`/taskedit/${task._id}`}>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Edit
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default TaskBar;
