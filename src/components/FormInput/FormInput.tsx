import { FC } from 'react';
import './styles.css';

type InputPropTypes = {
  type: 'text' | 'password';
  placeholder: string;
  label?: string;
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
};

const FormInput: FC<InputPropTypes> = ({ type, placeholder, label, value, onChange, disabled }) => {
  return (
    <div className='text-form-input'>
      <label className='form-input-label'>{label}</label>
      <input
        disabled={disabled}
        className='form-input'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default FormInput;
