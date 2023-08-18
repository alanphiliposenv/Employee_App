import { FC } from 'react';
import './styles.css';

export type ButtonPropTypes = {
  text?: string;
  type?: 'filled' | 'empty';
  onClick?: (e) => void;
};

const Button: FC<ButtonPropTypes> = ({ text, onClick, type }) => {
  return (
    <button onClick={onClick} className={`btn ${type}`} data-testid='button-test'>
      {text}
    </button>
  );
};

export default Button;
