import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from '../Navbar'
import Signup from '../Signup'
import Signin from '../Signin'

import Addtask from '../Task_Operations/AddTask'
import TaskBar from '../Task_Operations/Taskbar'
import EditTask from '../Task_Operations/EditTask'
import PrivateRoute from './PrivateRoute'


const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/taskbar" element={<PrivateRoute><TaskBar/></PrivateRoute>}/>
        <Route path="/addtask" element={<PrivateRoute><Addtask/></PrivateRoute>}/>
        <Route path="/taskedit/:taskId" element={<PrivateRoute><EditTask/></PrivateRoute>}/>
    </Routes>
  )
}

export default MainRoute