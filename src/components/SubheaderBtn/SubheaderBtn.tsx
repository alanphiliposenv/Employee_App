import { FC } from 'react';
import './styles.css';
import SvgIcon from '../SvgIcon/SvgIcon';

type SubheaderPropTypes = {
  type: 'create' | 'edit';
  onClick?: () => void;
};

const subheaderBtnMap: {
  [key: string]: { text: string; icon: 'edit' | 'plus' };
} = {
  edit: { text: 'Edit Employee', icon: 'edit' },
  create: { text: 'Create Employee', icon: 'plus' }
};

const SubheaderBtn: FC<SubheaderPropTypes> = ({ type, onClick }) => {
  const { text, icon } = subheaderBtnMap[type];

  return (
    <button className='subheader-btn' onClick={onClick}>
      <div className='subheader-btn-icon'>
        <SvgIcon className='subheader-btn-svg' icon={icon} />
      </div>
      {text}
    </button>
  );
};

export default SubheaderBtn;
