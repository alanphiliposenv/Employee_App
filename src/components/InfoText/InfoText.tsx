import { FC } from 'react';
import Status from '../Status/Status';
import './styles.css';

type InfoTextProps = {
  type: 'address' | 'text' | 'status';
  label: string;
  value: any;
};

const InfoText: FC<InfoTextProps> = ({ label, type, value }) => {
  return (
    <div className='info-text'>
      <div className='info-text-label'>{label}</div>
      {type === 'status' && <Status status={value} />}
      {type === 'text' && <div className='info-text-value'>{value}</div>}
      {type === 'address' && (
        <div className='info-text-value'>{`${value.address_line_1}, ${value.address_line_2}, ${value.city}, ${value.state}, ${value.country} ${value.pincode}`}</div>
      )}
    </div>
  );
};

export default InfoText;
