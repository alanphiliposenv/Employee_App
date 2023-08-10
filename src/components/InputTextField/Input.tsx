import { ChangeEvent, FC } from 'react';
import './styles.css';

type InputPropTypes = {
  type: 'text' | 'password';
  placeholder: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<InputPropTypes> = ({ type, placeholder, label, value, onChange }) => {
  return (
    <div className='text-input'>
      <label>{label}</label>
      <input
        className='.input'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
