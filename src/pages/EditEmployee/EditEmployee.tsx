import FormInput from '../../components/FormInput/FormInput';
import SubHeader from '../../components/SubHeader/SubHeader';
import { FC, useEffect, useState } from 'react';
import FormDropdown, { DropdownOptionsType } from '../../components/FormDropdown/FormDropdown';
import Button from '../../components/Button/Button';
import './styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetAllDeparmentsQuery } from '../../service/departmentApi';
import { useGetAllRolesQuery } from '../../service/roleApi';
import { useGetEmployeeByIdQuery } from '../EmployeeDetails/api';
import { useEditEmployeeMutation } from './api';
import EmployeeLayout from '../../layouts/EmployeeLayout/EmployeeLayout';

const statuses: DropdownOptionsType[] = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Probation', value: 'probation' }
];

const EditEmployee: FC = () => {
  const { id } = useParams();
  const { data, isSuccess, isError } = useGetEmployeeByIdQuery({ id: +id });
  const employee = data?.data || null;
  const { data: deptData } = useGetAllDeparmentsQuery();
  const departments: DropdownOptionsType[] =
    deptData?.data.map((dept) => ({ label: dept.name, value: dept.id })) || [];
  const { data: roleData } = useGetAllRolesQuery();
  const roles: DropdownOptionsType[] =
    roleData?.data.map((role) => ({ label: role, value: role })) || [];
  const [editEmployee, { isSuccess: editSuccess }] = useEditEmployeeMutation();

  const [name, setName] = useState('');
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

  const handleSave = () => {
    if (isNaN(+experience)) {
      alert('Experience should be a number');

      return;
    }
    const updatedEmployee = {
      id: Number(id),
      name,
      joiningDate,
      experience: +experience,
      departmentId: +departmentId,
      role,
      status: status.toLowerCase(),
      address: {
        address_line_1: addressLine1,
        address_line_2: addressLine2,
        city,
        state,
        country,
        pincode
      }
    };

    editEmployee(updatedEmployee);
  };

  useEffect(() => {
    if (isError) {
      alert('Employee Not Found');
      navigate('/employee');
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      setName(employee.name);
      setJoiningDate(employee.joiningDate);
      setExperience(employee.experience.toString());
      setDepartmentId(employee.departmentId);
      setRole(employee.role);
      setStatus(employee.status);
      setAddressLine1(employee.address.address_line_1);
      setAddressLine2(employee.address.address_line_2);
      setCity(employee.address.city);
      setState(employee.address.state);
      setCountry(employee.address.country);
      setPincode(employee.address.pincode);
      console.log(employee.status);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (editSuccess) navigate('/employee');
  }, [editSuccess]);

  return (
    <EmployeeLayout>
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
          <Button type='filled' text='Save' onClick={handleSave} />
          <Button
            type='empty'
            text='Cancel'
            onClick={() => {
              navigate(`/employee/${id}`);
            }}
          />
        </div>
      </div>
    </EmployeeLayout>
  );
};

export default EditEmployee;
