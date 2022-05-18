import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login/Login';
import Home from './Components/Pages/Home/Home';
import RequireAuth from './Components/Shared/RequiredAuth/RequiredAuth';
import Tasks from './Components/Pages/Tasks/Tasks';
import AddTask from './Components/Pages/Add Task/AddTask';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/tasks' element={<RequireAuth>
          <Tasks></Tasks>
        </RequireAuth>}></Route>
        <Route path='/addTask' element={<RequireAuth>
          <AddTask></AddTask>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
