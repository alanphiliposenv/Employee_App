import { FC } from 'react';
import './styles.css';

type SidebarPropTypes = {
  text: string;
  onClick?: () => void;
};

const Sidebar: FC<SidebarPropTypes> = ({ text, onClick }) => {
  return (
    <div className='page-sidebar'>
      <div className='sidebar-text' onClick={onClick}>
        <img src='/assets/icons/employees.svg' alt='employees' />
        {text}
      </div>
    </div>
  );
};

export default Sidebar;
