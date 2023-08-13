import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Table from '../../components/Table/Table';
import './styles.css';
import employeeList from '../../employeeList';
import SubheaderBtn from '../../components/SubheaderBtn/SubheaderBtn';
import { useNavigate } from 'react-router-dom';

const Employees = () => {
  const navigate = useNavigate();
  const handleCreateClick = () => {
    navigate('/employee/create');
  };

  return (
    <div className='employee-page'>
      <Header />
      <Sidebar text='Employee List' />
      <div className='dashboard'>
        <SubHeader title='Employee List'>
          <SubheaderBtn onClick={handleCreateClick} type='create' />
        </SubHeader>
        <Table employees={employeeList} />
      </div>
    </div>
  );
};

export default Employees;
