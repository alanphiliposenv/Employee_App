import baseApi from '../../service';
import { TagType } from '../../service/types';
import { Employee } from '../../types/employee.type';

export const createEmployeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEmployee: builder.mutation({
      query: (body: Employee) => ({
        method: 'POST',
        url: '/employees',
        body
      }),
      invalidatesTags: [TagType.EMPLOYEE_LIST]
    })
  })
});

export const { useCreateEmployeeMutation } = createEmployeeApi;
