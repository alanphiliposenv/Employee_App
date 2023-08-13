import FormInput from '../../components/FormInput/FormInput';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import SubHeader from '../../components/SubHeader/SubHeader';
import { FC, useState } from 'react';
import FormDropdown from '../../components/FormDropdown/FormDropdown';
import Button from '../../components/Button/Button';
import './styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import employeeList from '../../employeeList';

const departments = ['Backend Engineering', 'Frontend Engineering', 'UI', 'HR'];
const roles = ['Developer', 'UI Engineer', 'HR'];
const statuses = ['Active', 'Inactive', 'Probation'];

const EditEmployee: FC = () => {
  const { id } = useParams();
  const employee = employeeList.find((emp) => emp.id === +id);

  if (!employee) return <div>Employee Not Found</div>;

  const [name, setName] = useState(employee.name);
  const [joiningDate, setJoiningDate] = useState(employee.joiningDate);
  const [experience, setExperience] = useState(`${employee.experience}`);
  const [department, setDepartment] = useState(departments[0]);
  const [role, setRole] = useState(employee.role);
  const [status, setStatus] = useState(employee.status);
  const [addressLine1, setAddressLine1] = useState(employee.address.address_line_1);
  const [addressLine2, setAddressLine2] = useState(employee.address.address_line_2);
  const [city, setCity] = useState(employee.address.city);
  const [state, setState] = useState(employee.address.state);
  const [country, setCountry] = useState(employee.address.country);
  const [pincode, setPincode] = useState(employee.address.pincode);
  const navigate = useNavigate();

  return (
    <div className='employee-page'>
      <Header />
      <Sidebar text='Employee List' />
      <div className='dashboard'>
        <SubHeader title='Edit Employee' />
        <div className='edit-employee-form'>
          <FormInput
            type='text'
            label='Employee Name'
            placeholder='Employee Name'
            value={name}
            onChange={setName}
          />
          <FormInput
            type='text'
            label='Joining Date'
            placeholder='Joining Date'
            value={joiningDate}
            onChange={setJoiningDate}
          />
          <FormInput
            type='text'
            label='Experience'
            placeholder='0'
            value={experience}
            onChange={setExperience}
          />
          <FormDropdown
            label='Department'
            options={departments}
            placeholder='Choose Department'
            value={department}
            onChange={setDepartment}
          />
          <FormDropdown
            label='Role'
            options={roles}
            placeholder='Choose Role'
            value={role}
            onChange={setRole}
          />
          <FormDropdown
            label='Status'
            options={statuses}
            placeholder='Choose Status'
            value={status}
            onChange={setStatus}
          />
          <div className='edit-employee-address-inputs'>
            <FormInput
              label='Address'
              type='text'
              placeholder='Address Line 1'
              value={addressLine1}
              onChange={setAddressLine1}
            />
            <FormInput
              type='text'
              placeholder='Address Line 2'
              value={addressLine2}
              onChange={setAddressLine2}
            />
            <FormInput type='text' placeholder='City' value={city} onChange={setCity} />
            <FormInput type='text' placeholder='State' value={state} onChange={setState} />
            <FormInput type='text' placeholder='Country' value={country} onChange={setCountry} />
            <FormInput type='text' placeholder='Pincode' value={pincode} onChange={setPincode} />
          </div>
          <FormInput
            type='text'
            placeholder='ID'
            value={id}
            onChange={() => {}}
            label='Employee ID'
            disabled
          />
          <div className='edit-employee-form-buttons'>
            <Button type='filled' text='Submit' onClick={() => {}} />
            <Button
              type='empty'
              text='Cancel'
              onClick={() => {
                navigate(`/employee/${id}`);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
