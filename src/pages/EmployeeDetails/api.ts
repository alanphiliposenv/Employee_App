import baseApi from '../../service';
import { Employee } from '../../types/employee.type';

export const employeeDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeById: builder.query<{ data: Employee }, { id: number }>({
      query: (params) => ({
        url: `/employees/${params.id}`,
        method: 'GET'
      })
    })
  })
});

export const { useGetEmployeeByIdQuery } = employeeDetailsApi;
