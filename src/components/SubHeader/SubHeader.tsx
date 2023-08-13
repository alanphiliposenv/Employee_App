import { FC } from 'react';
import './styles.css';

type TitleCardPropTypes = {
  title: string;
};

const SubHeader: FC<TitleCardPropTypes> = ({ title, children }) => (
  <div className='subheader'>
    <div>{title}</div>
    <div className='subheader-rhs'>{children}</div>
  </div>
);

export default SubHeader;
