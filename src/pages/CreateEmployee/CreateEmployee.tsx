import FormInput from '../../components/FormInput/FormInput';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import SubHeader from '../../components/SubHeader/SubHeader';
import { FC, useState } from 'react';
import FormDropdown from '../../components/FormDropdown/FormDropdown';
import Button from '../../components/Button/Button';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const departments = ['Backend Engineering', 'Frontend Engineering', 'UI', 'HR'];
const roles = ['Developer', 'UI Engineer', 'HR'];
const statuses = ['Active', 'Inactive', 'Probation'];

const CreateEmployee: FC = () => {
  const [name, setName] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [experience, setExperience] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const navigate = useNavigate();

  return (
    <div className='employee-page'>
      <Header />
      <Sidebar text='Employee List' />
      <div className='dashboard'>
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
              placeholder='Address Line 2'
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
            <Button type='filled' text='Submit' onClick={() => {}} />
            <Button
              type='empty'
              text='Cancel'
              onClick={() => {
                navigate('/employee');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
