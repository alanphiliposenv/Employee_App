import { FC, useEffect, useState } from 'react';
import './styles.css';
import Status from '../Status/Status';
import { useNavigate } from 'react-router-dom';
import SvgIcon from '../SvgIcon/SvgIcon';
import { useDeleteEmployeeMutation, useGetEmployeesQuery } from '../../pages/Employees/api';
import Popup from '../Popup/Popup';

type Employee = {
  name: string;
  id: number;
  joiningDate: string;
  role: string;
  status: string;
  experience: number;
};

type TablePropTypes = {
  employeeList?: Employee[];
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

const EmployeeList: FC<TablePropTypes> = () => {
  const { data, isError } = useGetEmployeesQuery();
  const [deleteEmployee] = useDeleteEmployeeMutation();
  const [showPopup, setShowPopup] = useState(false);
  const [popupConfirmCallback, setPopupConfirmCallback] = useState<() => void>(() => {});
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  useEffect(() => {
    if (isError) navigate('/login');
  }, [isError]);
  const employeeData = data?.data || [];

  const handleRowClick = (id: number) => {
    navigate(`/employee/${id}`);
  };

  return (
    <>
      <Popup
        header='Are you sure?'
        subtext='Do you really want to delete employee?'
        show={showPopup}
        confirmCallback={popupConfirmCallback}
        cancelCallback={() => setShowPopup(false)}
      />
      <table className='employee-table'>
        <thead>
          <tr className='employee-table-row employee-table-head-row'>
            {tableHeadings.map((heading) => {
              return <td key={heading}>{heading}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => {
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
                    {role === 'admin' && (
                      <>
                        <SvgIcon
                          className='delete-icon employee-table-action-icon'
                          icon='delete'
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowPopup(true);
                            setPopupConfirmCallback(() => {
                              return () => {
                                deleteEmployee({ id: employee.id });
                                setShowPopup(false);
                              };
                            });
                          }}
                        />
                        <SvgIcon
                          className='edit-icon employee-table-action-icon'
                          icon='edit'
                          onClick={(e) => {
                            navigate(`/employee/edit/${employee.id}`);
                            e.stopPropagation();
                          }}
                        />
                      </>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
