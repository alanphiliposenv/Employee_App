import SubHeader from '../../components/SubHeader/SubHeader';
import { FC, useEffect } from 'react';
import './styles.css';
import SubheaderBtn from '../../components/SubheaderBtn/SubheaderBtn';
import InfoText from '../../components/InfoText/InfoText';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetEmployeeByIdQuery } from './api';
import EmployeeLayout from '../../layouts/EmployeeLayout/EmployeeLayout';

const EmployeeDetails: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isError } = useGetEmployeeByIdQuery({ id: +id });
  const employee = data?.data || null;

  const role = localStorage.getItem('role');

  useEffect(() => {
    if (isError) {
      alert('Employee Not found');
      navigate('/employee');
    }
  }, [isError]);

  return (
    <EmployeeLayout>
      <SubHeader title='Employee Details'>
        {role === 'admin' && (
          <SubheaderBtn
            type='edit'
            onClick={() => {
              navigate(`/employee/edit/${id}`);
            }}
          />
        )}
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
    </EmployeeLayout>
  );
};

export default EmployeeDetails;
