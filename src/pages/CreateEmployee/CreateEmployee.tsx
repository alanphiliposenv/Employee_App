import FormInput from '../../components/FormInput/FormInput';
import SubHeader from '../../components/SubHeader/SubHeader';
import { FC, useEffect, useState } from 'react';
import FormDropdown, { DropdownOptionsType } from '../../components/FormDropdown/FormDropdown';
import Button from '../../components/Button/Button';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useGetAllDeparmentsQuery } from '../../service/departmentApi';
import { useGetAllRolesQuery } from '../../service/roleApi';
import { Employee } from '../../types/employee.type';
import { useCreateEmployeeMutation } from './api';
import EmployeeLayout from '../../layouts/EmployeeLayout/EmployeeLayout';

const statuses: DropdownOptionsType[] = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Probation', value: 'probation' }
];

const CreateEmployee: FC = () => {
  const { data: deptData } = useGetAllDeparmentsQuery();
  const departments: DropdownOptionsType[] =
    deptData?.data.map((dept) => ({ label: dept.name, value: dept.id })) || [];
  const { data: roleData } = useGetAllRolesQuery();
  const roles: DropdownOptionsType[] =
    roleData?.data.map((role) => ({ label: role, value: role })) || [];
  const [createEmployee, { isSuccess }] = useCreateEmployeeMutation();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [experience, setExperience] = useState('');
  const [departmentId, setDepartmentId] = useState(-1);
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!name) return alert('Invalid name');
    if (!username) return alert('Invalid username');
    if (!password) return alert('Invalid password');
    if (!/^\d\d\/\d\d\/\d\d\d\d$/.test(joiningDate)) return alert('Invalid joiningDate');
    if (isNaN(+experience)) return alert('Invalid experience');
    if (departmentId < 0) return alert('Invaild deparment');
    if (!role) return alert('Invalid role');
    if (!status) return alert('Invalid status');
    if (!addressLine1 || !city || !state || !country || !pincode) return alert('Invalid address');

    const employee: Employee = {
      name: name,
      joiningDate: joiningDate,
      username: username,
      password: password,
      role: role,
      status: status,
      experience: +experience,
      departmentId: +departmentId,
      address: {
        address_line_1: addressLine1,
        address_line_2: addressLine2,
        city: city,
        state: state,
        country: country,
        pincode: pincode
      }
    };

    createEmployee(employee);
  };

  useEffect(() => {
    if (isSuccess) navigate('/employee');
  }, [isSuccess]);

  return (
    <EmployeeLayout>
      <SubHeader title='Create Employee' />
      <div className='create-employee-form'>
        <FormInput
          type='text'
          label='Employee Name'
          placeholder='Employee Name'
          value={name}
          onChange={setName}
        />
        <FormInput
          type='text'
          label='Employee Username'
          placeholder='Employee Username'
          value={username}
          onChange={setUsername}
        />
        <FormInput
          type='text'
          label='Password'
          placeholder='Password'
          value={password}
          onChange={setPassword}
        />
        <FormInput
          type='text'
          label='Joining Date'
          placeholder='DD/MM/YYYY'
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
          value={departmentId}
          onChange={setDepartmentId}
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
        <div></div>
        <div className='create-employee-address-inputs'>
          <FormInput
            label='Address'
            type='text'
            placeholder='Address Line 1'
            value={addressLine1}
            onChange={setAddressLine1}
          />
          <FormInput
            type='text'
            placeholder='Address Line 2 (optional)'
            value={addressLine2}
            onChange={setAddressLine2}
          />
          <FormInput type='text' placeholder='City' value={city} onChange={setCity} />
          <FormInput type='text' placeholder='State' value={state} onChange={setState} />
          <FormInput type='text' placeholder='Country' value={country} onChange={setCountry} />
          <FormInput type='text' placeholder='Pincode' value={pincode} onChange={setPincode} />
        </div>
        <div></div>
        <div className='create-employee-form-buttons'>
          <Button type='filled' text='Create' onClick={handleSubmit} />
          <Button
            type='empty'
            text='Cancel'
            onClick={() => {
              navigate('/employee');
            }}
          />
        </div>
      </div>
    </EmployeeLayout>
  );
};

export default CreateEmployee;
