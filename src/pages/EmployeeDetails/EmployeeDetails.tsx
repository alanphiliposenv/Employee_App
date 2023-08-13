import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import SubHeader from '../../components/SubHeader/SubHeader';
import { FC } from 'react';
import './styles.css';
import SubheaderBtn from '../../components/SubheaderBtn/SubheaderBtn';
import InfoText from '../../components/InfoText/InfoText';
import { useNavigate, useParams } from 'react-router-dom';
import employeeList from '../../employeeList';

const EmployeeDetails: FC = () => {
  const { id } = useParams();
  const employee = employeeList.find((emp) => emp.id === +id);
  const navigate = useNavigate();

  return (
    <div className='employee-page'>
      <Header />
      <Sidebar text='Employee list' />
      <div className='dashboard'>
        <SubHeader title='Employee Details'>
          <SubheaderBtn
            type='edit'
            onClick={() => {
              navigate(`/employee/edit/${id}`);
            }}
          />
        </SubHeader>
        {employee ? (
          <div className='employee-details'>
            <InfoText label='Employee Name' value={employee.name} type='text' />
            <InfoText label='Joining Date' value={employee.joiningDate} type='text' />
            <InfoText
              label='Experience'
              value={`${employee.experience} ${employee.experience === 1 ? 'year' : 'years'}`}
              type='text'
            />
            <InfoText label='Role' value={employee.role} type='text' />
            <InfoText label='Status' value={employee.status} type='status' />
            <InfoText label='Address' value={employee.address} type='address' />
            <InfoText label='Employee ID' value={employee.id} type='text' />
          </div>
        ) : (
          <div className='employee-details'>Employee Not Found</div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDetails;
