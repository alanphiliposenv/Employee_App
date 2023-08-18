import { FC } from 'react';
import './styles.css';

export type StatusPropTypes = {
  status: string;
};

const statusMap = {
  active: { text: 'Active', className: 'active' },
  inactive: { text: 'Inactive', className: 'inactive' },
  probation: { text: 'Probation', className: 'probation' },
  ['']: { text: 'Unknown', className: 'inactive' }
};

const Status: FC<StatusPropTypes> = ({ status }) => {
  const { text, className } = statusMap[status];

  return <div className={`status ${className}`}>{text}</div>;
};

export default Status;
