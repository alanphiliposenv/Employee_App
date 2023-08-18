import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TagType } from './types';

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');

      if (token) headers.set('Authorization', `Bearer ${token}`);
    }
  }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: [TagType.EMPLOYEE_LIST, TagType.DEPARTMENT_LIST, TagType.ROLE_LIST]
});

export default baseApi;
