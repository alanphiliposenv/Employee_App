import { FC } from 'react';
import './styles.css';

type InputPropTypes = {
  placeholder: string;
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
};

const FormDropdown: FC<InputPropTypes> = ({ label, value, onChange, options, placeholder }) => {
  return (
    <div className='form-dropdown'>
      <label>{label}</label>
      <select
        className='form-dropdown-select'
        value={value}
        style={value === '' ? { color: 'gray' } : { color: 'black' }}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value='' disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormDropdown;
