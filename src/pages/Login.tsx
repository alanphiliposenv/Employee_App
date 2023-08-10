import { useState, type FC } from 'react';
import Input from '../components/InputTextField/Input';
import Button from '../components/Button/Button';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username && password) navigate('/employees');
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

          <Input
            type='text'
            placeholder='Username'
            label='Username'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <Input
            type='password'
            placeholder='Password'
            label='Password'
            onChange={(e) => setPassword(e.target.value)}
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
