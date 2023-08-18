import { FC } from 'react';
import './styles.css';

export type DropdownOptionsType = {
  label: string;
  value: string | number;
};

export type FormDropdownPropType = {
  placeholder?: string;
  label?: string;
  options: DropdownOptionsType[];
  value?: string | number;
  onChange?: (v) => void;
};

const FormDropdown: FC<FormDropdownPropType> = ({
  label,
  value,
  onChange,
  options,
  placeholder
}) => {
  return (
    <div className='form-dropdown'>
      <label data-testid='form-dropdown-label'>{label}</label>
      <select
        className='form-dropdown-select'
        value={value}
        style={value === '' || value === -1 ? { color: 'gray' } : { color: 'black' }}
        onChange={(e) => onChange(e.target.value)}
        data-testid='form-dropdown-select'
      >
        <option
          value={typeof value === 'number' ? -1 : ''}
          disabled
          hidden
          data-testid='form-dropdown-placeholder'
        >
          {placeholder}
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value} data-testid='form-dropdown-option'>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormDropdown;
