import { FC } from 'react';
import './styles.css';

const Header: FC = () => {
  return (
    <header className='page-header'>
      <img id='logo' src='/assets/img/kv-logo.png' alt='Logo' />
    </header>
  );
};

export default Header;
