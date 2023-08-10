import { FC } from 'react';
import Login from './pages/Login';
import './styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employees from './pages/Employee';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
