import { FC } from 'react';
import './styles.css';

type InputPropTypes = {
  type: 'text' | 'password';
  placeholder: string;
  label: string;
  value: string;
  onChange: (v) => void;
};

const Input: FC<InputPropTypes> = ({ type, label, value, onChange }) => {
  return (
    <div className='login-input'>
      <input
        className='login-input-text-field'
        type={type}
        placeholder=''
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <label className='login-input-label'>{label}</label>
    </div>
  );
};

export default Input;
