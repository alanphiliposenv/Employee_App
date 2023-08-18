import baseApi from '../../service';
import { ApiType, TagType } from '../../service/types';
import { Employee } from '../../types/employee.type';

type EmployeeResponseType = {
  data: Employee[];
};

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<EmployeeResponseType, void>({
      query: () => ({
        url: '/employees?pageSize=2000',
        method: 'GET'
      }),
      providesTags: [TagType.EMPLOYEE_LIST]
    }),
    deleteEmployee: builder.mutation({
      query: (params: { id: number }) => ({
        url: `/employees/${params.id}`,
        method: ApiType.DELETE
      }),
      invalidatesTags: [TagType.EMPLOYEE_LIST]
    })
  })
});

export const { useGetEmployeesQuery, useDeleteEmployeeMutation } = employeeApi;
