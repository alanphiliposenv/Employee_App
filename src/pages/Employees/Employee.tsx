import SubHeader from '../../components/SubHeader/SubHeader';
import EmployeeList from '../../components/EmployeeList/EmployeeList';
import './styles.css';
import SubheaderBtn from '../../components/SubheaderBtn/SubheaderBtn';
import { useNavigate } from 'react-router-dom';
import EmployeeLayout from '../../layouts/EmployeeLayout/EmployeeLayout';

const Employees = () => {
  const navigate = useNavigate();
  const handleCreateClick = () => {
    navigate('/employee/create');
  };

  const role = localStorage.getItem('role');

  return (
    <EmployeeLayout>
      <SubHeader title='Employee List'>
        { role === 'admin' && <SubheaderBtn onClick={handleCreateClick} type='create' />}
      </SubHeader>
      <EmployeeList />
    </EmployeeLayout>
  );
};

export default Employees;
