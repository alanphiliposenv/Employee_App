import { Department } from '../types/department.type';
import baseApi from './index';
import { TagType } from './types';

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDeparments: builder.query<{ data: Department[] }, void>({
      query: () => ({
        url: '/departments',
        method: 'GET'
      }),
      providesTags: [TagType.DEPARTMENT_LIST]
    })
  })
});

export const { useGetAllDeparmentsQuery } = departmentApi;
