import { FC } from 'react';
import './styles.css';

type StatusPropTypes = {
  status: string;
};

const statusMap = {
  active: { text: 'Active', className: 'active' },
  inactive: { text: 'Inactive', className: 'inactive' },
  probation: { text: 'Probation', className: 'probation' }
};

const Status: FC<StatusPropTypes> = ({ status }) => {
  const { text, className } = statusMap[status];

  return <div className={`status ${className}`}>{text}</div>;
};

export default Status;
