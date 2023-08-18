import { createReducer } from '@reduxjs/toolkit';
import { setEmployee } from '../actions/employeeAction';

const employeeReducer = createReducer({}, (builder) => {
  builder.addCase(setEmployee, (state, action) => {
    return action.payload.employee;
  });
});

export default employeeReducer;
