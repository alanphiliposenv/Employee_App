import baseApi from '../../service';
import { ApiType, TagType } from '../../service/types';
import { Employee } from '../../types/employee.type';

export const editEmployeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    editEmployee: builder.mutation({
      query: (body: Employee) => ({
        url: `/employees/${body.id}`,
        method: ApiType.PATCH,
        body
      }),
      invalidatesTags: [TagType.EMPLOYEE_LIST]
    })
  })
});

export const { useEditEmployeeMutation } = editEmployeeApi;
