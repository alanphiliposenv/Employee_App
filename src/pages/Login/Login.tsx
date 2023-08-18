import { useState, type FC, useEffect } from 'react';
import LoginInput from '../../components/LoginInput/LoginInput';
import Button from '../../components/Button/Button';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from './api';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setShowError] = useState('');
  const [login, { data, isSuccess, isError }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username && password) login({ username, password });
    else setShowError('Error: Enter username and password');
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('role', data.data.employeeDetails.role);
      navigate('/employee');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) setShowError('Error: Invalid username or password');
  }, [isError]);

  return (
    <div className='login-page'>
      <section id='image-section'>
        <div className='img-wrapper'>
          <img src='/assets/img/banner.png' alt='Login Banner' />
        </div>
      </section>
      <section id='form-section'>
        <div className='form-wrapper'>
          <img id='logo' src='/assets/img/kv-logo.png' alt='Logo' />
          <LoginInput type='text' label='Username' onChange={setUsername} value={username} />
          <LoginInput type='password' label='Password' onChange={setPassword} value={password} />
          <Button type='filled' text='Login' onClick={handleSubmit} />
          {errorMsg && <div className='error-message'>{errorMsg}</div>}
        </div>
      </section>
    </div>
  );
};

export default Login;
