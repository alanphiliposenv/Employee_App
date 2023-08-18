import baseApi from './index';
import { TagType } from './types';

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRoles: builder.query<{ data: string[] }, void>({
      query: () => ({
        url: '/roles',
        method: 'GET'
      }),
      providesTags: [TagType.ROLE_LIST]
    })
  })
});

export const { useGetAllRolesQuery } = departmentApi;
