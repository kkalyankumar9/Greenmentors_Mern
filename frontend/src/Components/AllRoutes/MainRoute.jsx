import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from '../Navbar'
import Signup from '../Signup'
import Signin from '../Signin'
import TaskBar from '../Task_Operations.jsx/Taskbar'

const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/taskbar" element={<TaskBar/>}/>
    </Routes>
  )
}

export default MainRoute