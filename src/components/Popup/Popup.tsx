import { FC } from 'react';
import Button from '../Button/Button';
import './styles.css';
import SvgIcon from '../SvgIcon/SvgIcon';

type PopupPropTypes = {
  show: boolean;
  header: string;
  subtext: string;
  confirmCallback?: () => void;
  cancelCallback?: () => void;
};

const Popup: FC<PopupPropTypes> = ({ show, header, subtext, confirmCallback, cancelCallback }) => {
  return (
    show && (
      <div className='overlay'>
        <div className='popup'>
          <div className='popup-close-btn'>
            <SvgIcon icon='close' onClick={cancelCallback} />
          </div>
          <div className='popup-header'>{header}</div>
          <div className='popup-subtext'>{subtext}</div>
          <div className='popup-action-btns'>
            <Button type='filled' text='Confirm' onClick={confirmCallback} />
            <Button type='empty' text='Cancel' onClick={cancelCallback} />
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
