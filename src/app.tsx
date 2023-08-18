import { FC } from 'react';
import Login from './pages/Login/Login';
import './styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employees from './pages/Employees/Employee';
import EmployeeDetails from './pages/EmployeeDetails/EmployeeDetails';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import EditEmployee from './pages/EditEmployee/EditEmployee';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employee' element={<Employees />} />
          <Route path='/employee/:id' element={<EmployeeDetails />} />
          <Route path='/employee/create' element={<CreateEmployee />} />
          <Route path='/employee/edit/:id' element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
