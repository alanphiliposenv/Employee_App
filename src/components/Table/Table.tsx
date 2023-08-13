import { FC } from 'react';
import './styles.css';
import Status from '../Status/Status';
import { useNavigate } from 'react-router-dom';
import SvgIcon from '../SvgIcon/SvgIcon';

type Employee = {
  name: string;
  id: number;
  joiningDate: string;
  role: string;
  status: string;
  experience: number;
};

type TablePropTypes = {
  employees: Employee[];
};

const tableHeadings = [
  'Employee Name',
  'Employee ID',
  'Joining Date',
  'Role',
  'Status',
  'Experience',
  'Action'
];

const Table: FC<TablePropTypes> = ({ employees }) => {
  const navigate = useNavigate();

  const handleRowClick = (id: number) => {
    navigate(`/employee/${id}`);
  };

  return (
    <table className='employee-table'>
      <thead>
        <tr className='employee-table-row employee-table-head-row'>
          {tableHeadings.map((heading) => {
            return <td key={heading}>{heading}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => {
          return (
            <tr
              onClick={() => handleRowClick(employee.id)}
              key={employee.id}
              className='employee-table-row employee-table-body-row'
            >
              <td>{employee.name}</td>
              <td className='employee-table-id-cell'>{employee.id}</td>
              <td>{employee.joiningDate}</td>
              <td>{employee.role}</td>
              <td>
                <Status status={employee.status} />
              </td>
              <td>
                {employee.experience} {employee.experience === 1 ? 'year' : 'years'}
              </td>
              <td>
                <div className='employee-table-action-buttons'>
                  <SvgIcon className='delete-icon employee-table-action-icon' icon='delete' />
                  <SvgIcon
                    className='edit-icon employee-table-action-icon'
                    icon='edit'
                    onClick={(e) => {
                      navigate(`/employee/edit/${employee.id}`);
                      e.stopPropagation();
                    }}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
