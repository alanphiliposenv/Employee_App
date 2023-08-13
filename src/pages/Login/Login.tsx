import { useState, type FC } from 'react';
import LoginInput from '../../components/LoginInput/LoginInput';
import Button from '../../components/Button/Button';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username && password) navigate('/employee');
    else setShowError(true);
  };

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
          <LoginInput
            type='text'
            placeholder='Username'
            label='Username'
            onChange={setUsername}
            value={username}
          />
          <LoginInput
            type='password'
            placeholder='Password'
            label='Password'
            onChange={setPassword}
            value={password}
          />
          <Button type='filled' text='Login' onClick={handleSubmit} />
          {showError && <div className='error-message'>Error: Enter username and password</div>}
        </div>
      </section>
    </div>
  );
};

export default Login;
