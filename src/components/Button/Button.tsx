import { FC } from 'react';
import './styles.css';

type ButtonPropTypes = {
  text: string;
  type: 'filled' | 'empty';
  onClick: (e) => void;
};

const Button: FC<ButtonPropTypes> = ({ text, onClick, type }) => {
  return (
    <button onClick={onClick} className={`btn ${type}`}>
      {text}
    </button>
  );
};

export default Button;
