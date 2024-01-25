import "./App.css";
import MainRoute from "./Components/AllRoutes/MainRoute";
import ForgotResetPasswordPage from "./Components/ForgotPassword";
import Addtask from "./Components/Task_Operations/AddTask";
import TaskBar from "./Components/Task_Operations/Taskbar";

function App() {
  return (
    <div className="App">
      <MainRoute />
      <ForgotResetPasswordPage/>
 
        
    </div>
  );
}

export default App;
