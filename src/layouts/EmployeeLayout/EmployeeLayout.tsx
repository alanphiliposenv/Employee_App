import { FC } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const EmployeeLayout: FC = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className='employee-page'>
      <Header />
      <Sidebar
        text='Employee List'
        onClick={() => {
          navigate('/employee');
        }}
      />
      <div className='dashboard'>{children}</div>
    </div>
  );
};

export default EmployeeLayout;
