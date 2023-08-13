import { FC } from 'react';
import './styles.css';

type SidebarPropTypes = {
  text: string;
};

const Sidebar: FC<SidebarPropTypes> = ({ text }) => {
  return (
    <div className='page-sidebar'>
      <div className='sidebar-text'>
        <img src='/assets/icons/employees.svg' alt='employees' />
        {text}
      </div>
    </div>
  );
};

export default Sidebar;
