import { createAction } from '@reduxjs/toolkit';
import { Employee } from '../types/employee.type';

type EmployeeActionType = {
  employee: Employee;
};

export const setEmployee = createAction<EmployeeActionType>('SET_EMPLOYEE');
