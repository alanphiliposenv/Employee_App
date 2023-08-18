import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const employeeService = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => ({
        url: '/employee',
        method: 'GET'
      })
    }),
    updateEmployee: builder.mutation({
      query: () => ({
        url: '/employee',
        method: 'POST'
      })
    })
  })
});

export default employeeService;
export const { useGetEmployeesQuery, useLazyGetEmployeesQuery } = employeeService;
